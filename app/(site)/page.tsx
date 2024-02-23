import Link from "next/link"
import ProjectsGrid from "./components/projects-grid"

export default async function Home() {
  return (
    <>
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
          I&apos;m a passionate, all-rounded software developer 💻 with
          experience in Frontend, Backend, and Mobile development!
        </p>
      </div>

      <h2 className="mb-6">
        <Link href={`/projects`} className="navbar-links">
          Projects
        </Link>{" "}
      </h2>

      <ProjectsGrid limit={3} />

      <p>
        More on my{" "}
        <Link href={`/projects`} className="navbar-links">
          Projects
        </Link>{" "}
        page!
      </p>
    </>
  )
}
