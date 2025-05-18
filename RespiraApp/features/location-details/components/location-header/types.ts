export interface LocationHeaderProps {
  name: string;
  city: string;
  state: string;
  isFavorite: boolean;
  onPressFavorite: VoidFunction;
}
