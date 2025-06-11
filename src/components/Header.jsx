import { useContext, useState, useRef, useEffect } from "react"
import LanguageContext from "../LanguageContext"

const options = [
  { value: "ru", label: "Русский", icon: "https://flagcdn.com/w40/ru.png" },
  { value: "en", label: "English", icon: "https://flagcdn.com/w40/gb.png" }
]

const Header = () => {
  const { lang, setLang } = useContext(LanguageContext)
  const [open, setOpen] = useState(false)
  const dropdownRef = useRef(null)

  const selected = options.find(opt => opt.value === lang)

  const handleSelect = (value) => {
    setLang(value)
    setOpen(false)
  }

  useEffect(() => {
    const handleClickOutside = (mouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(mouseEvent.target)) {
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
          <img src={selected.icon} alt={selected.label} className="dropdown__icon" />
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

export default Header
