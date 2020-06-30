import React from "react"
import Image from "./image"
import titleStyles from "./title.module.scss"

function Title(props) {

  return (
    <div className={titleStyles.titleContainer} id={props.id}>
      <div className={titleStyles.imgContainer}>
        <Image
          filename={"s2_title.png"}
          alt={"Lorem ipsum"}
        />
      </div>
      <h3>{props.title}</h3>
    </div>
  )
}

export default Title