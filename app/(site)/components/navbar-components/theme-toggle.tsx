"use client"

import { useState, useEffect } from "react"
import { FaMoon, FaSun } from "react-icons/fa"

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light")

  useEffect(() => {
    const theme = localStorage.getItem("theme")
    setTheme(theme === "dark" ? "dark" : "light")
  }, [])

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }, [theme])

  return (
    <div onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      <FaMoon className={`text-2xl ${theme === "dark" ? "hidden" : ""}`} />
      <FaSun className={`text-2xl ${theme === "light" ? "hidden" : ""}`} />
    </div>
  )
}
