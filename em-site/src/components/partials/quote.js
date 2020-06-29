import React from "react"
import contentStyles from "./content.module.scss"
import Parser from "html-react-parser"

function Quote(props) {
  return (
    <div>
      <div className={contentStyles.quoteContainer} id={props.id}>
        <h4>{props.quote}</h4>
        <h5>{Parser(props.source)}</h5>
      </div>
    </div>
  )
}

export default Quote
