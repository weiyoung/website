import { createClient, groq } from "next-sanity"
import schemas from "./schemas/index"

export async function getProjects(): Promise<Project[]> {
  const client = createClient({
    projectId: "h8ww2091",
    dataset: "production",
    apiVersion: "2023-08-02",
  })

  return client.fetch(
    groq`*[_type == "project"]{
        _id,
        _createdAt,
        name,
        "slug": slug.current,
        "image": image.asset->url,
        url,
        content,
    }`
  )
}

export async function getProject(slug: string): Promise<Project> {
  const client = createClient({
    projectId: "h8ww2091",
    dataset: "production",
    apiVersion: "2023-08-02",
  })

  return client.fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
        _id,
        _createdAt,
        name,
        "slug": slug.current,
        "image": image.asset->url,
        url,
        content,
    }`,
    { slug }
  )
}
