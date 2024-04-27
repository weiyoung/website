import { getExperiences } from "@/sanity/sanity-utils"
import { PortableText } from "@portabletext/react"

type ExperienceListProps = {
  limit?: number
}
export default async function ExperiencesList({ limit }: ExperienceListProps) {
  const experiences = await getExperiences()

  const displayedExperiences = limit ? experiences.slice(0, limit) : experiences

  return (
    <div>
      {displayedExperiences.map((experience) => (
        <div key={experience._id} className="items-card">
          <div>{experience.company}</div>
          <div>{experience.position}</div>
          <div>{String(experience.start_date)}</div>
          <div>{String(experience.end_date)}</div>
          <div>{experience.location}</div>
          <div className="my-10">
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
        </div>
      ))}
    </div>
  )
}
