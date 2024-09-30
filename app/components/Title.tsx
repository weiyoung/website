"use client"

import { ReactTyped } from "react-typed"

export default function Title() {
  return (
    <h2 className="mt-8">
      <ReactTyped
        strings={[
          "a software developer",
          "a musician",
          "a philosopher",
          "a minimalist",
          "an avid learner",
          "a compassionate leader",
          "a problem solver",
          "a human",
        ]}
        typeSpeed={40}
        loop
        backDelay={1800}
      />
    </h2>
  )
}
