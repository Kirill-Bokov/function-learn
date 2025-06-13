import React from "react";
import { CardProps } from "./CardProps";
import styles from "./TopicCard.module.css"


export const TopicCard: React.FC<CardProps> = ({ card }) => {
  return (
    <div className={styles.cardStyle}>
      <h3>{card.title}</h3>
      <p>{card.description}</p>
      {card.image && (
        <img
          src={card.image}
        />
      )}
    </div>
  );
};
