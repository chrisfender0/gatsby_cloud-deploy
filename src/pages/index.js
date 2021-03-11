import React from "react"
import Header from "../components/header"

export default function Home() {
  return (
    <div style={{ color: `black` }}>
      <Header headerText="Hello World" />
      <Header headerText="Gatsby is a piece of cake!" />
      <img src="https://source.unsplash.com/random/400x200" alt="" />
    </div>
  )
}