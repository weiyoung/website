import fs from "fs"
import { PostMetadata } from "@/types/PostMetadata"
import matter from "gray-matter"
const BLOGS_FOLDER = "./content/blog-posts"

export function getPostsMetadata(): PostMetadata[] {
  const files = fs
    .readdirSync(BLOGS_FOLDER)
    .filter((file) => file.endsWith(".md"))
  const postsMetadata = files.map((file) => {
    const content = fs.readFileSync(`${BLOGS_FOLDER}/${file}`, "utf-8")
    const matterResult = matter(content)
    return {
      slug: file.replace(".md", ""),
      title: matterResult.data.title,
      date: matterResult.data.date,
      tags: matterResult.data.tags,
    }
  })
  return postsMetadata
}

export function getPost(slug: string) {
  const file = `${BLOGS_FOLDER}/${slug}.md`
  const content = fs.readFileSync(file, "utf-8")
  return matter(content)
}
