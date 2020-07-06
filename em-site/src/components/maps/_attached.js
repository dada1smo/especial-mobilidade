import React from "react"
import { motion, useViewportScroll, useTransform } from "framer-motion"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import mapStyles from "./map.module.scss"

const Image = props => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const image = data.images.edges.find(n => {
        return n.node.relativePath.includes(props.filename)
      })
      if (!image) {
        return null
      }

      const imageFluid = image.node.childImageSharp.fluid
      return <Img alt={props.alt} fluid={imageFluid} />
    }}
  />
)

function Attached(props) {
  const { scrollYProgress } = useViewportScroll()
  const scrollPoints = props.scrollPosition
  const opacityValue = props.scrollValue
  const transitionY = useTransform(scrollYProgress, scrollPoints, opacityValue)

  return (
    <div className={mapStyles.mapContainer}>
      <motion.div
        style={{ opacity: transitionY }}
        transition={{ ease: "easeInOut" }}
      >
        <div className={mapStyles.attContainer}>
          <Image filename={props.imgSrc} alt={props.imgAlt} />
          <small>{props.credit}</small>
        </div>
      </motion.div>
    </div>
  )
}

export default Attached
