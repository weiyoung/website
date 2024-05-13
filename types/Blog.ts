import { PortableTextBlock } from "sanity"

export type Blog = {
  _id: string
  _createdAt: string
  title: string
  slug: string
  date: string
  content: PortableTextBlock[]
  tags: string[]
}
