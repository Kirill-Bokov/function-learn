import { useContext, useState, useRef, useEffect } from "react"
import {LanguageContext} from "@/LanguageContext"
import styles from "./Header.module.css"

const options: { value: "ru" | "en"; label: string; icon: string }[] = [
  { value: "ru", label: "Русский", icon: "https://flagcdn.com/w40/ru.png" },
  { value: "en", label: "English", icon: "https://flagcdn.com/w40/gb.png" }
]


export const Header = () => {
  const { language, setLanguage } = useContext(LanguageContext)
  const [open, setOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const selected = options.find(opt => opt.value === language)

  const handleSelect = (value: "ru" | "en") => {
    setLanguage(value)
    setOpen(false)
  }

  useEffect(() => {
    const handleClickOutside = (mouseEvent: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(mouseEvent.target as Node)) {
        setOpen(false)
      } 
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <header className={styles.header}>
      <div className={styles.header__logo}>function learn() {"{}"}</div>
      <div className={styles.header__dropdown} ref={dropdownRef}>
        <button className={styles.dropdown__button} onClick={() => setOpen(prev => !prev)}>
          {selected && <img src={selected?.icon} alt={selected?.label} className={styles.dropdown__icon} />}
        </button>
        {open && (
          <ul className={styles.dropdown__list}>
            {options.map(languageOption => (
              <li key={languageOption.value} onClick={() => handleSelect(languageOption.value)} className={styles.dropdown__item}>
                <img src={languageOption.icon} alt={languageOption.label} className={styles.dropdown__icon} />
                <span>{languageOption.label}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </header>
  )
}
