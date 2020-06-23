import React from "react"
import { motion, useViewportScroll, useTransform } from "framer-motion"
import navStyles from "./nav.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "../utils/fontawesome"

const Nav = () => {
  const { scrollY } = useViewportScroll()
  const bgY = useTransform(
    scrollY,
    [0, 800, 960],
    ["rgba(129, 191, 226, 0)", "rgba(129, 191, 226, 0)", "rgba(129, 191, 226, 1)"]
  )
  const borderY = useTransform(
    scrollY,
    [0, 800, 960],
    [
      "3px solid rgba(253, 202, 64, 0)",
      "3px solid rgba(253, 202, 64, 0)",
      "3px solid rgba(253, 202, 64, 1)",
    ]
  )

  return (
    <div className={navStyles.wrapper}>
      <motion.div
        className={navStyles.navContainer}
        style={{ backgroundColor: bgY, borderBottom: borderY }}
        transition={{ ease: "easeInOut" }}
      >
        <FontAwesomeIcon icon="bars" className="fa-lg" />
        <div className={navStyles.social}>
          <FontAwesomeIcon icon={["fab", "twitter"]} className="fa-lg" />
          <FontAwesomeIcon icon={["fab", "facebook"]} className="fa-lg" />
          <FontAwesomeIcon icon="envelope" className="fa-lg" />
        </div>
      </motion.div>
    </div>
  )
}

export default Nav
