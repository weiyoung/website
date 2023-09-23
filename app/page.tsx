import { getProjects } from "@/sanity/sanity-utils"

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
      {projects.map((project) => (
        <div
          key={project._id}
          className="my-4 border border-gray-800 rounded-lg"
        >
          <div className="m-2 font-extrabold bg-gradient-to-r from-teal-700 via-sky-800 to-blue-950 bg-clip-text text-transparent">
            {project.name}
          </div>
        </div>
      ))}
    </div>
  )
}
