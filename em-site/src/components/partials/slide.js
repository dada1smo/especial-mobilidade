import React from "react"
import contentStyles from "./content.module.scss"
import Parser from "html-react-parser"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import mapStyles from "../maps/map.module.scss"

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

function Slide(props) {
  const paragraphs = props.content
  const paragraphItems = paragraphs.map((paragraph, index) => (
    <p key={index}>{Parser(paragraph)}</p>
  ))
  return (
    <div className={contentStyles.contentContainer} id={props.id}>
      <div className={mapStyles.responsiveContainer}>
        <Image filename={props.imgSrc} alt={props.imgAlt} />
        <small>{props.credit}</small>
      </div>
      
      {paragraphItems}
    </div>
  )
}

export default Slide
