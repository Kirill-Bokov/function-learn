import { Card } from "shared/types"

export const DB_NAME = "CardDatabase"
export const STORE_NAME = "cards"
export const DB_VERSION = 8
export const initialCards: Card[] = [
  {
    id: "1",
    title: "Объявление переменных через var",
    description: "Этот способ объявления переменных в JS запрещён во многих странах! Узнай, как использовать его в своём проекте",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    content: [
      { type: "text", value: "В JavaScript переменные можно объявлять с помощью var, let и const." },
      { type: "code", value: "var x = 10;" },
      { type: "text", value: "Однако var имеет особенности, связанные с hoisting." }
    ]
  },
  {
    id: "2",
    title: "Глобальные переменные — твой худший кошмар",
    description: "Ты до сих пор пишешь код без замыканий? Тогда мы идём к тебе!",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Syntactic_sugar_example_in_golang.png",
    content: [
      { type: "text", value: "Глобальные переменные могут создавать множество проблем." },
      { type: "code", value: "window.myGlobal = 'опасность';" },
      { type: "text", value: "Избегайте их, если хотите сохранить психическое здоровье." }
    ]
  },
  {
    id: "3",
    title: "Почему const — не совсем константа",
    description: "Ты думал, что const — это навсегда? Ошибаешься!",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/ef/Programming_code.jpg",
    content: [
      { type: "text", value: "const не делает объект неизменяемым." },
      { type: "code", value: "const obj = { name: 'JS' }; obj.name = 'TypeScript';" },
      { type: "text", value: "Это означает, что структура может изменяться!" }
    ]
  },
  {
    id: "4",
    title: "Картинка, которая всё объясняет",
    description: "Просто посмотри на это изображение, и ты всё поймёшь!",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Skeleton_programming_code.jpg",
    content: [
      { type: "text", value: "Иногда одна картинка лучше тысячи строк кода." },
      { type: "image", value: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Skeleton_programming_code.jpg" },
      { type: "text", value: "Используй такие визуализации в обучении и документации." }
    ]
  },
  {
    id: "5",
    title: "Однострочные функции, которые пугают даже сеньоров",
    description: "Этот однострочник ломает мозг! Не смотри, если ты не готов!",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Function_machine2.svg",
    content: [
      { type: "text", value: "Иногда компактность приводит к нечитаемости." },
      { type: "code", value: "[1,2,3].map(n => n*n).reduce((a, b) => a + b);" },
      { type: "text", value: "Пиши понятно, даже если умеешь писать в одну строку." }
    ]
  }
  ]
