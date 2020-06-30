import React from "react"
import { motion, useViewportScroll, useTransform } from "framer-motion"
import mapStyles from "./map.module.scss"
import M2 from "../../assets/img/m2.map.svg";

const Map2= () => {
  const { scrollYProgress } = useViewportScroll()
  const transitionY = useTransform(scrollYProgress, [0.035, 0.04, 0.05, 0.055], [0, 1, 1, 0])

  return (
    <div className={mapStyles.mapContainer}>
      <motion.div style={{ opacity: transitionY }} transition={{ ease: "easeInOut"}}>
        <M2 />
      </motion.div>
    </div>
  )
}

export default Map2
