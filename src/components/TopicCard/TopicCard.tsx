import React from "react";
import { CardProps } from "./CardProps";


export const TopicCard: React.FC<CardProps> = ({ card }) => {
  return (
    <div className="topic-card">
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
