import "./globals.css"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "weiyoung",
  description: "My personal website",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="max-w-3xl mx-auto p-10">
        <header>
          <Link
            href="/"
            className="text-3xl font-semibold bg-gradient-to-r from-teal-400 via-sky-800 to-blue-700 bg-clip-text text-transparent"
          >
            wei2young
          </Link>
        </header>
        {children}
      </body>
    </html>
  )
}
