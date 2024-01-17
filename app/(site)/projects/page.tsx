import { getProjects } from "@/sanity/sanity-utils"
import Image from "next/image"
import Link from "next/link"

export default async function Project() {
  const projects = await getProjects()

  return (
    <>
      <h2 className="mb-6">Projects</h2>

      <div className="items-grid">
        {projects.map((project) => (
          <Link
            href={`/projects/${project.slug}`}
            key={project._id}
            className="items-card"
          >
            {project.image && (
              <Image
                src={project.image}
                alt={project.name}
                width={750}
                height={300}
                className="object-cover rounded-lg"
              />
            )}
            <div className="pt-2 px-2 font-extrabold custom-gradient">
              {project.name}
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}
