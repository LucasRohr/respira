import { useCallback } from "react";
import { Image, Text, View } from "react-native";
import { Controller } from "react-hook-form";
import { Link } from "expo-router";

import { LOGO } from "@/assets";
import { Button, Input, PasswordInput } from "@/components";

import { LOGIN_PAGE_STRINGS } from "./strings";
import { styles } from "./styles";
import { useLoginUser } from "./hooks";

export const LoginPage = () => {
  const { inputController, inputErrors, loginUserMutation, handleSubmit } =
    useLoginUser();

  const renderLoginForm = useCallback(() => {
    return (
      <View style={styles.formContainer}>
        <Controller
          name="email"
          control={inputController}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, value } }) => (
            <Input
              label={LOGIN_PAGE_STRINGS.EMAIL_INPUT_LABEL}
              placeholder={LOGIN_PAGE_STRINGS.EMAIL_INPUT_PLACEHOLDER}
              onChange={onChange}
              value={value}
              error={inputErrors.email && LOGIN_PAGE_STRINGS.EMAIL_INPUT_ERROR}
            />
          )}
        />
        <Controller
          name="password"
          control={inputController}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, value } }) => (
            <PasswordInput
              label={LOGIN_PAGE_STRINGS.PASSWORD_INPUT_LABEL}
              placeholder={LOGIN_PAGE_STRINGS.PASSWORD_INPUT_PLACEHOLDER}
              onChange={onChange}
              value={value}
              error={
                inputErrors.password && LOGIN_PAGE_STRINGS.PASSWORD_INPUT_ERROR
              }
            />
          )}
        />
      </View>
    );
  }, [inputController, inputErrors]);

  return (
    <View style={styles.container}>
      <View style={styles.appBrandContainer}>
        <Text style={styles.appName}>{LOGIN_PAGE_STRINGS.APP_NAME}</Text>
        <Image source={LOGO} style={styles.logo} />
      </View>

      <Text style={styles.description}>{LOGIN_PAGE_STRINGS.DESCRIPTION}</Text>

      {renderLoginForm()}

      <Button
        title={LOGIN_PAGE_STRINGS.LOGIN_BUTTON_LABEL}
        isLoading={loginUserMutation.isPending}
        onPress={handleSubmit}
      />

      <Link style={styles.registerLink} href="/tabs/home">
        {LOGIN_PAGE_STRINGS.REGISTER_LINK_LABEL}
      </Link>
    </View>
  );
};
