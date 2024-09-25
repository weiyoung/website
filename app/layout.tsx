import "./globals.css"
import type { Metadata } from "next"
import Navbar from "./components/navbar-components/Navbar"
import Footer from "./components/footer-components/Footer"

export const metadata: Metadata = {
  title: "wei2young.com",
  description: "my personal website/blog",
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="max-w-4xl mx-auto px-4 py-16 bg-white text-neutral-800 dark:bg-neutral-950 dark:text-neutral-300">
        <Navbar />
        <main className="py-12">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
