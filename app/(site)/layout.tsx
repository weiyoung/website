import "../globals.css"
import type { Metadata } from "next"
import Link from "next/link"
import { getPages } from "@/sanity/sanity-utils"

export const metadata: Metadata = {
  title: "weiyoung",
  description: "My personal website",
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pages = await getPages()

  return (
    <html lang="en">
      <body className="max-w-3xl mx-auto px-4 py-16">
        <nav className="navbar-background">
          <div className="navbar-content">
            <Link href="/" className="navbar-logo">
              wei2young
            </Link>
            <div className="flex items-center gap-5 text-sm text-gray-300">
              {pages.map((page) => (
                <Link
                  key={page._id}
                  href={`/${page.slug}`}
                  className="navbar-links"
                >
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
