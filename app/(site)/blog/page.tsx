import { getBlogs } from "@/sanity/sanity-utils"
import Link from "next/link"

export default async function Blog() {
  const blogs = await getBlogs()

  return (
    <>
      <h2>Blogs</h2>

      <div className="w-full">
        {blogs.map((blog) => (
          <Link
            href={`/blog/${blog.slug}`}
            key={blog._id}
            className="items-card items-card-hover"
          >
            {blog.title}
          </Link>
        ))}
      </div>
    </>
  )
}
