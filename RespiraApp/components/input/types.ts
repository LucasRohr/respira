import { NativeSyntheticEvent, TextInputChangeEventData } from "react-native";

export type InputPropsType = {
  value: string;
  label: string;
  placeholder: string;
  onChange: (text: string) => void;
  isEditable?: boolean;
  isDisabled?: boolean;
  autoCapitalize?: "none" | "sentences" | "words" | "characters" | undefined;
  error?: string | undefined | null;
  rightIcon?: React.ReactNode;
};
