"use client" // use client-side rendering

import config from "@/sanity.config"
import { NextStudio } from "next-sanity/studio"

export default function AdminPage() {
  return <NextStudio config={config} />
}
