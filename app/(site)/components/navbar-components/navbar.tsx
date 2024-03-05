import Link from "next/link"

export default function Navbar() {
  const pages = [
    { id: 1, title: "Projects", href: "/projects" },
    { id: 2, title: "Blog", href: "/blog" },
    { id: 3, title: "About", href: "/about" },
  ]
  return (
    <nav className="z-20 fixed w-full top-0 start-0 bg-gray-900 border-b border-gray-700">
      <div className="z-30 max-w-3xl mx-auto p-4 flex flex-wrap items-center justify-between">
        <Link
          href="/"
          className="text-3xl font-semibold custom-gradient highlight-links"
        >
          wei2young
        </Link>
        <div className="gap-6 flex items-center font-light text-gray-300">
          {pages.map((page) => (
            <Link key={page.id} href={page.href} className="highlight-links">
              {page.title}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
