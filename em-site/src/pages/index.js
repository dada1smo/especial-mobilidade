import React from "react"
import Layout from "../components/layout"
import Nav from "../components/nav"
import Hero from "../components/partials/_home"
import Intro from "../components/partials/_intro"
import Slide from "../components/partials/slide"
import Content from "../content/content.yaml"
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
            <Slide id={Content.c1.id} content={Content.c1.content} />
            <Slide id={Content.c2.id} content={Content.c2.content} />
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
