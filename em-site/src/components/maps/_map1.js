import React from "react"
import { motion, useViewportScroll, useTransform } from "framer-motion"
import mapStyles from "./map.module.scss"
import M1 from "../../assets/img/m1.map.svg";

const Map1 = () => {
  const { scrollYProgress } = useViewportScroll()
  const transitionY = useTransform(scrollYProgress, [0.015, 0.02, 0.03, 0.06], [0, 1, 1, 0])

  return (
    <div className={mapStyles.mapContainer}>
      <motion.div style={{ opacity: transitionY }} transition={{ ease: "easeInOut"}}>
        <M1 />
      </motion.div>
    </div>
  )
}

export default Map1
