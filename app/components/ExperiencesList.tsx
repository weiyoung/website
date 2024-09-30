import { getExperiences } from "../hooks/experiences-hooks"
import ExperienceCard from "./ExperienceCard"

type Props = {
  limit?: number
}

export default function ExperiencesList({ limit }: Props) {
  const experiences = getExperiences()
  const displayedExperiences = limit ? experiences.slice(0, limit) : experiences

  return (
    <>
      <h2 className="mx-4">Work Experiences</h2>
      {displayedExperiences.map((experience) => (
        <ExperienceCard key={experience.slug} {...experience} />
      ))}
    </>
  )
}
