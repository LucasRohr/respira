import { useCallback } from "react";
import { View, Text } from "react-native";

import { styles } from "./styles";
import { useUpdateUserProfile } from "./hooks";
import { PROFILE_PAGE_STRINGS } from "./strings";
import { Button } from "@/components";

export const ProfilePage = () => {
  const {
    currentUser,
    inputController,
    inputErrors,
    handleSubmit,
    addCommorbidity,
    removeCommorbidity,
    updateCommorbidity,
  } = useUpdateUserProfile();

  const onPressSend = () => {};

  const renderBaseDataForm = useCallback(() => {
    return <></>;
  }, []);

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
          onPress={onPressSend}
        />
      </View>
    );
  }, [currentUser]);

  return renderContent();
};
