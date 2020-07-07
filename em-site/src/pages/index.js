import React from "react"
import Layout from "../components/layout"
import Nav from "../components/nav"
import Progress from "../components/partials/progress"
import Hero from "../components/partials/_home"
import Intro from "../components/partials/_intro"
import Slide from "../components/partials/slide"
import Title from "../components/partials/title"
import Quote from "../components/partials/quote"
import Content from "../content/content.yaml"
import SideImages from "../components/maps/_images"
import Attached from "../components/maps/_attached"

export default function Home() {
  return (
    <div>
      <Nav></Nav>
      <Hero></Hero>
      <Progress />

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

            {/* s2 */}
            <Title
              id={Content.s2.id}
              title={Content.s2.title}
              imgSrc={"s2_title.png"}
            />
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
            <Slide id={Content.s2.c9.id} content={Content.s2.c9.content} />

            {/* s3 */}
            <Title
              id={Content.s3.id}
              title={Content.s3.title}
              imgSrc={"s2_title.png"}
            />
            <Slide id={Content.s3.c1.id} content={Content.s3.c1.content} />
            <Slide id={Content.s3.c2.id} content={Content.s3.c2.content} />
            <Slide id={Content.s3.c3.id} content={Content.s3.c3.content} />

            {/* s4 */}
            <Title
              id={Content.s4.id}
              title={Content.s4.title}
              imgSrc={"s2_title.png"}
            />
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
            <Title
              id={Content.s5.id}
              title={Content.s5.title}
              imgSrc={"s2_title.png"}
            />
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
            <Title
              id={Content.s6.id}
              title={Content.s6.title}
              imgSrc={"s2_title.png"}
            />
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
            {/* <SideImages imgSrc={"s6_i1.png"} imgSrc2={"s6_i2.png"} /> */}
            {/* s1 */}
            <Attached
              imgSrc={"intro.png"}
              scrollPosition={[0.015, 0.02, 0.04, 0.06]}
              scrollValue={[0, 1, 1, 0]}
            />
            <Attached
              imgSrc={"s1c1.png"}
              scrollPosition={[0.035, 0.04, 0.05, 0.055]}
              scrollValue={[0, 1, 1, 0]}
            />
            <Attached
              imgSrc={"s1c2.png"}
              scrollPosition={[0.06, 0.065, 0.205, 0.210]}
              scrollValue={[0, 1, 1, 0]}
            />
            <Attached
              imgSrc={"s1c3.png"}
              scrollPosition={[0.085, 0.090, 0.1, 0.105]}
              scrollValue={[0, 1, 1, 0]}
            />
            <Attached
              imgSrc={"s1c4.png"}
              scrollPosition={[0.110, 0.115, 0.130, 0.135]}
              scrollValue={[0, 1, 1, 0]}
            />
            <Attached
              imgSrc={"s1c5.png"}
              scrollPosition={[0.140, 0.145, 0.160, 0.165]}
              scrollValue={[0, 1, 1, 0]}
            />
            <Attached
              imgSrc={"s1c6.png"}
              scrollPosition={[0.165, 0.170, 0.180, 0.185]}
              scrollValue={[0, 1, 1, 0]}
            />
            <Attached
              imgSrc={"s1c7.png"}
              scrollPosition={[0.190, 0.195, 0.205, 0.210]}
              scrollValue={[0, 1, 1, 0]}
            />

            {/* s2 */}
            <Attached
              imgSrc={"s1c2.png"}
              scrollPosition={[0.235, 0.240, 0.445, 0.450]}
              scrollValue={[0, 1, 1, 0]}
            />
            <Attached
              imgSrc={"s2c1.png"}
              scrollPosition={[0.240, 0.245, 0.255, 0.260]}
              scrollValue={[0, 1, 1, 0]}
            />
            <Attached
              imgSrc={"s2c2.png"}
              scrollPosition={[0.265, 0.270, 0.280, 0.285]}
              scrollValue={[0, 1, 1, 0]}
            />
            <Attached
              imgSrc={"s2c3.png"}
              scrollPosition={[0.290, 0.295, 0.303, 0.307]}
              scrollValue={[0, 1, 1, 0]}
            />
            <Attached
              imgSrc={"s2c4.png"}
              scrollPosition={[0.310, 0.313, 0.322, 0.325]}
              scrollValue={[0, 1, 1, 0]}
            />
            <Attached
              imgSrc={"s2c5.png"}
              scrollPosition={[0.332, 0.335, 0.345, 0.350]}
              scrollValue={[0, 1, 1, 0]}
            />
            <Attached
              imgSrc={"s2c6.png"}
              scrollPosition={[0.353, 0.357, 0.365, 0.370]}
              scrollValue={[0, 1, 1, 0]}
            />
            <Attached
              imgSrc={"s2c7.png"}
              scrollPosition={[0.375, 0.380, 0.390, 0.395]}
              scrollValue={[0, 1, 1, 0]}
            />
            <Attached
              imgSrc={"s2c8.png"}
              scrollPosition={[0.400, 0.405, 0.415, 0.420]}
              scrollValue={[0, 1, 1, 0]}
            />
            <Attached
              imgSrc={"s2c9.png"}
              scrollPosition={[0.425, 0.430, 0.440, 0.445]}
              scrollValue={[0, 1, 1, 0]}
            />
          </section>
        </div>
      </Layout>

      <footer></footer>
    </div>
  )
}
