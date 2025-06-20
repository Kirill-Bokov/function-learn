export type LocalizedString = {
  ru: string
  en: string
}

export type ContentBlock = {
  type: "text" | "image" | "code"
  value: LocalizedString | string
}

export type Card = {
  id: string
  title: LocalizedString
  description: LocalizedString
  image?: string
  content: ContentBlock[]
}

export type Language = "ru" | "en";
