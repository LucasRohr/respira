import { useState } from "react";
import { useRouter } from "expo-router";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";

import type { ICommorbidity, IRegisterUser } from "@/interfaces";
import { useUserStore } from "@/store";
import { registerUser } from "@/services";

export const useRegisterHook = () => {
  const setLoggedUser = useUserStore((state) => state.setLoggedUser);
  const router = useRouter();

  const [commorbidities, setCommorbidities] = useState<ICommorbidity[]>([
    { cid: "", name: "", severity: "" },
  ]);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Omit<IRegisterUser, "commorbidities">>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      birthDate: "",
    },
  });

  const registerUserMutation = useMutation({
    mutationFn: (userRegister: IRegisterUser) => registerUser(userRegister),
    onSuccess: (newUser) => {
      if (newUser.id) {
        setLoggedUser(newUser);
        router.navigate("/tabs/home");
        control._reset();
        setCommorbidities([{ cid: "", name: "", severity: "" }]);
      }
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

  const onSubmit = (data: Omit<IRegisterUser, "commorbidities">) => {
    const { name, email, birthDate, password } = data;

    const hasValidData =
      name &&
      email &&
      birthDate &&
      password &&
      commorbidities.every(
        ({ cid, name, severity }) => cid && name && severity
      );

    if (hasValidData) {
      registerUserMutation.mutate({
        ...data,
        commorbidities,
      });
    }
  };

  return {
    inputController: control,
    inputErrors: errors,
    commorbidities,
    addCommorbidity,
    removeCommorbidity,
    updateCommorbidity,
    handleSubmit: handleSubmit(onSubmit),
    registerUserMutation,
  };
};
