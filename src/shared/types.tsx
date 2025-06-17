export type ContentBlock = {
  type: "text" | "image" | "code"
  value: string
}

export type Card = {
  id: string
  title: string
  description: string
  image?: string
  content: ContentBlock[]
}
