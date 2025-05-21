import { useForm } from "react-hook-form";
import { useRouter } from "expo-router";
import { useMutation } from "@tanstack/react-query";

import { ILoginUser } from "@/interfaces";
import { loginUser } from "@/services";
import { useUserStore } from "@/store";

export const useLoginUser = () => {
  const setLoggedUser = useUserStore((state) => state.setLoggedUser);
  const router = useRouter();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginUser>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const loginUserMutation = useMutation({
    mutationFn: (loginData: ILoginUser) => loginUser(loginData),
    onSuccess: (newUser) => {
      if (newUser.id) {
        setLoggedUser(newUser);
        router.navigate("/tabs/home");
      }
    },
  });

  const onSubmit = (data: ILoginUser) => {
    const { email, password } = data;

    const hasValidData = email && password;

    if (hasValidData) {
      loginUserMutation.mutate({
        ...data,
      });
    }
  };

  return {
    inputController: control,
    inputErrors: errors,
    loginUserMutation,
    handleSubmit: handleSubmit(onSubmit),
  };
};
