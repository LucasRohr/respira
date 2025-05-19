import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";

import type { ICommorbidity, IUpdateUserProfile, IUser } from "@/interfaces";
import { QUERY_KEYS, queryClient } from "@/constants";
import { updateUserProfile } from "@/services";
import { useUserStore } from "@/store";

const buildOptimisticUser = (
  newProfileData: IUpdateUserProfile,
  currentUser?: IUser
): IUser => ({
  id: currentUser?.id ?? 0,
  name: newProfileData.name,
  birthDate: newProfileData.birthDate,
  email: newProfileData.email,
  commorbidities: newProfileData.commorbidities,
  token: currentUser?.token ?? "",
  fcmToken: currentUser?.fcmToken ?? "",
});

export const useUpdateUserProfile = () => {
  const currentUser = useUserStore((state) => state.user);
  const setLoggedUser = useUserStore((state) => state.setLoggedUser);

  const [commorbidities, setCommorbidities] = useState<ICommorbidity[]>(
    currentUser?.commorbidities ?? []
  );

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Omit<IUpdateUserProfile, "commorbidities">>({
    defaultValues: {
      name: currentUser?.name,
      email: currentUser?.email,
      birthDate: currentUser?.birthDate,
    },
  });

  const updateUserMutation = useMutation({
    mutationFn: (newProfileData: IUpdateUserProfile) =>
      updateUserProfile(newProfileData),
    onMutate: async (newProfileData) => {
      // Cancel any outgoing refetches
      // (so they don't overwrite our optimistic update)
      await queryClient.cancelQueries({ queryKey: [QUERY_KEYS.GET_USER] });

      // Snapshot the previous value
      const previousUser = queryClient.getQueryData([QUERY_KEYS.GET_USER]);

      // Optimistically update to the new value
      queryClient.setQueryData([QUERY_KEYS.GET_USER], () =>
        buildOptimisticUser(newProfileData, currentUser)
      );

      // Return a context object with the snapshotted value
      return { previousUser };
    },
    // If the mutation fails,
    // use the context returned from onMutate to roll back
    onError: (err, newProfileData, context) => {
      queryClient.setQueryData([QUERY_KEYS.GET_USER], context?.previousUser);
    },
    onSuccess: (_, newData) => {
      setLoggedUser(buildOptimisticUser(newData, currentUser));
    },
    // Always refetch after error or success:
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.GET_USER] });
    },
  });

  const addCommorbidity = () => {
    setCommorbidities((prevList) => [
      ...prevList,
      { cid: "", name: "", severity: "" },
    ]);
  };

  const removeCommorbidity = (index: number) => {
    const currentCommorbidities = [...commorbidities];

    currentCommorbidities.splice(index, 1);

    setCommorbidities(currentCommorbidities);
  };

  const updateCommorbidity = (data: ICommorbidity, index: number) => {
    const currentCommorbidities = [...commorbidities];

    currentCommorbidities[index] = data;

    setCommorbidities(currentCommorbidities);
  };

  const onSubmit = (data: Omit<IUpdateUserProfile, "commorbidities">) => {
    const { name, email, birthDate } = data;

    const hasValidData = name && email && birthDate && commorbidities.length;

    if (hasValidData) {
      updateUserMutation.mutate({
        ...data,
        commorbidities,
      });
    }
  };

  return {
    currentUser,
    inputController: control,
    inputErrors: errors,
    commorbidities,
    addCommorbidity,
    removeCommorbidity,
    updateCommorbidity,
    handleSubmit: handleSubmit(onSubmit),
    updateUserMutation,
  };
};
