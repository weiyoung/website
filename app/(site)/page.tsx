import Link from "next/link"
import Title from "./components/title"
import ExperiencesList from "./components/experiences-list"
import ProjectsGrid from "./components/projects-grid"
import BlogPosts from "./components/blog-posts"
import AboutMe from "./components/about-me"

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
            experiences
          </Link>
        </h2>
        <ExperiencesList />
      </section>

      {/* Projects */}
      <section className="my-24">
        <h2>
          <Link href={`/projects`} className="hover-links">
            projects
          </Link>
        </h2>
        <ProjectsGrid limit={3} />
        <p>
          <Link href={`/projects`} className="hover-links">
            more on my projects page
          </Link>
        </p>
      </section>

      {/* Blog */}
      <section className="my-24">
        <h2>
          <Link href={`/blog`} className="hover-links">
            blog
          </Link>
        </h2>
        <BlogPosts limit={3} />
        <p>
          <Link href={`/blog`} className="hover-links">
            more on my blog page
          </Link>
        </p>
      </section>

      {/* About */}
      <section className="my-24">
        <h2>
          <Link href={`/about`} className="hover-links">
            about me
          </Link>
        </h2>
        <AboutMe />
      </section>
    </>
  )
}
