import { useCallback } from "react";
import { View, Text } from "react-native";

import { styles } from "./styles";
import { useUpdateUserProfile } from "./hooks";
import { PROFILE_PAGE_STRINGS } from "./strings";
import { Button, Input } from "@/components";
import { Controller } from "react-hook-form";

export const ProfilePage = () => {
  const {
    currentUser,
    inputController,
    inputErrors,
    handleSubmit,
    updateUserMutation,
    addCommorbidity,
    removeCommorbidity,
    updateCommorbidity,
  } = useUpdateUserProfile();

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
              label={PROFILE_PAGE_STRINGS.NAME_INPUT_LABEL}
              placeholder={PROFILE_PAGE_STRINGS.NAME_INPUT_PLACEHOLDER}
              onChange={onChange}
              value={value}
              error={inputErrors.name?.message}
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
              label={PROFILE_PAGE_STRINGS.EMAIL_INPUT_LABEL}
              placeholder={PROFILE_PAGE_STRINGS.EMAIL_INPUT_PLACEHOLDER}
              onChange={onChange}
              value={value}
              error={inputErrors.email?.message}
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
              label={PROFILE_PAGE_STRINGS.BIRTHDAY_INPUT_LABEL}
              placeholder={PROFILE_PAGE_STRINGS.BIRTHDAY_INPUT_PLACEHOLDER}
              onChange={onChange}
              value={value}
              error={inputErrors.birthDate && "aaa"}
            />
          )}
        />
      </View>
    );
  }, [inputController, inputErrors]);

  const renderContent = useCallback(() => {
    if (!currentUser) {
      return null;
    }

    return (
      <View style={styles.container}>
        <Text style={styles.text}>{PROFILE_PAGE_STRINGS.TITLE}</Text>
        {renderBaseDataForm()}

        <Button
          title={PROFILE_PAGE_STRINGS.BUTTON_TITLE}
          isLoading={updateUserMutation.isPending}
          onPress={handleSubmit}
        />
      </View>
    );
  }, [currentUser, updateUserMutation, renderBaseDataForm, handleSubmit]);

  return renderContent();
};
