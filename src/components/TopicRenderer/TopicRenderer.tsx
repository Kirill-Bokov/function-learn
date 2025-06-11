import { useState } from "react";
import { TopicCard } from "../TopicCard";
import { SearchBar } from "../SearchBar";
import useIndexedDB from  "../SearchBar";

export const TopicRenderer = () => {
  const CardList = () => {
    const { cards, isLoading } = useIndexedDB();
    const [filteredCards, setFilteredCards] = useState([]);

    interface Card {
      id: string;
      title: string;
      description: string;
    }
    

    const searchInput = (userInput: string) => {
      if (!userInput) {
        setFilteredCards([]);
        return;
      }

      const filtered = cards.filter(
        (card: Card) =>
          card.title.toLowerCase().includes(userInput.toLowerCase()) ||
          card.description.toLowerCase().includes(userInput.toLowerCase()) //usememo?
      );
      setFilteredCards(filtered);
    };

    if (isLoading) return <div>Загрузка...</div>;

    return (
      <div className="card-list">
        <SearchBar onSearch={searchInput} />
        {(filteredCards.length > 0 ? filteredCards : cards).map((card: Card) => (
          <TopicCard key={card.id} card={card} />
        ))}
      </div>
    );
  };
};
