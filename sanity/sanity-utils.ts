import { createClient, groq } from "next-sanity"
import clientConfig from "./config/client-config"
import { Experience } from "@/types/Experience"
import { Project } from "@/types/Project"
import { Blog } from "@/types/Blog"

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
  // items are sorted by end_date, in descending order
  return createClient(clientConfig).fetch(
    groq`*[_type == "project"] | order(end_date desc) {
        _id,
        _createdAt,
        name,
        "slug": slug.current,
        subtitle,
        "image": image.asset->url,
        end_date,
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
        subtitle,
        "image": image.asset->url,
        url,
        start_date,
        end_date,
        content,
        tags,
    }`,
    { slug }
  )
}

export async function getBlogs(): Promise<Blog[]> {
  // items are sorted by date, in descending order
  return createClient(clientConfig).fetch(
    groq`*[_type == "blog"] | order(date desc) {
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
