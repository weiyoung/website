import { getBlogs } from "@/sanity/sanity-utils"
import Link from "next/link"

export default async function Blog() {
  const blogs = await getBlogs()

  return (
    <>
      <h2 className="mb-6">Blogs</h2>

      <div className="items-grid">
        {blogs.map((blog) => (
          <Link
            href={`/blog/${blog.slug}`}
            key={blog._id}
            className="items-card"
          >
            <div className="pt-2 px-2 font-extrabold custom-gradient">
              {blog.title}
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}
