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
  // all our pages

  const pages = await getPages()

  return (
    <html lang="en">
      <body className="max-w-3xl mx-auto p-10">
        <header className="flex items-center justify-between">
          <Link
            href="/"
            className="text-3xl font-semibold bg-gradient-to-r from-teal-400 via-sky-800 to-blue-700 bg-clip-text text-transparent"
          >
            wei2young
          </Link>
          <div className="flex items-center gap-5 text-sm text-gray-300">
            {pages.map((page) => (
              <Link
                key={page._id}
                href={`/${page.slug}`}
                className="hover:text-blue-700"
              >
                {" "}
                {page.title}{" "}
              </Link>
            ))}
          </div>
        </header>
        <main className="py-12">{children}</main>
      </body>
    </html>
  )
}
