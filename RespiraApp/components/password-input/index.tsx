import { useCallback, useMemo, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { TextInput } from "react-native-paper";
import Ionicons from "@expo/vector-icons/Ionicons";

import { COLORS } from "@/constants";

import type { PasswordInputPropsType } from "./types";
import { styles } from "./styles";

export const PasswordInput = ({
  value,
  label,
  placeholder,
  isEditable = true,
  isDisabled = false,
  autoCapitalize = "none",
  keyboardType,
  maxLength,
  error,
  rightIcon,
  showVisibilityToggle = true,
  onChange,
}: PasswordInputPropsType) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

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

  const renderVisibilityIcon = useCallback(() => {
    const iconName = isPasswordVisible ? "eye-off" : "eye";

    return (
      showVisibilityToggle && (
        <TouchableOpacity
          style={styles.visibilityToggle}
          onPress={() => setIsPasswordVisible(!isPasswordVisible)}
        >
          <Ionicons name={iconName} size={20} color={COLORS.primary} />
        </TouchableOpacity>
      )
    );
  }, [isPasswordVisible]);

  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        label={label}
        error={!!error}
        right={rightIcon}
        mode="outlined"
        maxLength={maxLength}
        outlineColor={COLORS.primaryLight}
        cursorColor={COLORS.primaryLight}
        textColor={COLORS.text}
        activeOutlineColor={COLORS.primaryLight}
        editable={canEdit}
        style={styles.input}
        placeholder={placeholder}
        autoCapitalize={autoCapitalize}
        keyboardType={keyboardType}
        secureTextEntry={!isPasswordVisible}
        onChangeText={onChange}
      />
      {renderVisibilityIcon()}
      {renderError()}
    </View>
  );
};
