"use client"

import { useCollapse } from "react-collapsed"
import { FaAngleDown, FaAngleUp } from "react-icons/fa"
import moment from "moment"

export default function ExperienceCard() {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse()

  return (
    <div className="items-card items-card-hover my-4">
      <section className="w-full flex justify-between" {...getToggleProps()}>
        <div>
          <h3>company</h3>
          <p>position</p>
        </div>
        <div className="flex items-center text-xl">
          {isExpanded ? <FaAngleUp /> : <FaAngleDown />}
        </div>
      </section>

      <section {...getCollapseProps()}>
        <div className="flex justify-between">
          <div>location</div>
          <div className="date">
            {/* {moment(experience.start_date).format("MMM YYYY")}
            {" - "}
            {moment(experience.end_date).format("MMM YYYY")} */}
          </div>
        </div>
        <div className="my-2">
          content
        </div>
        {/* {experience.tags && (
          <div className="tags-flexbox">
            {experience.tags.map((tag) => (
              <div className="tags" key={tag}>
                {tag}
              </div>
            ))}
          </div>
        )} */}
      </section>
    </div>
  )
}
