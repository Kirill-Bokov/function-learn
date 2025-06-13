import { useEffect, useState } from "react"
import { DB_NAME, STORE_NAME, DB_VERSION } from "./constants"

interface Card {
  id: string
  title: string
  description: string
  [key: string]: unknown
}

const initialCards: Card[] = [
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

const useIndexedDB = () => {
  const [cards, setCards] = useState<Card[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const openRequest = indexedDB.open(DB_NAME, DB_VERSION)

    openRequest.onupgradeneeded = () => {
      const db = openRequest.result
      if (db.objectStoreNames.contains(STORE_NAME)) {
        db.deleteObjectStore(STORE_NAME)
      }
      const store = db.createObjectStore(STORE_NAME, { keyPath: "id" })
      store.transaction.oncomplete = () => {
        const tx = db.transaction(STORE_NAME, "readwrite")
        const objStore = tx.objectStore(STORE_NAME)

        initialCards.forEach(card => objStore.add(card))

        tx.oncomplete = () => {
        }
        tx.onerror = event => {
          console.error("Ошибка записи начальных данных:", (event.target as IDBRequest).error)
        }
      }
    }

    openRequest.onsuccess = () => {
      const db = openRequest.result
      const loadCards = () =>
        new Promise<Card[]>((resolve, reject) => {
          const tx = db.transaction(STORE_NAME, "readonly")
          const store = tx.objectStore(STORE_NAME)
          const getAllRequest = store.getAll()

          getAllRequest.onsuccess = () => resolve(getAllRequest.result)
          getAllRequest.onerror = () => reject(getAllRequest.error)
        })

      loadCards()
        .then(cardsFromDB => {
          setCards(cardsFromDB)
          setIsLoading(false)
        })
        .catch(error => {
          console.error("Ошибка чтения из IndexedDB:", error)
          setIsLoading(false)
        })
    }

    openRequest.onerror = () => {
      console.error("Ошибка открытия базы данных")
      setIsLoading(false)
    }
  }, [])

  return { cards, isLoading }
}

export default useIndexedDB
