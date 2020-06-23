import React from "react"
import { motion, useViewportScroll, useTransform } from "framer-motion"
import mapStyles from "./map.module.scss"
import M1 from "../../assets/img/m1.map.svg";

const Map1= () => {
  const { scrollY} = useViewportScroll()
  const transitionY = useTransform(scrollY, [0, 600, 800, 1100], [0, 0, 1, 1])

  return (
    <div className={mapStyles.mapContainer}>
      <motion.div style={{ opacity: transitionY }} transition={{ ease: "easeInOut"}}>
        <M1 />
      </motion.div>
    </div>
  )
}

export default Map1
