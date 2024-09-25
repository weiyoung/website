import { FaGithub } from "react-icons/fa"
import moment from "moment"
import Image from "next/image"

type Props = {
  params: { project: string }
}

export default function Project({ params }: Props) {
  return (
    <div className="content-panel">
      {/* <h2 className="mb-4">
        {project.name} – {project.subtitle}
      </h2>

      <div className="mb-4 date">
        {moment(project.start_date).format("MMM YYYY")}
        {" - "}
        {moment(project.end_date).format("MMM YYYY")}
      </div>

      <div className="flex justify-start">
        <a
          href={project.url}
          target="_blank"
          className="flex items-center custom-button"
        >
          <FaGithub />
          <p className="ml-2">link to repo</p>
        </a>
      </div>

      <div className="my-10">
        <PortableText value={project.content} />
      </div>

      {project.tags && (
        <div className="tags-flexbox">
          {project.tags.map((tag) => (
            <div className="tags" key={tag}>
              {tag}
            </div>
          ))}
        </div>
      )}

      {project.image && (
        <Image
          src={project.image}
          alt={project.name}
          width={1920}
          height={1080}
          className="mt-12 rounded-lg object-cover"
        />
      )} */}
    </div>
  )
}
