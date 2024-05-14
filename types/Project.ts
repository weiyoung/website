import { PortableTextBlock } from "sanity"

export type Project = {
  _id: string
  _createdAt: Date
  name: string
  slug: string
  subtitle: string
  image: string
  url: string
  start_date: Date
  end_date: Date
  content: PortableTextBlock[]
  tags: string[]
}
