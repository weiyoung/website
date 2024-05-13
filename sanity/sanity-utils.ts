import { createClient, groq } from "next-sanity"
import { Project } from "@/types/Project"
import clientConfig from "./config/client-config"
import { Blog } from "@/types/Blog"
import { Experience } from "@/types/Experience"

export async function getExperiences(): Promise<Experience[]> {
  // items are sorted by start_date, in descending order
  return createClient(clientConfig).fetch(
    groq`*[_type == "experience"] | order(start_date desc) {
      _id,
      _createdAt,
      company,
      position,
      start_date,
      end_date,
      location,
      content,
      tags,
    }`
  )
}

export async function getProjects(): Promise<Project[]> {
  // items are sorted by _createdAt, in descending order
  return createClient(clientConfig).fetch(
    groq`*[_type == "project"] | order(_createdAt desc) {
        _id,
        _createdAt,
        name,
        "slug": slug.current,
        "image": image.asset->url,
        tags,
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
        tags,
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
      "slug": slug.current,
      date,
      tags,
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
      date,
      content,
      tags,
    }`,
    { slug }
  )
}
