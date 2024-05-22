"use client"

import { Experience } from "@/types/Experience"
import { useCollapse } from "react-collapsed"
import { FaAngleDown, FaAngleUp } from "react-icons/fa"
import moment from "moment"
import { PortableText } from "@portabletext/react"

export default function ExperienceCard(experience: Experience) {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse()

  return (
    <div className="items-card items-card-hover my-4">
      <section className="w-full flex justify-between" {...getToggleProps()}>
        <div>
          <p className="text-lg font-semibold">{experience.company}</p>
          <p>{experience.position}</p>
        </div>
        <div className="flex items-center text-xl">
          {isExpanded ? <FaAngleUp /> : <FaAngleDown />}
        </div>
      </section>

      <section {...getCollapseProps()}>
        <div className="flex justify-between">
          <div>{experience.location}</div>
          <div>
            {moment(experience.start_date).format("MMM YYYY")}
            {" - "}
            {moment(experience.end_date).format("MMM YYYY")}
          </div>
        </div>
        <div>
          <PortableText value={experience.content} />
        </div>
        {experience.tags && (
          <div className="flex justify-left gap-4">
            {experience.tags.map((tag) => (
              <div className="items-card" key={tag}>
                {tag}
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  )
}
