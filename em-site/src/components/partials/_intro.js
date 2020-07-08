import React from "react"
import contentStyles from "./content.module.scss"
import Icon from "../../assets/img/icon.inline.svg"

const Intro = () => {
  return (
    <div className={contentStyles.contentContainer} id="intro">
      <Icon />
      <p>
        Ícone da arquitetura mundial e maior cidade do mundo construída no
        século XX, Brasília não se destaca apenas por esses títulos.
      </p>

      <p>
        A capital federal também chama atenção quando o assunto é transporte
        público: está no ranking dos{" "}
        <a
          href="https://www.expertmarket.co.uk/vehicle-tracking/best-and-worst-cities-for-commuting"
          target="_blank"
          rel="noreferrer"
        >
          10 piores sistemas do mundo
        </a>
        , de acordo com o instituto de pesquisa americano Expert Market. Esse é
        apenas um dos muitos traços de segregação social presentes antes mesmo
        da inauguração de Brasília.
      </p>
    </div>
  )
}

export default Intro
