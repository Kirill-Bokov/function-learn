import { Card } from "shared/types";

export const DB_NAME = "CardDatabase";
export const STORE_NAME = "cards";
export const DB_VERSION = 9;
export const initialCards: Card[] = [
  {
    id: "1",
    title: {
      ru: "Объявление переменных через var 🤯",
      en: "Declaring Variables with var 🤯",
    },
    description: {
      ru: "Этот способ объявления переменных в JS запрещён во многих странах! ⚠️ Узнай, как использовать его в своём проекте",
      en: "This way of declaring variables in JS is banned in many countries! ⚠️ Learn how to use it in your project",
    },
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    content: [
      {
        type: "text",
        value: {
          ru: "В JavaScript переменные можно объявлять с помощью var, let и const.",
          en: "In JavaScript, you can declare variables using var, let, and const.",
        },
      },
      {
        type: "code",
        value: {
          ru: "var x = 10;",
          en: "var x = 10;",
        },
      },
      {
        type: "text",
        value: {
          ru: "Однако var имеет особенности, связанные с hoisting.",
          en: "However, var has quirks related to hoisting.",
        },
      },
    ],
  },
  {
    id: "2",
    title: {
      ru: "Глобальные переменные — твой худший кошмар 😨",
      en: "Global Variables — Your Worst Nightmare 😨",
    },
    description: {
      ru: "Ты до сих пор пишешь код без замыканий? 😬 Тогда мы идём к тебе!",
      en: "Still writing code without closures? 😬 We're coming for you!",
    },
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/c5/Syntactic_sugar_example_in_golang.png",
    content: [
      {
        type: "text",
        value: {
          ru: "Глобальные переменные могут создавать множество проблем.",
          en: "Global variables can cause a lot of problems.",
        },
      },
      {
        type: "code",
        value: {
          ru: "window.myGlobal = 'опасность';",
          en: "window.myGlobal = 'danger';",
        },
      },
      {
        type: "text",
        value: {
          ru: "Избегайте их, если хотите сохранить психическое здоровье.",
          en: "Avoid them if you want to keep your sanity.",
        },
      },
    ],
  },
  {
    id: "3",
    title: {
      ru: "Почему const — не совсем константа 😵‍💫",
      en: "Why const Is Not Really Constant 😵‍💫",
    },
    description: {
      ru: "Ты думал, что const — это навсегда? 😱 Ошибаешься!",
      en: "You thought const means forever? 😱 Think again!",
    },
    image:
      "https://upload.wikimedia.org/wikipedia/commons/e/ef/Programming_code.jpg",
    content: [
      {
        type: "text",
        value: {
          ru: "const не делает объект неизменяемым.",
          en: "const doesn't make an object immutable.",
        },
      },
      {
        type: "code",
        value: {
          ru: "const obj = { name: 'JS' }; obj.name = 'TypeScript';",
          en: "const obj = { name: 'JS' }; obj.name = 'TypeScript';",
        },
      },
      {
        type: "text",
        value: {
          ru: "Это означает, что структура может изменяться!",
          en: "This means the structure can change!",
        },
      },
    ],
  },
  {
    id: "4",
    title: {
      ru: "Картинка, которая всё объясняет 🖼️😲",
      en: "An Image That Explains Everything 🖼️😲",
    },
    description: {
      ru: "Просто посмотри на это изображение, и ты всё поймёшь! 😳",
      en: "Just look at this picture and everything will become clear! 😳",
    },
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/4b/Skeleton_programming_code.jpg",
    content: [
      {
        type: "text",
        value: {
          ru: "Иногда одна картинка лучше тысячи строк кода.",
          en: "Sometimes a picture is worth a thousand lines of code.",
        },
      },
      {
        type: "image",
        value:
          "https://upload.wikimedia.org/wikipedia/commons/4/4b/Skeleton_programming_code.jpg",
      },
      {
        type: "text",
        value: {
          ru: "Используй такие визуализации в обучении и документации.",
          en: "Use such visualizations in teaching and documentation.",
        },
      },
    ],
  },
  {
    id: "5",
    title: {
      ru: "Однострочные функции, которые пугают даже сеньоров 😵‍💥",
      en: "One-Liners That Scare Even Seniors 😵‍💥",
    },
    description: {
      ru: "Этот однострочник ломает мозг! 🧠💥 Не смотри, если ты не готов!",
      en: "This one-liner melts brains! 🧠💥 Don’t look if you’re not ready!",
    },
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/3b/Function_machine2.svg",
    content: [
      {
        type: "text",
        value: {
          ru: "Иногда компактность приводит к нечитаемости.",
          en: "Sometimes compactness leads to unreadability.",
        },
      },
      {
        type: "code",
        value: {
          ru: "[1,2,3].map(n => n*n).reduce((a, b) => a + b);",
          en: "[1,2,3].map(n => n*n).reduce((a, b) => a + b);",
        },
      },
      {
        type: "text",
        value: {
          ru: "Пиши понятно, даже если умеешь писать в одну строку.",
          en: "Write clearly, even if you can write in one line.",
        },
      },
    ],
  },
];
