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

      <div className="my-12">
        <p>
          BSc in Computer Science at The University of British Columbia in
          Vancouver, Canada 🇨🇦 <br />
          <br />
          Previous SDE intern at Amazon, BlackBerry, Galvanize(now Diligent) and
          more! <br />
          <br />
          I'm a passionate, all-rounded software developer 💻 with experience in
          Frontend, Backend, and Mobile development!
        </p>
      </div>

      <h2 className="mb-6">Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <Link
            href={`/projects/${project.slug}`}
            key={project._id}
            className="custom-card"
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
