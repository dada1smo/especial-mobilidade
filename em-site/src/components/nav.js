import React, { useState } from "react"
import onClickOutside from "react-onclickoutside"
import { motion, useViewportScroll, useTransform } from "framer-motion"
import navStyles from "./nav.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "../utils/fontawesome"
import Content from "../content/content.yaml"

function Nav() {
  const { scrollY } = useViewportScroll()
  const bgY = useTransform(
    scrollY,
    [0, 800, 960],
    [
      "rgba(129, 191, 226, 0)",
      "rgba(129, 191, 226, 0)",
      "rgba(129, 191, 226, 1)",
    ]
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
  const [navbarOpen, setNavbarOpen] = useState(false)
  const toggle = () => setNavbarOpen(!navbarOpen)
  Nav.handleClickOutside = () => setNavbarOpen(false)
  // if (navbarOpen) {
  //   document.body.style.overflow = "hidden"
  // } else { document.body.style.overflow = "auto" }

  return (
    <div className={navStyles.wrapper}>
      <div className={navStyles.topbar}>
        <motion.div
          className={navStyles.navContainer}
          style={{ backgroundColor: bgY, borderBottom: borderY }}
          transition={{ ease: "easeInOut" }}
        >
          <button onClick={toggle}>
            <FontAwesomeIcon icon="bars" className="fa-lg" />
          </button>
          <div className={navStyles.social}>
            <FontAwesomeIcon icon={["fab", "twitter"]} className="fa-lg" />
            <FontAwesomeIcon icon={["fab", "facebook"]} className="fa-lg" />
            <FontAwesomeIcon icon="envelope" className="fa-lg" />
          </div>
        </motion.div>
      </div>

      <div
        className={navStyles.fullOverlay}
        style={{
          backgroundColor: navbarOpen
            ? "rgba(0, 0, 0, 0.5)"
            : "rgba(0, 0, 0, 0)",
          height: navbarOpen ? "100%" : "auto",
          overflow: navbarOpen ? "hidden" : "auto",
        }}
      ></div>

      <motion.div
        className={navStyles.sidebar}
        animate={{ x: navbarOpen ? 0 : -350 }}
        transition={{ ease: "easeOut", duration: 0.3 }}
        initial={false}
      >
        <div className={navStyles.close}>
          <button onClick={toggle}>
            <FontAwesomeIcon icon="times" className="fa-lg" />
          </button>
        </div>
        <ul>
          <li>
            <a href="#intro" onClick={toggle}>Introdução</a>
          </li>
          <li>
            <a href="#s2" onClick={toggle}>{Content.s2.title}</a>
          </li>
          <li>
            <a href="#s3" onClick={toggle}>{Content.s3.title}</a>
          </li>
          <li>
            <a href="#s4" onClick={toggle}>{Content.s4.title}</a>
          </li>
          <li>
            <a href="#s5" onClick={toggle}>{Content.s5.title}</a>
          </li>
          <li>
            <a href="#s6" onClick={toggle}>{Content.s6.title}</a>
          </li>
        </ul>
      </motion.div>
    </div>
  )
}

const clickOutsideConfig = {
  handleClickOutside: () => Nav.handleClickOutside,
}

export default onClickOutside(Nav, clickOutsideConfig)
