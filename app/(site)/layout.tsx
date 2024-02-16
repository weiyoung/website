import "../globals.css"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "weiyoung",
  description: "My personal website",
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pages = [
    { id: 1, title: "Projects", href: "/projects" },
    { id: 2, title: "Blog", href: "/blog" },
    { id: 3, title: "About", href: "/about" },
  ]

  return (
    <html lang="en">
      <body className="max-w-3xl mx-auto px-4 py-16">
        <nav className="navbar-background">
          <div className="navbar">
            <Link href="/" className="navbar-logo">
              wei2young
            </Link>
            <div className="navbar-content">
              {pages.map((page) => (
                <Link key={page.id} href={page.href} className="navbar-links">
                  {page.title}
                </Link>
              ))}
            </div>
          </div>
        </nav>
        <main className="py-12">{children}</main>
      </body>
    </html>
  )
}
