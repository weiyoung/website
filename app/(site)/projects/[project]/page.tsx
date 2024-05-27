import { getProject } from "@/sanity/sanity-utils"
import { PortableText } from "@portabletext/react"
import Image from "next/image"

type Props = {
  params: { project: string }
}

export default async function Project({ params }: Props) {
  const slug = params.project
  const project = await getProject(slug)

  return (
    <div>
      <header className="flex items-center justify-between">
        <h2>{project.name}</h2>
        <a href={project.url} target="_blank" className="custom-button">
          Project URL
        </a>
      </header>

      <div className="my-10">
        <PortableText value={project.content} />
      </div>

      {project.tags && (
        <div className="tags-flexbox">
          {project.tags.map((tag) => (
            <div className="tags" key={tag}>
              {tag}
            </div>
          ))}
        </div>
      )}

      {project.image && (
        <Image
          src={project.image}
          alt={project.name}
          width={1920}
          height={1080}
          className="mt-12 rounded-lg object-cover"
        />
      )}
    </div>
  )
}
