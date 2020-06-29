import React from "react"
import titleStyles from "./title.module.scss"

function Title(props) {
  return (
    <div className={titleStyles.titleContainer} id={props.id}>
      <img
        title={props.imgTitle}
        alt={props.imgAlt}
        src={props.imgSrc}
      />
      <h3>{props.title}</h3>
    </div>
  )
}

export default Title
