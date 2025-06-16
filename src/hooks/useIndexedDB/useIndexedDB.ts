import { useEffect, useState } from "react"
import { DB_NAME, STORE_NAME, DB_VERSION } from "./constants"
import { Card } from "shared/types"
import { initialCards } from "./constants"

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
          console.log("Начальные данные записаны")
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
        })
        .catch(error => {
          console.error("Ошибка чтения из IndexedDB:", error)
        })
        .finally(() => {
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
