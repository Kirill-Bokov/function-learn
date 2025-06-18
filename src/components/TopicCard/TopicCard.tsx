import React from "react";
import { useNavigate } from "react-router-dom";
import { CardProps } from "./CardProps";
import styles from "./TopicCard.module.css";


export const TopicCard: React.FC<CardProps> = ({ card }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/topic/${card.id}`);
  };

  return (
    <div className={styles.cardStyle} onClick={handleClick}>
      <h3>{card.title}</h3>
      <p>{card.description}</p>
      {card.image && <img src={card.image} />}
    </div>
  );
};
