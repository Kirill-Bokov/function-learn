import { useState } from 'react';
import { TopicCard } from './TopicCard';
import { SearchBar } from './SearchBar';
import { useIndexedDB } from '../hooks/useIndexedDB';

export const CardList = () => {
  const { cards, isLoading } = useIndexedDB();
  const [filteredCards, setFilteredCards] = useState([]);

  const searchInput = (userInput) => {
    if (!userInput) {
      setFilteredCards([]);
      return;
    }

    const filtered = cards.filter(
      card =>
        card.title.toLowerCase().includes(userInput.toLowerCase()) ||
        card.description.toLowerCase().includes(userInput.toLowerCase())
    );
    setFilteredCards(filtered);
  };

  if (isLoading) return <div>Загрузка...</div>;

  return (
    <div className="card-list">
      <SearchBar onSearch={searchInput} />
      {(filteredCards.length > 0 ? filteredCards : cards).map(card => (
        <TopicCard key={card.id} card={card} />
      ))}
    </div>
  );
};
