import type { KeyboardTypeOptions } from "react-native";

export type PasswordInputPropsType = {
  value: string;
  label: string;
  placeholder: string;
  onChange: (text: string) => void;
  isEditable?: boolean;
  isDisabled?: boolean;
  maxLength?: number;
  autoCapitalize?: "none" | "sentences" | "words" | "characters" | undefined;
  keyboardType?: KeyboardTypeOptions;
  error?: string | undefined | null;
  rightIcon?: React.ReactNode;
  showVisibilityToggle?: boolean;
};
