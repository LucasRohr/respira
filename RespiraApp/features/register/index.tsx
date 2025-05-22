import { useCallback } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { Controller } from "react-hook-form";
import { Link } from "expo-router";

import { LOGO } from "@/assets";
import { Button, CommorbiditiesForm, Input, PasswordInput } from "@/components";

import { useRegisterHook } from "./hook";
import { REGISTER_PAGE_STRINGS } from "./strings";
import { styles } from "./styles";

export const RegisterPage = () => {
  const {
    inputController,
    inputErrors,
    handleSubmit,
    registerUserMutation,
    commorbidities,
    addCommorbidity,
    removeCommorbidity,
    updateCommorbidity,
  } = useRegisterHook();

  const renderBaseDataForm = useCallback(() => {
    return (
      <View>
        <Controller
          name="name"
          control={inputController}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, value } }) => (
            <Input
              label={REGISTER_PAGE_STRINGS.NAME_INPUT_LABEL}
              placeholder={REGISTER_PAGE_STRINGS.NAME_INPUT_PLACEHOLDER}
              onChange={onChange}
              value={value}
              error={inputErrors.name && REGISTER_PAGE_STRINGS.NAME_INPUT_ERROR}
            />
          )}
        />
        <Controller
          name="email"
          control={inputController}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, value } }) => (
            <Input
              label={REGISTER_PAGE_STRINGS.EMAIL_INPUT_LABEL}
              placeholder={REGISTER_PAGE_STRINGS.EMAIL_INPUT_PLACEHOLDER}
              onChange={onChange}
              value={value}
              error={
                inputErrors.email && REGISTER_PAGE_STRINGS.EMAIL_INPUT_ERROR
              }
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
              label={REGISTER_PAGE_STRINGS.PASSWORD_INPUT_LABEL}
              placeholder={REGISTER_PAGE_STRINGS.PASSWORD_INPUT_PLACEHOLDER}
              onChange={onChange}
              value={value}
              error={
                inputErrors.password &&
                REGISTER_PAGE_STRINGS.PASSWORD_INPUT_ERROR
              }
            />
          )}
        />
        <Controller
          name="birthDate"
          control={inputController}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, value } }) => (
            <Input
              label={REGISTER_PAGE_STRINGS.BIRTHDAY_INPUT_LABEL}
              placeholder={REGISTER_PAGE_STRINGS.BIRTHDAY_INPUT_PLACEHOLDER}
              value={value}
              keyboardType="number-pad"
              maxLength={10}
              error={
                inputErrors.birthDate &&
                REGISTER_PAGE_STRINGS.BIRTHDAY_INPUT_ERROR
              }
              onChange={onChange}
            />
          )}
        />
      </View>
    );
  }, [inputController, inputErrors]);

  const renderContent = useCallback(() => {
    return (
      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContentContainer}
      >
        <View>
          <View style={styles.pageHeader}>
            <Text style={styles.title}>{REGISTER_PAGE_STRINGS.TITLE}</Text>

            <Image source={LOGO} style={styles.logo} />
          </View>

          <Text style={styles.description}>
            {REGISTER_PAGE_STRINGS.DESCRIPTION}
          </Text>

          {renderBaseDataForm()}

          <Text style={styles.textCommorbidity}>
            {REGISTER_PAGE_STRINGS.COMMORBIDITIES}
          </Text>
          <CommorbiditiesForm
            commorbidities={commorbidities}
            onAddCommorbidity={addCommorbidity}
            onRemoveCommorbidity={removeCommorbidity}
            onUpdateCommorbidity={updateCommorbidity}
          />
        </View>

        <Button
          title={REGISTER_PAGE_STRINGS.BUTTON_TITLE}
          isLoading={registerUserMutation.isPending}
          onPress={handleSubmit}
        />

        <Link style={styles.loginLink} href="..">
          {REGISTER_PAGE_STRINGS.LOGIN_LINK_LABEL}
        </Link>
      </ScrollView>
    );
  }, [registerUserMutation, renderBaseDataForm, handleSubmit]);

  return renderContent();
};
