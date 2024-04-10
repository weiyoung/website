"use client"

import { ReactTyped } from "react-typed"

export default function Title() {
  return (
    <h2 className="mt-8">
      <ReactTyped
        strings={[
          "Software Developer",
          "Avid Learner",
          "All-rounded Musician",
          "Compassionate Leader",
          "Creative Problem Solver",
          "Introspective Thinker",
          "Passionate Creator",
        ]}
        typeSpeed={40}
        loop
        backDelay={1800}
      />
    </h2>
  )
}
