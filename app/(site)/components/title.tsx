"use client"

import { ReactTyped } from "react-typed"

export default function Title() {
  return (
    <h2 className="mt-8">
      <ReactTyped
        strings={[
          "software developer",
          "musician",
          "philosopher",
          "minimalist",
          "avid learner",
          "compassionate leader",
          "problem solver",
          "passionate creator",
          "human",
        ]}
        typeSpeed={40}
        loop
        backDelay={1800}
      />
    </h2>
  )
}
