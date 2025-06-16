import { Card } from "shared/types"

export const DB_NAME = "CardDatabase"
export const STORE_NAME = "cards"
export const DB_VERSION = 5
export const initialCards: Card[] = [
    {
      id: "1",
      title: "Привет, мир!",
      description: "Для того, чтобы написать Привет мир, нужен простой советский...",
    },
    {
      id: "2",
      title: "React Router",
      description: "Внуки без ума от React Router! А я всего лишь...",
    },
    {
      id: "4",
      title: "Переменные в JS",
      description: "Этот способ объявления переменных в js запрещён во многих странах! Узнай, как использовать его в своём проекте",
    },
    {
      id: "5",
      title: "Переменные в JS",
      description: "Этот приём с map() в JavaScript был засекречен с 2005 года. Теперь он доступен всем",
      image: "https://cdnjs.cloudflare.com/ajax/libs/browser-logos/75.0.1/node.js/node.js.svg"
    },
  ]
