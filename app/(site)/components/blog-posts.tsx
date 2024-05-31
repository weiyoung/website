import { getBlogs } from "@/sanity/sanity-utils"
import Link from "next/link"

type BlogProps = {
  limit?: number
}

export default async function BlogPosts({ limit }: BlogProps) {
  const blogs = await getBlogs()

  const displayedBlogPosts = limit ? blogs.slice(0, limit) : blogs

  return (
    <>
      {displayedBlogPosts.map((blog) => (
        <Link
          href={`/blog/${blog.slug}`}
          key={blog._id}
          className="w-full block items-card items-card-hover my-4"
        >
          <h3>{blog.title}</h3>
          <p>{blog.date}</p>
          {blog.tags && (
            <div className="tags-flexbox">
              {blog.tags.map((tag) => (
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
