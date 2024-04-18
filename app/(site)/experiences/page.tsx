import { getExperiences } from "@/sanity/sanity-utils"

export default async function Experiences() {
  const experiences = await getExperiences()

  return (
    <>
      <h2>Experiences</h2>

      <div className="items-grid">
        {experiences.map((experience) => (
          <div key={experience._id} className="items-card">
            <div>{experience.company}</div>
          </div>
        ))}
      </div>
    </>
  )
}
