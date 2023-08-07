import { createClient, groq } from "next-sanity"

export async function getProjects() {
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
