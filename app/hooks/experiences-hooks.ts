import fs from "fs"
import { Experience } from "@/types/Experience"
import matter from "gray-matter"

const EXPERIENCES_FOLDER = "./content/experiences"

export function getExperiences(): Experience[] {
  const files = fs
    .readdirSync(EXPERIENCES_FOLDER)
    .filter((file) => file.endsWith(".md"))
  const experiences = files.map((file) => {
    const content = fs.readFileSync(`${EXPERIENCES_FOLDER}/${file}`, "utf-8")
    const matterResult = matter(content)
    return {
      slug: file.replace(".md", ""),
      company: matterResult.data.company,
      position: matterResult.data.position,
      start_date: matterResult.data.start_date,
      end_date: matterResult.data.end_date,
      location: matterResult.data.location,
      tags: matterResult.data.tags,
      content: matterResult.content,
    }
  })
  return experiences
}
