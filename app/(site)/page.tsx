import Link from "next/link"
import Title from "./components/title"
import ExperiencesList from "./components/experiences-list"
import ProjectsGrid from "./components/projects-grid"
import BlogPosts from "./components/blog-posts"
import AboutMe from "./components/about-me"

export default function Home() {
  return (
    <>
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
            I&apos;m a passionate, all-rounded software developer 💻 currently
            based in Vancouver, Canada 🇨🇦 <br />
            <br />
            Previous SDE intern at Amazon, BlackBerry, Diligent(Galvanize), BGC
            Engineering, and more! <br />
            <br />
            I&apos;m an avid learner with a growht mindset, always looking to
            learn new things and grow in all walks of life. <br />
            <br />
            Outside of programming, I enjoy music, gym, outdoors, food, and
            philosophy. <br />
          </p>
        </div>
      </section>

      <section className="my-32" id="experiences">
        <ExperiencesList />
      </section>

      <section className="my-32" id="projects">
        <ProjectsGrid />
      </section>

      <section className="my-32" id="blog">
        <BlogPosts />
      </section>

      <section className="my-32" id="about">
        <AboutMe />
      </section>
    </>
  )
}
