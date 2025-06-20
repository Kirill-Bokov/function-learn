import { Language } from "@/shared/types";

export type LanguageDropdownProps = {
  value: Language;
  label: string;
  icon: string;
  onSelect: (value: Language) => void;
};
