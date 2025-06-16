import { useState } from "react";
import { TopicCard } from "@components/TopicCard";
import { SearchBar } from "@components/SearchBar";
import useIndexedDB from "hooks/useIndexedDB/useIndexedDB";
import styles from "./TopicRenderer.module.css";
import { Card } from "../../shared/types";

export const TopicRenderer = () => {
  const { cards, isLoading } = useIndexedDB();
  const [filteredCards, setFilteredCards] = useState<Card[]>([]);
  const searchInput = (userInput: string) => {
    if (!userInput) {
      setFilteredCards([]);
      return;
    }

    const filtered = cards.filter(
      (card: Card) =>
        card.title.toLowerCase().includes(userInput.toLowerCase()) ||
        card.description.toLowerCase().includes(userInput.toLowerCase())
    );
    setFilteredCards(filtered);
  };

  if (isLoading) return <div>Загрузка...</div>;

  return (
    <div className={styles.mainList}>
      <SearchBar onSearch={searchInput} />
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
