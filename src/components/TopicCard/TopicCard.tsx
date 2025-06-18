import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CardProps } from "./CardProps";
import styles from "./TopicCard.module.css";
import { LanguageContext } from "@/LanguageContext";



export const TopicCard: React.FC<CardProps> = ({ card }) => {
  const { language } = useContext(LanguageContext);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/topic/${card.id}`);
  };

  return (
    <div className={styles.cardStyle} onClick={handleClick}>
      <h3>{card.title[language]}</h3>
      <p>{card.description[language]}</p>
      {card.image && <img src={card.image} />}
    </div>
  );
};
