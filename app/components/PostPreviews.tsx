import { getPostsMetadata } from "@/app/hooks/blog-hooks"
import Link from "next/link"
import moment from "moment"

type Props = {
  limit?: number
}

export default function PostPreviews({ limit }: Props) {
  const posts = getPostsMetadata()
  const displayedPosts = limit ? posts.slice(0, limit) : posts

  return (
    <>
      <h2 className="mx-4">Blog</h2>
      {displayedPosts.map((post) => (
        <Link
          href={`/blog/${post.slug}`}
          key={post.slug}
          className="w-full block items-card items-card-hover my-4"
        >
          <h3>{post.title}</h3>
          <div className="date">{moment(post.date).format("MMM D, YYYY")}</div>
          {post.tags && (
            <div className="tags-flexbox">
              {post.tags.map((tag) => (
                <div className="tags" key={tag}>
                  {tag}
                </div>
              ))}
            </div>
          )}
        </Link>
      ))}
    </>
  )
}
