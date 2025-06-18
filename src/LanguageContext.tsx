import { createContext, useState, useEffect } from "react"
import type { Language } from "@/shared/types"

export const LanguageContext = createContext<{
  language: Language
  setLanguage: (lang: Language) => void
}>({
  language: "ru",
  setLanguage: () => {}
})

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguageState] = useState<Language>("ru")

  const allowedLanguages = ["ru", "en"] as const

  useEffect(() => {
    const storedLang = localStorage.getItem("lang")
    if (storedLang && allowedLanguages.includes(storedLang as any)) {
      setLanguageState(storedLang as Language)
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem("lang", lang)
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}
