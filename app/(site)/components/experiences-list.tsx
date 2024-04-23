import { getExperiences } from "@/sanity/sanity-utils"
import { PortableText } from "@portabletext/react"

export default async function ExperiencesList() {
  const experiences = await getExperiences()

  return (
    <div>
      {experiences.map((experience) => (
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
