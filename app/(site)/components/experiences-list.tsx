"use client"

import { useState, useEffect } from "react"
import { Experience } from "@/types/Experience"
import { getExperiences } from "@/sanity/sanity-utils"
import ExperienceCard from "./experience-card"

type ExperienceListProps = {
  limit?: number
}
export default function ExperiencesList({ limit }: ExperienceListProps) {
  const [experiences, setExperiences] = useState<Experience[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await getExperiences()
      setExperiences(data)
    }
    fetchData()
  }, [])

  const displayedExperiences = limit ? experiences.slice(0, limit) : experiences

  return (
    <>
      <h2>Work Experiences</h2>
      {displayedExperiences.map((experience) => (
        <ExperienceCard key={experience._id} {...experience} />
      ))}
    </>
  )
}
