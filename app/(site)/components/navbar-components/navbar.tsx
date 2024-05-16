import Link from "next/link"
import ThemeToggle from "./theme-toggle"

export default function Navbar() {
  const pages = [
    { id: 0, title: "experiences", href: "/experiences" },
    { id: 1, title: "projects", href: "/projects" },
    { id: 2, title: "blog", href: "/blog" },
    { id: 3, title: "about", href: "/about" },
  ]
  return (
    <nav className="z-20 fixed w-full top-0 start-0 bg-white dark:bg-neutral-950 border-b border-neutral-200 dark:border-neutral-800">
      <div className="z-30 max-w-4xl mx-auto p-4 flex flex-wrap items-center justify-between">
        <Link href="/" className="text-2xl font-semibold hover-links">
          wei2young
        </Link>
        <div className="gap-6 flex items-center font-light">
          {pages.map((page) => (
            <Link key={page.id} href={page.href} className="hover-links">
              {page.title}
            </Link>
          ))}
          <div className="cursor-pointer hover-links">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  )
}
