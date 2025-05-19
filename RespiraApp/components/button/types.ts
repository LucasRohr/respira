export enum ButtonType {
  PRIMARY,
  SECONDARY,
}

export type ButtonPropsType = {
  title: string;
  type?: ButtonType;
  isDisabled?: boolean;
  isLoading?: boolean;
  onPress: () => void;
};
