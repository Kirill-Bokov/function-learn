import { useContext, useState, useRef, useEffect } from "react";
import { LanguageContext } from "@/LanguageContext";
import styles from "./Header.module.css";
import { headerOptions } from "./consts";
import { Language } from "@/shared/types";
import { LanguageDropdown } from "@components/LanguageDropdown";

export const Header = () => {
  const { language, setLanguage } = useContext(LanguageContext);
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selected = headerOptions.find((opt) => opt.value === language);

  const handleSelect = (value: Language) => {
    setLanguage(value);
    setOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (mouseEvent: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(mouseEvent.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.header__logo}>function learn() {"{}"}</div>
      <div className={styles.header__dropdown} ref={dropdownRef}>
        <button
          className={styles.dropdown__button}
          onClick={() => setOpen((prev) => !prev)}
        >
          {selected && (
            <img
              src={selected?.icon}
              alt={selected?.label}
              className={styles.dropdown__icon}
            />
          )}
        </button>
        {open && (
          <ul className={styles.dropdown__list}>
            {headerOptions.map((languageOption) => (
              <LanguageDropdown
                key={languageOption.value}
                value={languageOption.value}
                label={languageOption.label}
                icon={languageOption.icon}
                onSelect={handleSelect}
              />
            ))}
          </ul>
        )}
      </div>
    </header>
  );
};
