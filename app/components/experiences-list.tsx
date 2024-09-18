"use client"

import ExperienceCard from "./experience-card"

type ExperienceListProps = {
  limit?: number
}
export default function ExperiencesList({ limit }: ExperienceListProps) {


  // const displayedExperiences = limit ? experiences.slice(0, limit) : experiences

  return (
    <>
      <h2 className="mx-4">Work Experiences</h2>
      {/* {displayedExperiences.map((experience) => (
        <ExperienceCard key={experience._id} {...experience} />
      ))} */}
    </>
  )
}
