import { getPost, getPostsMetadata } from "@/app/hooks/blog-hooks"
import moment from "moment"
import Markdown from "markdown-to-jsx"

type Props = {
  params: { slug: string }
}

export async function generateStaticParams() {
  const posts = getPostsMetadata()
  return posts.map((post) => ({ slug: post.slug }))
}

export default function Blog({ params }: Props) {
  const post = getPost(params.slug)

  return (
    <div className="content-panel">
      <h2 className="mb-10">{post.data.title}</h2>
      <div className="date">{moment(post.data.date).format("MMM D, YYYY")}</div>

      <article className="markdown-text">
        <Markdown className="my-10">{post.content}</Markdown>
      </article>

      {post.data.tags && (
        <div className="tags-flexbox">
          {post.data.tags.map((tag: string) => (
            <div className="tags" key={tag}>
              {tag}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
