import React from "react"
import { motion, useViewportScroll, useTransform } from "framer-motion"
import progressStyles from "./progress.module.scss"

const Progress = () => {
  const { scrollYProgress } = useViewportScroll()
  const progressY = useTransform(
    scrollYProgress,
    [0, 1],
    ["0", "100%"]
  )

  return (
    <motion.div
      className={progressStyles.progressBar}
      style={{ width: progressY }}
      transition={{ ease: "easeInOut" }}
    ></motion.div>
  )
}

export default Progress
