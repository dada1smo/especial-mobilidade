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
                fluid(maxWidth: 300) {
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

function SideImages(props) {
  const { scrollYProgress } = useViewportScroll()
  const transitionY = useTransform(
    scrollYProgress,
    [0.06, 0.065, 0.09, 0.095],
    [0, 1, 1, 0]
  )

  return (
    <div className={mapStyles.mapContainer}>
      <motion.div
        style={{ opacity: transitionY }}
        transition={{ ease: "easeInOut" }}
      >
        <div className={mapStyles.imgContainer}>
          <div className={mapStyles.col}>
            <div className={mapStyles.wrapper}>
              <Image filename={props.imgSrc} alt={"Lorem ipsum"} />
            </div>
            <small>JK e Lúcio Costa no território de Brasília (FONTE: ABC)</small>
          </div>
          <div className={mapStyles.col}>
            <div className={mapStyles.wrapper}>
              <Image filename={props.imgSrc2} alt={"Lorem ipsum"} />
            </div>
            <small>Oscar Niemeyer e Lúcio Costa no território de Brasília (FONTE: ABC)</small>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default SideImages
