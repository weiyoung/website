import fs from "fs"
import { ProjectMetadata } from "@/types/ProjectMetadata"
import matter from "gray-matter"

const PROJECTS_FOLDER = "content/projects"

export function getProjectsMetadata(): ProjectMetadata[] {
  const files = fs
    .readdirSync(PROJECTS_FOLDER)
    .filter((file) => file.endsWith(".md"))
    .sort()
    .reverse()

  const projectsMetadata = files.map((file) => {
    const content = fs.readFileSync(`${PROJECTS_FOLDER}/${file}`, "utf-8")
    const matterResult = matter(content)
    return {
      slug: file.replace(".md", ""),
      title: matterResult.data.title,
      subtitle: matterResult.data.subtitle,
      url: matterResult.data.url,
      start_date: matterResult.data.start_date,
      end_date: matterResult.data.end_date,
      tags: matterResult.data.tags,
    }
  })
  return projectsMetadata
}

export function getProject(slug: string) {
  const file = `${PROJECTS_FOLDER}/${slug}.md`
  const content = fs.readFileSync(file, "utf-8")
  return matter(content)
}
