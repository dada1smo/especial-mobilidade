import React from "react"
import { motion, useViewportScroll, useTransform } from "framer-motion"
import mapStyles from "./map.module.scss"
import M2 from "../../assets/img/m2.map.svg";

const Map2= () => {
  const { scrollY} = useViewportScroll()
  const transitionY = useTransform(scrollY, [1300, 1500, 1700], [0, 1, 1])

  return (
    <div className={mapStyles.mapContainer}>
      <motion.div style={{ opacity: transitionY }} transition={{ ease: "easeInOut"}}>
        <M2 />
      </motion.div>
    </div>
  )
}

export default Map2
