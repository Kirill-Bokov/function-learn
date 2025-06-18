import { Card, ContentBlock } from "@/shared/types";
import { Language } from "@/shared/types";


const renderBlock = (block: ContentBlock, index: number, language: Language) => {
  switch (block.type) {
    case "text":
      return <p key={index}>{(block.value as { ru: string; en: string })[language]}</p>;
    case "code":
      return (
        <pre key={index}>
          <code>{(block.value as { ru: string; en: string })[language]}</code>
        </pre>
      );
    case "image":
      return <img key={index} src={block.value as string} alt="Изображение" />;
    default:
      return null;
  }
};

export const TopicPageRenderer = ({ card, language }: { card: Card; language: Language }) => {
  return <div>{card.content.map((block, index) => renderBlock(block, index, language))}</div>;
};
