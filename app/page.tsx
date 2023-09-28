import { getProjects } from "@/sanity/sanity-utils"
import Image from "next/image"

export default async function Home() {
  const projects = await getProjects()

  return (
    <div className="max-w-5xl mx-auto py-20">
      <h1 className="text-6xl font-extrabold">
        Hello, I'm{" "}
        <span className="bg-gradient-to-r from-teal-700 via-sky-800 to-blue-950 bg-clip-text text-transparent">
          weiyoung
        </span>{" "}
        👋
      </h1>

      <p className="text-xl my-6 text-gray-400">Check out my projects!</p>

      <h2 className="font-bold mt-12 text-gray-600">Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <div
            key={project._id}
            className="my-2 border border-gray-800 rounded-lg"
          >
            {project.image && (
              <Image
                src={project.image}
                alt={project.name}
                width={250}
                height={100}
                className="object-cover"
              />
            )}
            <div className="p-3 font-extrabold bg-gradient-to-r from-teal-700 via-sky-800 to-blue-950 bg-clip-text text-transparent">
              {project.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
