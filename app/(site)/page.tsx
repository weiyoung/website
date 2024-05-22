import Link from "next/link"
import Title from "./components/title"
import ExperiencesList from "./components/experiences-list"
import ProjectsGrid from "./components/projects-grid"
import BlogPosts from "./components/blog-posts"

export default function Home() {
  return (
    <>
      {/* Intro */}
      <section className="my-24">
        <div className="mt-36 mb-48">
          <h1>
            hello, i&apos;m{" "}
            <span className="bg-gradient-to-r from-teal-400 via-sky-800 to-blue-800 bg-clip-text text-transparent">
              weiyoung
            </span>{" "}
            👋
          </h1>
          <Title />
        </div>
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
        <ExperiencesList limit={5} />
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
          <Link href={`/projects`} className="hover-links">
            More on my Projects page!
          </Link>
        </p>
      </section>

      {/* Blog */}
      <section className="my-24">
        <h2>
          <Link href={`/blog`} className="hover-links">
            Blog
          </Link>
        </h2>
        <BlogPosts limit={3} />
        <p>
          <Link href={`/blog`} className="hover-links">
            More on my Blog page!
          </Link>
        </p>
      </section>

      {/* About */}
    </>
  )
}
