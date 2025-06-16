import React from "react";
import styles from "./SearchBar.module.css";

interface SearchBarProps {
  onSearch: (input: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  return (
    <input
      type="text"
      placeholder="Поиск по описанию"
      onChange={(e) => onSearch(e.target.value)}
      className={styles.input}
    />
  );
};
