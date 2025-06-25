import { useState } from "react"

export const ErrorTrigger = () => {
  const [error, setError] = useState<Error | null>(null)

  const triggerError = async (code: number) => {
    const res = await fetch(`/error${code}`)

    if (!res.ok) {
      const err: any = new Error("Ошибка при запросе")
      err.status = res.status
      setError(err)
      return
    }

    const data = await res.json()
    console.log("Успешный ответ:", data)
  }
  if (error) throw error

  return (
    <div>
      <h3>Тест ошибок</h3>
      <div style={{ display: "flex", gap: "1rem" }}>
        <button onClick={() => triggerError(400)}>400</button>
        <button onClick={() => triggerError(403)}>403</button>
        <button onClick={() => triggerError(404)}>404</button>
        <button onClick={() => triggerError(418)}>418</button>
        <button onClick={() => triggerError(500)}>500</button>
        <button onClick={() => triggerError(504)}>504</button>
      </div>
    </div>
  )
}
