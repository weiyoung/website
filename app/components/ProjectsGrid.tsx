import { getProjectsMetadata } from "../hooks/projects-hooks"
import Link from "next/link"

type Props = {
  limit?: number
}

export default function ProjectsGrid({ limit }: Props) {
  const projects = getProjectsMetadata()
  const displayedProjects = limit ? projects.slice(0, limit) : projects

  return (
    <>
      <h2 className="mx-4">Projects</h2>
      <div className="items-grid mb-4">
        {displayedProjects.map((project) => (
          <Link
            href={`/projects/${project.slug}`}
            key={project.slug}
            className="items-card items-card-hover"
          >
            <h3>{project.title}</h3>
            <p>{project.subtitle}</p>
          </Link>
        ))}
      </div>
    </>
  )
}
