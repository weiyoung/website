import { getBlog } from "@/sanity/sanity-utils"
import { PortableText } from "@portabletext/react"

type Props = {
  params: { slug: string }
}

export default async function Blog({ params }: Props) {
  const blog = await getBlog(params.slug)

  return (
    <div>
      <h2>{blog.title}</h2>
      <div className="my-12">
        <PortableText value={blog.content} />
      </div>
    </div>
  )
}
