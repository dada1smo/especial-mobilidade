import React from "react"
import homeStyles from "./home.module.scss"
import homeVideo from "../../assets/videos/mobilidade.mp4"

const Hero = () => {
  return (
    <div className={homeStyles.homeLayout}>
      <video className={homeStyles.homeVideo} autoPlay muted loop>
        <source src={homeVideo} type="video/mp4"></source>
      </video>
      <div className={homeStyles.overlay}>
        <h1>O plano fora do Plano</h1>
        <h4>
          Embora tenha sido planejada, Brasília é uma cidade historicamente
          conhecida pela segregação socioespacial entre o Plano Piloto e as
          Regiões Administrativas. O sistema de transporte público da cidade é,
          ao mesmo tempo, uma evidência e uma causa dessa separação
        </h4>
        <div className={homeStyles.footer}>
          <a href="#intro">Leia o especial</a>
        </div>
      </div>
    </div>
  )
}

export default Hero
