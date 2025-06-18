import { useParams, Link } from "react-router-dom";
import useIndexedDB from "hooks/useIndexedDB/useIndexedDB";
import styles from "./TopicPage.module.css";
import { Header } from "@components/Header";
import { TopicPageRenderer } from "@components/TopicPageRenderer";

export const TopicPage = () => {
  const { id } = useParams<{ id: string }>();
  const { cards, isLoading } = useIndexedDB();

  if (isLoading) return <div>Загрузка...</div>;

  const card = cards.find((c) => c.id === id);

  if (!card) return <div>Тема не найдена</div>;

  return (
    <div className={styles.topicPage}>
      <Header />
      <div className={styles.topicPageDescription}>
        <Link to="/">
          <img
            className={styles.homeButton}
            src="https://cdn-icons-png.flaticon.com/512/1946/1946436.png"
          />
        </Link>
        <h3>{card.title}</h3>
        <p>{card.description}</p>
        {card.image && <img src={card.image} />}
      </div>
      <div className={styles.topicPageContent}>
        <TopicPageRenderer card={card} />
      </div>
    </div>
  );
};
