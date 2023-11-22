import { getProjects } from "@/sanity/sanity-utils"
import Image from "next/image"
import Link from "next/link"

export default async function Home() {
  const projects = await getProjects()

  return (
    <div>
      <h1>
        Hello, I&apos;m <span className="custom-gradient">weiyoung</span> 👋
      </h1>

      <p className="my-10">Check out my projects!</p>

      <h2>Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <Link
            href={`/projects/${project.slug}`}
            key={project._id}
            className="my-4 p-2 border-2 border-gray-800 rounded-lg hover:border-blue-900 hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out"
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
    </div>
  )
}
