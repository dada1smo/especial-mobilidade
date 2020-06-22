import React from "react"
import introStyles from "./intro.module.scss"
import Layout from "./layout"

const Intro = () => {
  return (
    <Layout>
      <section className={introStyles.container} id="intro">
          <div className={introStyles.text}>
              <p>
              A capital federal também chama atenção quando o assunto é transporte público: está no ranking dos 10 piores sistemas do mundo, de acordo com o instituto de pesquisa americano Expert Market. Esse é apenas um dos muitos traços de segregação social presentes antes mesmo da inauguração de Brasília.
              </p>
          </div>
      </section>
    </Layout>
  )
}

export default Intro
