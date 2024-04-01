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
        <a
          href={project.url}
          title="Project Link"
          target="_blank"
          rel="noopener noreferrer"
          className="custom-button"
        >
          Project Link
        </a>
      </header>

      <div className="my-10">
        <PortableText value={project.content} />
      </div>

      {project.tags && (
        <>
          <div className="flex justify-left gap-4">
            {project.tags.map((tag) => (
              <div className="items-card" key={tag}>
                {tag}
              </div>
            ))}
          </div>
          <ul></ul>
        </>
      )}

      {project.image && (
        <Image
          src={project.image}
          alt={project.name}
          width={1920}
          height={1080}
          className="mt-10 rounded-lg shadow-lg object-cover"
        />
      )}
    </div>
  )
}
