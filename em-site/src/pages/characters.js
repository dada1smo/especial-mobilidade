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
import Attached from "../components/maps/_attached"

export default function Characters() {
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
            <Slide
              id={Content.s1.c1.id}
              content={Content.s1.c1.content}
              imgSrc={"s1c1.png"}
            />
            <Slide
              id={Content.s1.c2.id}
              content={Content.s1.c2.content}
              imgSrc={"s1c2.png"}
            />
            <Slide
              id={Content.s1.c3.id}
              content={Content.s1.c3.content}
              imgSrc={"s1c3.png"}
            />
            <Slide
              id={Content.s1.c4.id}
              content={Content.s1.c4.content}
              imgSrc={"s1c4.png"}
            />
            <Slide
              id={Content.s1.c5.id}
              content={Content.s1.c5.content}
              imgSrc={"s1c5.png"}
            />
            <Slide
              id={Content.s1.c6.id}
              content={Content.s1.c6.content}
              imgSrc={"s1c6_mobile.png"}
            />
            <Slide
              id={Content.s1.c7.id}
              content={Content.s1.c7.content}
              imgSrc={"s1c7_mobile.png"}
            />
            <Quote
              id={Content.s1.c8.id}
              quote={Content.s1.c8.quote}
              source={Content.quotes.benny.source}
              qualifications={Content.quotes.benny.qualifications}
              imgSrc={"s1c8_mobile.png"}
            />

            {/* s2 */}
            <Title
              id={Content.s2.id}
              title={Content.s2.title}
              imgSrc={"s2_title.png"}
            />
            <Slide
              id={Content.s2.c1.id}
              content={Content.s2.c1.content}
              imgSrc={"s2c1.png"}
            />
            <Slide
              id={Content.s2.c2.id}
              content={Content.s2.c2.content}
              imgSrc={"s2c2_mobile.png"}
            />
            <Slide
              id={Content.s2.c3.id}
              content={Content.s2.c3.content}
              imgSrc={"s2c3_mobile.png"}
            />
            <Quote
              id={Content.s2.c4.id}
              quote={Content.s2.c4.quote}
              source={Content.quotes.willy.source}
              qualifications={Content.quotes.willy.qualifications}
              imgSrc={"s2c4_mobile.png"}
            />
            <Slide
              id={Content.s2.c5.id}
              content={Content.s2.c5.content}
              imgSrc={"s2c5_mobile.png"}
            />
            <Slide
              id={Content.s2.c6.id}
              content={Content.s2.c6.content}
              imgSrc={"s2c6_mobile.png"}
            />
            <Slide
              id={Content.s2.c7.id}
              content={Content.s2.c7.content}
              imgSrc={"s2c7_mobile.png"}
            />
            <Slide
              id={Content.s2.c8.id}
              content={Content.s2.c8.content}
              imgSrc={"s2c8.png"}
            />
            <Slide
              id={Content.s2.c9.id}
              content={Content.s2.c9.content}
              imgSrc={"s2c9_mobile.png"}
            />
            <Slide
              id={Content.s2.c10.id}
              content={Content.s2.c10.content}
              imgSrc={"s2c10_mobile.png"}
            />

            {/* s3 */}
            <Title
              id={Content.s3.id}
              title={Content.s3.title}
              imgSrc={"s2_title.png"}
            />
            <Slide
              id={Content.s3.c1.id}
              content={Content.s3.c1.content}
              imgSrc={"s3c1_mobile.png"}
            />
            <Slide
              id={Content.s3.c2.id}
              content={Content.s3.c2.content}
              imgSrc={"s3c2_mobile.png"}
            />
            <Slide
              id={Content.s3.c3.id}
              content={Content.s3.c3.content}
              imgSrc={"s3c3_mobile.png"}
            />

            {/* s4 */}
            <Title
              id={Content.s4.id}
              title={Content.s4.title}
              imgSrc={"s2_title.png"}
            />
            <Slide
              id={Content.s4.c1.id}
              content={Content.s4.c1.content}
              imgSrc={"s1c2.png"}
            />
            <Slide
              id={Content.s4.c2.id}
              content={Content.s4.c2.content}
              imgSrc={"s4c2.png"}
            />
            <Slide
              id={Content.s4.c3.id}
              content={Content.s4.c3.content}
              imgSrc={"s4c3.png"}
            />
            <Slide
              id={Content.s4.c4.id}
              content={Content.s4.c4.content}
              imgSrc={"s4c4.png"}
            />
          </section>

          {/* s4 comparative */}
          <section className="comparative">
            <div className="half">
              <h3>{Content.s4.c5.question}</h3>
              <div className="col">
                <Quote
                  quote={Content.s4.c5.h1.quote}
                  source={Content.s4.c5.h1.source}
                  qualifications={Content.s4.c5.h1.qualifications}
                />
              </div>
              <div className="col">
                <Quote
                  quote={Content.s4.c5.h2.quote}
                  source={Content.quotes.marilene.source}
                  qualifications={Content.quotes.marilene.qualifications}
                />
              </div>
            </div>
          </section>

          <section className="content">
            {/* s4 */}
            <Quote
              quote={Content.s4.c6.quote}
              source={Content.quotes.luciano.source}
              qualifications={Content.quotes.luciano.qualifications}
              imgSrc={"s4c6_mobile.png"}
            />

            {/* s5 */}
            <Title
              id={Content.s5.id}
              title={Content.s5.title}
              imgSrc={"s2_title.png"}
            />
            <Slide
              id={Content.s5.c1.id}
              content={Content.s5.c1.content}
              imgSrc={"s5c1_mobile.png"}
            />
            <Slide
              id={Content.s5.c2.id}
              content={Content.s5.c2.content}
              imgSrc={"s5c2_mobile.png"}
            />
            <Slide
              id={Content.s5.c3.id}
              content={Content.s5.c3.content}
              imgSrc={"s5c3_mobile.png"}
            />
            <Slide
              id={Content.s5.c4.id}
              content={Content.s5.c4.content}
              imgSrc={"s5c4_mobile.png"}
            />
          </section>

          {/* s5 comparative */}
          <section className="comparative">
            <div className="third">
              <h3>{Content.s5.c5.question}</h3>
              <div className="col">
                <Quote
                  quote={Content.s5.c5.h1.quote}
                  source={Content.quotes.willy.source}
                  qualifications={Content.quotes.willy.qualifications}
                />
              </div>
              <div className="col">
                <Quote
                  quote={Content.s5.c5.h2.quote}
                  source={Content.quotes.benny.source}
                  qualifications={Content.quotes.benny.qualifications}
                />
              </div>
              <div className="col">
                <Quote
                  quote={Content.s5.c5.h3.quote}
                  source={Content.quotes.marilene.source}
                  qualifications={Content.quotes.marilene.qualifications}
                />
              </div>
            </div>
          </section>

          {/* <section className="content">
            s6
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
          </section> */}
          <section className="map">
            {/* s1 */}
            <Attached
              imgSrc={"intro.png"}
              scrollPosition={[0.017, 0.022, 0.042, 0.062]}
              scrollValue={[0, 1, 1, 0]}
            />
            <Attached
              imgSrc={"s1c1.png"}
              scrollPosition={[0.04, 0.045, 0.058, 0.062]}
              scrollValue={[0, 1, 1, 0]}
            />
            <Attached
              imgSrc={"s1c2.png"}
              scrollPosition={[0.07, 0.075, 0.243, 0.246]}
              scrollValue={[0, 1, 1, 0]}
            />
            <Attached
              imgSrc={"s1c3.png"}
              scrollPosition={[0.105, 0.108, 0.118, 0.121]}
              scrollValue={[0, 1, 1, 0]}
            />
            <Attached
              imgSrc={"s1c4.png"}
              scrollPosition={[0.13, 0.133, 0.143, 0.146]}
              scrollValue={[0, 1, 1, 0]}
            />
            <Attached
              imgSrc={"s1c5.png"}
              scrollPosition={[0.16, 0.163, 0.173, 0.176]}
              scrollValue={[0, 1, 1, 0]}
            />
            <Attached
              imgSrc={"s1c6.png"}
              scrollPosition={[0.182, 0.191, 0.201, 0.204]}
              scrollValue={[0, 1, 1, 0]}
            />
            <Attached
              imgSrc={"s1c7.png"}
              scrollPosition={[0.21, 0.213, 0.223, 0.226]}
              scrollValue={[0, 1, 1, 0]}
            />
            <Attached
              imgSrc={"s1c8.png"}
              scrollPosition={[0.23, 0.233, 0.243, 0.246]}
              scrollValue={[0, 1, 1, 0]}
            />

            {/* s2 */}
            <Attached
              imgSrc={"s1c2.png"}
              scrollPosition={[0.287, 0.29, 0.533, 0.536]}
              scrollValue={[0, 1, 1, 0]}
            />
            <Attached
              imgSrc={"s2c1.png"}
              scrollPosition={[0.287, 0.29, 0.3, 0.303]}
              scrollValue={[0, 1, 1, 0]}
            />
            <Attached
              imgSrc={"s2c2.png"}
              scrollPosition={[0.312, 0.315, 0.325, 0.328]}
              scrollValue={[0, 1, 1, 0]}
            />
            <Attached
              imgSrc={"s2c3.png"}
              scrollPosition={[0.342, 0.345, 0.355, 0.358]}
              scrollValue={[0, 1, 1, 0]}
            />
            <Attached
              imgSrc={"s2c4.png"}
              scrollPosition={[0.362, 0.365, 0.375, 0.378]}
              scrollValue={[0, 1, 1, 0]}
            />
            <Attached
              imgSrc={"s2c5.png"}
              scrollPosition={[0.382, 0.385, 0.395, 0.398]}
              scrollValue={[0, 1, 1, 0]}
            />
            <Attached
              imgSrc={"s2c6.png"}
              scrollPosition={[0.412, 0.415, 0.425, 0.428]}
              scrollValue={[0, 1, 1, 0]}
            />
            <Attached
              imgSrc={"s2c7.png"}
              scrollPosition={[0.44, 0.443, 0.453, 0.456]}
              scrollValue={[0, 1, 1, 0]}
            />
            <Attached
              imgSrc={"s2c8.png"}
              scrollPosition={[0.468, 0.471, 0.481, 0.484]}
              scrollValue={[0, 1, 1, 0]}
            />
            <Attached
              imgSrc={"s2c9.png"}
              scrollPosition={[0.495, 0.498, 0.508, 0.511]}
              scrollValue={[0, 1, 1, 0]}
            />
            <Attached
              imgSrc={"s2c10.png"}
              scrollPosition={[0.52, 0.523, 0.533, 0.536]}
              scrollValue={[0, 1, 1, 0]}
            />

            {/* s3 */}
            <Attached
              imgSrc={"s1c2.png"}
              scrollPosition={[0.58, 0.583, 0.646, 0.649]}
              scrollValue={[0, 1, 1, 0]}
            />
            <Attached
              imgSrc={"s3c1.png"}
              scrollPosition={[0.58, 0.583, 0.593, 0.596]}
              scrollValue={[0, 1, 1, 0]}
            />
            <Attached
              imgSrc={"s3c2.png"}
              scrollPosition={[0.605, 0.608, 0.618, 0.621]}
              scrollValue={[0, 1, 1, 0]}
            />
            <Attached
              imgSrc={"s3c3.png"}
              scrollPosition={[0.633, 0.636, 0.646, 0.649]}
              scrollValue={[0, 1, 1, 0]}
            />

            {/* s4 */}
            <Attached
              imgSrc={"s1c2.png"}
              scrollPosition={[0.69, 0.693, 0.788, 0.791]}
              scrollValue={[0, 1, 1, 0]}
            />
            <Attached
              imgSrc={"s4c2.png"}
              scrollPosition={[0.715, 0.718, 0.788, 0.791]}
              scrollValue={[0, 1, 1, 0]}
            />
            <Attached
              imgSrc={"s4c3.png"}
              scrollPosition={[0.745, 0.748, 0.758, 0.761]}
              scrollValue={[0, 1, 1, 0]}
            />
            <Attached
              imgSrc={"s4c4.png"}
              scrollPosition={[0.775, 0.778, 0.788, 0.791]}
              scrollValue={[0, 1, 1, 0]}
            />
            <Attached
              imgSrc={"s4c6.png"}
              scrollPosition={[0.81, 0.813, 0.823, 0.826]}
              scrollValue={[0, 1, 1, 0]}
            />

            {/* s5 */}
            <Attached
              imgSrc={"s1c2.png"}
              scrollPosition={[0.86, 0.863, 0.956, 0.959]}
              scrollValue={[0, 1, 1, 0]}
            />
            <Attached
              imgSrc={"s5c1.png"}
              scrollPosition={[0.86, 0.863, 0.873, 0.876]}
              scrollValue={[0, 1, 1, 0]}
            />
            <Attached
              imgSrc={"s5c2.png"}
              scrollPosition={[0.888, 0.891, 0.901, 0.904]}
              scrollValue={[0, 1, 1, 0]}
            />
            <Attached
              imgSrc={"s5c3.png"}
              scrollPosition={[0.915, 0.918, 0.928, 0.931]}
              scrollValue={[0, 1, 1, 0]}
            />
            <Attached
              imgSrc={"s5c4.png"}
              scrollPosition={[0.943, 0.946, 0.956, 0.959]}
              scrollValue={[0, 1, 1, 0]}
            />
          </section>
        </div>
      </Layout>

      <footer></footer>
    </div>
  )
}
