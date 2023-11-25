import { getPage } from "@/sanity/sanity-utils"
import { PortableText } from "@portabletext/react"

type Props = {
  params: { slug: string }
}

export default async function Page({ params }: Props) {
  const page = await getPage(params.slug)

  return (
    <div>
      <h2>{page.title}</h2>
      <div className="my-12">
        <PortableText value={page.content} />
      </div>
    </div>
  )
}
