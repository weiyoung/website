import Link from "next/link"
import moment from "moment"

type BlogProps = {
  limit?: number
}

export default async function BlogPosts({ limit }: BlogProps) {


  return (
    <>
      <h2 className="mx-4">Blog</h2>
      {/* {displayedBlogPosts.map((blog) => (
        <Link
          href={`/blog/${blog.slug}`}
          key={blog._id}
          className="w-full block items-card items-card-hover my-4"
        >
          <h3>{blog.title}</h3>
          <div className="date">{moment(blog.date).format("MMM D, YYYY")}</div>
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
      ))} */}
    </>
  )
}
