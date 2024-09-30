"use client"

import { Experience } from "../../types/Experience"
import { useCollapse } from "react-collapsed"
import { FaAngleDown, FaAngleUp } from "react-icons/fa"
import moment from "moment"
import Markdown from "markdown-to-jsx"

export default function ExperienceCard(experience: Experience) {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse()

  return (
    <div className="items-card items-card-hover my-4">
      <section className="w-full flex justify-between" {...getToggleProps()}>
        <div>
          <h3>{experience.company}</h3>
          <p>{experience.position}</p>
        </div>
        <div className="flex items-center text-xl">
          {isExpanded ? <FaAngleUp /> : <FaAngleDown />}
        </div>
      </section>

      <section {...getCollapseProps()}>
        <div className="flex justify-between">
          <div>{experience.location}</div>
          <div className="date">
            {moment(experience.start_date).format("MMM YYYY")}
            {" - "}
            {moment(experience.end_date).format("MMM YYYY")}
          </div>
        </div>

        <article className="markdown-text">
          <Markdown className="my-0">{experience.content}</Markdown>
        </article>

        {experience.tags && (
          <div className="tags-flexbox">
            {experience.tags.map((tag) => (
              <div className="tags" key={tag}>
                {tag}
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  )
}
