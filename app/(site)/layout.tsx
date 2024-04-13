import "../globals.css"
import type { Metadata } from "next"
import Navbar from "./components/navbar-components/navbar"
import Footer from "./components/footer-components/footer"

export const metadata: Metadata = {
  title: "weiyoung",
  description: "my personal website",
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="max-w-4xl mx-auto px-4 py-16">
        <Navbar />
        <main className="py-12">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
