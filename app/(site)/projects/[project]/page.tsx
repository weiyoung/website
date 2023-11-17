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
          title="View Project"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-500 rounded-lg text-gr-500 font-bold py-3 px-4 hover:bg-sky-200 hover:text-gray-800 transition"
        >
          View Project
        </a>
      </header>

      {/* content */}

      <div className="text-lg text-gray-200 mt-5">
        <PortableText value={project.content} />
      </div>

      {/* image */}
      <Image
        src={project.image}
        alt={project.name}
        width={1920}
        height={1080}
        className="mt-10 rounded-lg shadow-lg object-cover"
      />
    </div>
  )
}
