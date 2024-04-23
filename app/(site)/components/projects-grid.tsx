import Link from "next/link"
import Image from "next/image"
import { getProjects } from "@/sanity/sanity-utils"

type ProjectsGridProps = {
  limit?: number
}

export default async function ProjectsGrid({ limit }: ProjectsGridProps) {
  const projects = await getProjects()

  // If limit is specified, slice the projects array to the limit
  const displayedProjects = limit ? projects.slice(0, limit) : projects

  return (
    <div className="items-grid">
      {displayedProjects.map((project) => (
        <Link
          href={`/projects/${project.slug}`}
          key={project._id}
          className="items-card items-card-hover"
        >
          {project.image && (
            <Image
              src={project.image}
              alt={project.name}
              width={750}
              height={300}
              className="object-cover rounded-lg my-2"
            />
          )}
          <div className="font-bold">{project.name}</div>
        </Link>
      ))}
    </div>
  )
}
