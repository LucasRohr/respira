import type { ICommorbidity } from "@/interfaces";

export interface CommorbiditiesFormProps {
  commorbidities: ICommorbidity[];
  onAddCommorbidity: VoidFunction;
  onRemoveCommorbidity: (index: number) => void;
  onUpdateCommorbidity: (data: ICommorbidity, index: number) => void;
}
