import { FC } from "react";
import { LanguageDropdownProps } from "./LanguageDropdownProps";
import styles from "./LanguageDropdown.module.css";

export const LanguageDropdown: FC<LanguageDropdownProps> = ({
  value,
  label,
  icon,
  onSelect,
}) => {
  return (
    <li className={styles.dropdown__item} onClick={() => onSelect(value)}>
      <img src={icon} alt={label} className={styles.dropdown__icon} />
      <span>{label}</span>
    </li>
  );
};
