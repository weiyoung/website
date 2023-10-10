import { getProjects } from "@/sanity/sanity-utils"
import Image from "next/image"
import Link from "next/link"

export default async function Home() {
  const projects = await getProjects()

  return (
    <div className="max-w-5xl mx-auto py-20">
      <h1 className="text-6xl font-extrabold">
        Hello, I&apos;m{" "}
        <span className="bg-gradient-to-r from-teal-400 via-sky-800 to-blue-700 bg-clip-text text-transparent">
          weiyoung
        </span>{" "}
        👋
      </h1>

      <p className="text-l my-6 text-gray-400">Check out my projects!</p>

      <h2 className="text-3xl font-bold mt-12 text-gray-400">Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <Link
            href={`/projects/${project.slug.current}`}
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
            <div className="pt-2 px-2 font-extrabold bg-gradient-to-r from-teal-400 via-sky-800 to-blue-700 bg-clip-text text-transparent">
              {project.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
