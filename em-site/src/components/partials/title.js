import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import titleStyles from "./title.module.scss"

const Image = (props) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid(maxWidth: 200) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}

    render={(data) => {
      const image = data.images.edges.find(n => {
        return n.node.relativePath.includes(props.filename);
      });
      if (!image) { return null; }
      
      const imageFluid = image.node.childImageSharp.fluid;
      return (
        <Img
          alt={props.alt}
          fluid={imageFluid}
        />
      );
    }}
  />
)

function Title(props) {

  return (
    <div className={titleStyles.titleContainer} id={props.id}>
      <div className={titleStyles.imgContainer}>
        <Image
          filename={props.imgSrc}
          alt={"Lorem ipsum"}
        />
      </div>
      <h3>{props.title}</h3>
    </div>
  )
}

export default Title