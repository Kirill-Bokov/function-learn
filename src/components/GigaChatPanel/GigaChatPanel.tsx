import { useEffect, useState, useContext } from "react";
import styles from "./GigaChatPanel.module.css";
import { LanguageContext } from "@/LanguageContext";
import { Language } from "@/shared/types";
import { translations } from "./consts";
export const GigaChatPanel = ({ prompt }: { prompt: string }) => {
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [onDebounse, setOnDebounse] = useState(true);
  const { language } = useContext(LanguageContext);
  const t = translations[language] || translations["ru"];
  
  useEffect(() => {
    if (!prompt.trim()) return;

    const getPromptLanguage = (language: Language) => {
      if (language === "ru")
        return "Дай рекомендации, что можно почитать по этой теме в контексте фронтенд-разработки, ответ максимум 150 слов: ";
      if (language === "en")
        return "Give recommendations on what can be read on this topic in the context of frontend development, the answer is maximum 150 words: ";
      return "";
    };

    const localizedPrompt = getPromptLanguage(language) + prompt;
    const ask = async () => {
      setOnDebounse(false);
      setLoading(true);
      try {
        const res = await fetch("http://localhost:3001/send", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            message: localizedPrompt,
          }),
        });

        const data = await res.json();
        setResponse(data.choices?.[0]?.message?.content || "Пустой ответ");
      } catch (e: any) {
        setResponse("Ошибка: " + (e.message || "неизвестная"));
      } finally {
        setLoading(false);
      }
    };

    ask();
  }, [prompt]);

  return (
    <div className={styles.gigaChatPanel}>
      <strong>{t.title}</strong>
      {onDebounse && <p>{t.waiting}</p>}
      {loading ? <p>{t.thinking}</p> : <p>{response}</p>}
    </div>
  );
};
