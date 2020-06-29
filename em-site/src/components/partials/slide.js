import React from "react"
import contentStyles from "./content.module.scss"
import Parser from "html-react-parser"

function Slide(props) {
  const paragraphs = props.content
  const paragraphItems = paragraphs.map((paragraph, index) => (
    <p key={index}>{Parser(paragraph)}</p>
  ))
  return (
    <div className={contentStyles.contentContainer} id={props.id}>
      {paragraphItems}
    </div>
  )
}

export default Slide
