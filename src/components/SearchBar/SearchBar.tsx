import React from "react";
import { useContext } from "react";
import styles from "./SearchBar.module.css";
import { LanguageContext } from "@/LanguageContext";

interface SearchBarProps {
  onSearch: (input: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const { language } = useContext(LanguageContext);
  const placeholderText =
    language === "en" ? "Search by description" : "Поиск по описанию";
  return (
    <input
      type="text"
      placeholder={placeholderText}
      onChange={(e) => onSearch(e.target.value)}
      className={styles.input}
    />
  );
};
