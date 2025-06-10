import { createContext } from "react"

const LanguageContext = createContext({
  lang: "ru",
  setLang: () => {}
})

export default LanguageContext
