import React from "react"
import contentStyles from "./content.module.scss"

const C1 = () => {
  return (
    <div className={contentStyles.contentContainer} id="intro">
      <p>A cidade planejada em formato de avião é toda setorizada.</p>
      <p>
        Existe o setor de indústrias, o setor bancário, o setor hoteleiro,
        setores residenciais, setores comerciais, setores de mansões e assim por
        diante.
      </p>
    </div>
  )
}

export default C1
