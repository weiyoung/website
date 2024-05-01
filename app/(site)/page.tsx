import Link from "next/link"
import ExperiencesList from "./components/experiences-list"
import ProjectsGrid from "./components/projects-grid"
import Title from "./components/title"

export default async function Home() {
  return (
    <>
      {/* Intro */}
      <section className="my-24">
        <h1>
          Hello, I&apos;m{" "}
          <span className="bg-gradient-to-r from-teal-400 via-sky-800 to-blue-900 bg-clip-text text-transparent">
            weiyoung
          </span>{" "}
          👋
        </h1>
        <Title />
        <div className="my-20">
          <p>
            BSc in Computer Science at The University of British Columbia in
            Vancouver, Canada 🇨🇦 <br />
            <br />
            Previous SDE intern at Amazon, BlackBerry, Galvanize(now Diligent)
            and more! <br />
            <br />
            I&apos;m a passionate, all-rounded software developer 💻 with
            experience in Frontend, Backend, and Mobile development!
          </p>
        </div>
      </section>

      {/* Experiences */}
      <section className="my-24">
        <h2>
          <Link href={`/experiences`} className="hover-links">
            Experiences
          </Link>
        </h2>
        <ExperiencesList limit={3} />
      </section>

      {/* Projects */}
      <section className="my-24">
        <h2>
          <Link href={`/projects`} className="hover-links">
            Projects
          </Link>
        </h2>
        <ProjectsGrid limit={3} />
        <p>
          More on my{" "}
          <Link href={`/projects`} className="hover-links">
            Projects
          </Link>{" "}
          page!
        </p>
      </section>

      {/* Blog */}

      {/* About */}
    </>
  )
}
