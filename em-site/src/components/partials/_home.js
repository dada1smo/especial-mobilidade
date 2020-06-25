import React from "react"
import homeStyles from "./home.module.scss"
import homeVideo from "../../assets/videos/mobilidade.mp4"

const Hero= () => {

  return (
    <div className={homeStyles.homeLayout}>
      <video className={homeStyles.homeVideo} autoPlay muted loop>
        <source src={homeVideo} type="video/mp4"></source>
      </video>
      <div className={homeStyles.overlay}>
        <h1>Especial de mobilidade</h1>
        <h2>
          Ícone da arquitetura mundial e maior cidade do mundo construída no
          século XX, <br />
          Brasília não se destaca apenas por esses títulos
        </h2>
        <div className={homeStyles.footer}>
          <a href="#intro">Leia o especial</a>
        </div>
      </div>
    </div>
  )
}

export default Hero
