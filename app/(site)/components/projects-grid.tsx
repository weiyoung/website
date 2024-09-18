import Link from "next/link"
import Image from "next/image"

type ProjectsGridProps = {
  limit?: number
}

export default async function ProjectsGrid({ limit }: ProjectsGridProps) {
  // If limit is specified, slice the projects array to only show {limit} number of projects
  // const displayedProjects = limit ? projects.slice(0, limit) : projects

  return (
    <>
      <h2 className="mx-4">Projects</h2>
      <div className="items-grid mb-4">
        {/* {displayedProjects.map((project) => (
          <Link
            href={`/projects/${project.slug}`}
            key={project._id}
            className="items-card items-card-hover"
          >
            <h3>{project.name}</h3>
            <p>{project.subtitle}</p>
            {project.image && (
              <Image
                src={project.image}
                alt={project.name}
                width={750}
                height={300}
                priority
                className="object-cover rounded-lg my-2"
              />
            )}
          </Link>
        ))} */}
      </div>
    </>
  )
}
