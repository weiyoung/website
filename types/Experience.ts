import { PortableTextBlock } from "sanity"

export type Experience = {
  _id: string
  _createdAt: Date
  company: string
  position: string
  start_date: Date
  end_date: Date
  location: string
  content: PortableTextBlock[]
  tags: string[]
}
