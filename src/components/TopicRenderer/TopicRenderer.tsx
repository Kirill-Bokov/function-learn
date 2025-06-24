import { useState, useContext, useEffect } from "react";
import { LanguageContext } from "@/LanguageContext";
import { TopicCard } from "@components/TopicCard";
import { SearchBar } from "@components/SearchBar";
import useIndexedDB from "hooks/useIndexedDB/useIndexedDB";
import styles from "./TopicRenderer.module.css";
import { Card } from "../../shared/types";
import { GigaChatPanel } from "@components/GigaChatPanel";

export const TopicRenderer = () => {
  const { cards, isLoading } = useIndexedDB();
  const [filteredCards, setFilteredCards] = useState<Card[]>([]);
  const { language } = useContext(LanguageContext);

  const [input, setInput] = useState("");
  const [debouncedInput, setDebouncedInput] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedInput(input);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [input]);

  const searchInput = (userInput: string) => {
    setInput(userInput);
    if (!userInput) {
      setFilteredCards([]);
      return;
    }

    const filtered = cards.filter(
      (card: Card) =>
        card.title[language].toLowerCase().includes(userInput.toLowerCase()) ||
        card.description[language]
          .toLowerCase()
          .includes(userInput.toLowerCase())
    );
    setFilteredCards(filtered);
  };

  if (isLoading) return <div>Загрузка...</div>;

  return (
    <div className={styles.mainList}>
      <SearchBar onSearch={searchInput} />
      <GigaChatPanel prompt={debouncedInput} />
      <div className={styles.cardList}>
        {(filteredCards.length > 0 ? filteredCards : cards).map(
          (card: Card) => (
            <TopicCard key={card.id} card={card} />
          )
        )}
      </div>
    </div>
  );
};
