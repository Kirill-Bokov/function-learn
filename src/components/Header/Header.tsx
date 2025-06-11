import { useContext, useState, useRef, useEffect } from "react"
import LanguageContext from "LanguageContext"

const options: { value: "ru" | "en"; label: string; icon: string }[] = [
  { value: "ru", label: "Русский", icon: "https://flagcdn.com/w40/ru.png" },
  { value: "en", label: "English", icon: "https://flagcdn.com/w40/gb.png" }
]


export const Header = () => {
  const { lang, setLang } = useContext(LanguageContext)
  const [open, setOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const selected = options.find(opt => opt.value === lang)

  const handleSelect = (value: "ru" | "en") => {
    setLang(value)
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
    <header className="header">
      <div className="header__logo">function learn() {"{}"}</div>
      <div className="header__dropdown" ref={dropdownRef}>
        <button className="dropdown__button" onClick={() => setOpen(prev => !prev)}>
          {selected && <img src={selected?.icon} alt={selected?.label} className="dropdown__icon" />}
        </button>
        {open && (
          <ul className="dropdown__list">
            {options.map(languageOption => (
              <li key={languageOption.value} onClick={() => handleSelect(languageOption.value)} className="dropdown__item">
                <img src={languageOption.icon} alt={languageOption.label} className="dropdown__icon" />
                <span>{languageOption.label}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </header>
  )
}
