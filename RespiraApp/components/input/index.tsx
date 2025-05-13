import { useCallback, useMemo } from "react";
import { Text, View } from "react-native";
import { TextInput } from "react-native-paper";

import { styles } from "./styles";
import type { InputPropsType } from "./types";
import { COLORS } from "@/constants";

export const Input = ({
  value,
  label,
  placeholder,
  onChange,
  isEditable = true,
  isDisabled = false,
  autoCapitalize = "none",
  error,
  rightIcon,
}: InputPropsType) => {
  const canEdit = useMemo(
    () => isEditable && !isDisabled,
    [isEditable, isDisabled]
  );

  const renderError = useCallback(() => {
    if (!error) {
      return null;
    }

    return <Text style={styles.errorMessage}>{error}</Text>;
  }, [error]);

  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        label={label}
        error={!!error}
        right={rightIcon}
        mode="outlined"
        outlineColor={COLORS.primaryLight}
        cursorColor={COLORS.primaryLight}
        textColor={COLORS.text}
        activeOutlineColor={COLORS.primaryLight}
        editable={canEdit}
        style={styles.input}
        placeholder={placeholder}
        autoCapitalize={autoCapitalize}
        onChangeText={onChange}
      />
      {renderError()}
    </View>
  );
};
