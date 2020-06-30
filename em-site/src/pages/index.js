import React from "react"
import Layout from "../components/layout"
import Nav from "../components/nav"
import Hero from "../components/partials/_home"
import Intro from "../components/partials/_intro"
import Slide from "../components/partials/slide"
import Title from "../components/partials/title"
import Quote from "../components/partials/quote"
import Content from "../content/content.yaml"
import s2Img from "../assets/img/title/s2_title.png"
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

            {/* s1 */}
            <Slide id={Content.s1.c1.id} content={Content.s1.c1.content} />
            <Slide id={Content.s1.c2.id} content={Content.s1.c2.content} />
            <Slide id={Content.s1.c3.id} content={Content.s1.c3.content} />
            <Slide id={Content.s1.c4.id} content={Content.s1.c4.content} />
            <Slide id={Content.s1.c5.id} content={Content.s1.c5.content} />
            <Slide id={Content.s1.c6.id} content={Content.s1.c6.content} />
            <Slide id={Content.s1.c7.id} content={Content.s1.c7.content} />
            <Slide id={Content.s1.c8.id} content={Content.s1.c8.content} />

            {/* s2 */}
            <Title id={Content.s2.id} title={Content.s2.title} />
            <Slide id={Content.s2.c1.id} content={Content.s2.c1.content} />
            <Slide id={Content.s2.c2.id} content={Content.s2.c2.content} />
            <Slide id={Content.s2.c3.id} content={Content.s2.c3.content} />
            <Quote
              id={Content.s2.c4.id}
              quote={Content.s2.c4.quote}
              source={Content.s2.c4.source}
            />
            <Slide id={Content.s2.c5.id} content={Content.s2.c5.content} />
            <Slide id={Content.s2.c6.id} content={Content.s2.c6.content} />
            <Slide id={Content.s2.c7.id} content={Content.s2.c7.content} />
            <Slide id={Content.s2.c8.id} content={Content.s2.c8.content} />

            {/* s3 */}
            <Title id={Content.s3.id} title={Content.s3.title} />
            <Slide id={Content.s3.c1.id} content={Content.s3.c1.content} />
            <Slide id={Content.s3.c2.id} content={Content.s3.c2.content} />
            <Slide id={Content.s3.c3.id} content={Content.s3.c3.content} />

            {/* s4 */}
            <Title id={Content.s4.id} title={Content.s4.title} />
            <Slide id={Content.s4.c1.id} content={Content.s4.c1.content} />
            <Slide id={Content.s4.c2.id} content={Content.s4.c2.content} />
            <Slide id={Content.s4.c3.id} content={Content.s4.c3.content} />
            <Slide id={Content.s4.c4.id} content={Content.s4.c4.content} />
          </section>

          {/* s4 comparative */}
          <section className="comparative">
            <div className="half">
              <h3>{Content.s4.c5.question}</h3>
              <div className="col">
                <Quote
                  quote={Content.s4.c5.h1.quote}
                  source={Content.s4.c5.h1.source}
                />
              </div>
              <div className="col">
                <Quote
                  quote={Content.s4.c5.h2.quote}
                  source={Content.s4.c5.h2.source}
                />
              </div>
            </div>
          </section>

          <section className="content">
            {/* s4 */}
            <Slide id={Content.s4.c6.id} content={Content.s4.c6.content} />

            {/* s5 */}
            <Title id={Content.s5.id} title={Content.s5.title} />
            <Slide id={Content.s5.c1.id} content={Content.s5.c1.content} />
            <Slide id={Content.s5.c2.id} content={Content.s5.c2.content} />
            <Slide id={Content.s5.c3.id} content={Content.s5.c3.content} />
            <Slide id={Content.s5.c4.id} content={Content.s5.c4.content} />
          </section>

          {/* s5 comparative */}
          <section className="comparative">
            <div className="third">
              <h3>{Content.s5.c5.question}</h3>
              <div className="col">
                <Quote
                  quote={Content.s5.c5.h1.quote}
                  source={Content.s5.c5.h1.source}
                />
              </div>
              <div className="col">
                <Quote
                  quote={Content.s5.c5.h2.quote}
                  source={Content.s5.c5.h2.source}
                />
              </div>
              <div className="col">
                <Quote
                  quote={Content.s5.c5.h3.quote}
                  source={Content.s5.c5.h3.source}
                />
              </div>
            </div>
          </section>

          <section className="content">
            {/* s6 */}
            <Title id={Content.s6.id} title={Content.s6.title} />
            <Slide id={Content.s6.c1.id} content={Content.s6.c1.content} />
            <Slide id={Content.s6.c2.id} content={Content.s6.c2.content} />
            <Slide id={Content.s6.c3.id} content={Content.s6.c3.content} />
            <Slide id={Content.s6.c4.id} content={Content.s6.c4.content} />
            <Quote
              id={Content.s6.c5.id}
              quote={Content.s6.c5.quote}
              source={Content.s6.c5.source}
            />
          </section>

          <section className="map">
            <Map1></Map1>
            <Map2></Map2>
          </section>
        </div>
      </Layout>

      <footer></footer>
    </div>
  )
}
