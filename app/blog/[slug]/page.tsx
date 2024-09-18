import moment from "moment"

type Props = {
  params: { slug: string }
}

export default async function Blog({ params }: Props) {
  return (
    <div className="content-panel">
      <h2 className="mb-10 mx-0">title</h2>
      {/* <div className="date">{moment(blog.date).format("MMM D, YYYY")}</div>
      <div className="my-10">
        <PortableText value={blog.content} />
      </div>
      {blog.tags && (
        <div className="tags-flexbox">
          {blog.tags.map((tag) => (
            <div className="tags" key={tag}>
              {tag}
            </div>
          ))}
        </div>
      )} */}
    </div>
  )
}
