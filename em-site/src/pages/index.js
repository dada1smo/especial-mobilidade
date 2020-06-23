import React from "react"
import Layout from "../components/layout"
import Nav from "../components/nav"
import Hero from "../components/_home"
import Intro from "../components/content/_intro"
import C1 from "../components/content/_c1"
import Map1 from "../components/maps/_map1"
import Map2 from "../components/maps/_map2"

export default function Home() {
  return (
    <div>
      <Nav></Nav>
      <Hero></Hero>

      <Layout>
        <div className="mainContainer">
          <section className="content">
          <Intro></Intro>
          <C1></C1>
          </section>

          <section className="map">
            <Map1></Map1>
            <Map2></Map2>
          </section>
        </div>
      </Layout>
    </div>
  )
}
