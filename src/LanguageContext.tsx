import { createContext } from "react"

export type Language = "ru" | "en"

export interface LanguageContextType {
  lang: Language
  setLang: (lang: Language) => void
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  setLang: () => {}
})

export default LanguageContext
