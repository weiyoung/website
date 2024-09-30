import { getProject, getProjectsMetadata } from "@/app/hooks/projects-hooks"
import { FaGithub } from "react-icons/fa"
import moment from "moment"
import Markdown from "markdown-to-jsx"

type Props = {
  params: { project: string }
}

export async function generateStaticParams() {
  const projects = getProjectsMetadata()
  return projects.map((project) => ({ slug: project.slug }))
}

export default function Project({ params }: Props) {
  const project = getProject(params.project)

  return (
    <div className="content-panel">
      <h2 className="mb-4">
        {project.data.title} – {project.data.subtitle}
      </h2>

      <div className="mb-4 date">
        {moment(project.data.start_date).format("MMM YYYY")}
        {" - "}
        {moment(project.data.end_date).format("MMM YYYY")}
      </div>

      <div className="flex justify-start">
        <a
          href={project.data.url}
          target="_blank"
          className="flex items-center custom-button"
        >
          <FaGithub />
          <p className="ml-2">link to repo</p>
        </a>
      </div>

      <article className="markdown-text">
        <Markdown className="my-10">{project.content}</Markdown>
      </article>

      {project.data.tags && (
        <div className="tags-flexbox">
          {project.data.tags.map((tag: string) => (
            <div className="tags" key={tag}>
              {tag}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
