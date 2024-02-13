import { createClient, groq } from "next-sanity"
import { Project } from "@/types/Project"
import clientConfig from "./config/client-config"
import { Blog } from "@/types/Blog"

export async function getProjects(): Promise<Project[]> {
  // items are sorted by _createdAt, in descending order
  return createClient(clientConfig).fetch(
    groq`*[_type == "project"] | order(_createdAt desc) {
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
  return createClient(clientConfig).fetch(
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

export async function getBlogs(): Promise<Blog[]> {
  // items are sorted by _createdAt, in descending order
  return createClient(clientConfig).fetch(
    groq`*[_type == "blog"] | order(_createdAt desc) {
      _id,
      _createdAt,
      title,
      "slug": slug.current
    }`
  )
}

export async function getBlog(slug: string): Promise<Blog> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "blog" && slug.current == $slug][0]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      content
    }`,
    { slug }
  )
}
