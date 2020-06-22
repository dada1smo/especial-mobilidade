import React from "react"
import { motion, useViewportScroll, useTransform } from "framer-motion"
import homeStyles from "./home.module.scss"
import homeVideo from "../assets/videos/mobilidade.mp4"

function Hero() {
  const { scrollYProgress } = useViewportScroll()
  const transitionY = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.5, 1])

  return (
    <div className={homeStyles.homeLayout}>
      <video className={homeStyles.homeVideo} autoPlay muted loop>
        <source src={homeVideo} type="video/mp4"></source>
      </video>
      <motion.div className={homeStyles.overlay} style={{ opacity: transitionY }} transition={{ ease: [0.17, 0.67, 0.83]}}>
        <h1>Especial de mobilidade</h1>
        <h2>
          Ícone da arquitetura mundial e maior cidade do mundo construída no
          século XX, <br />
          Brasília não se destaca apenas por esses títulos
        </h2>
        <div className={homeStyles.footer}>
          <a href="#intro">Leia o especial</a>
        </div>
      </motion.div>
    </div>
  )
}

export default Hero
