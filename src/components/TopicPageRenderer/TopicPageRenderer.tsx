import { Card, ContentBlock } from "@/shared/types";

const renderBlock = (block: ContentBlock, index: number) => {
  switch (block.type) {
    case "text":
      return <p key={index}>{block.value}</p>;
    case "code":
      return (
        <pre key={index}>
          <code>{block.value}</code>
        </pre>
      );
    case "image":
      return <img key={index} src={block.value} alt="Изображение" />;
    default:
      return null;
  }
};

export const TopicPageRenderer = ({ card }: { card: Card }) => {
  return <div>{card.content.map(renderBlock)}</div>;
};
