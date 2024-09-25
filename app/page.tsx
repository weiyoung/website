import Title from "./components/title"
import Intro from "./components/Intro"
import ExperiencesList from "./components/ExperiencesList"
import ProjectsGrid from "./components/ProjectsGrid"
import PostPreviews from "./components/PostPreviews"
import AboutMe from "./components/AboutMe"

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
        <div className="my-20 pr-8 md:pr-24">
          <Intro />
        </div>
      </section>

      <section className="my-32" id="experiences">
        <ExperiencesList />
      </section>

      <section className="my-32" id="projects">
        <ProjectsGrid />
      </section>

      <section className="my-32" id="blog">
        <PostPreviews />
      </section>

      <section className="my-32" id="about">
        <AboutMe />
      </section>
    </>
  )
}
