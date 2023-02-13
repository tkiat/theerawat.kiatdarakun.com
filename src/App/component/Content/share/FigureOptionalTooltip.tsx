import React from "react"
import ReactTooltip from "react-tooltip"
import {TooltipText, TooltipFa} from "./Tooltip"

type P = {
  src: string,
  width: string,
  label?: string,
  children?: string,
}
export const FigureOptionalTooltip = (p: P): React.ReactElement => {
  let caption
  if (p.children) {
    caption = p.label ?
      <TooltipText text={p.label}>
        {p.children}
      </TooltipText>
    : <TooltipFa faclass="fa-solid fa-circle-question">
        {p.children}
      </TooltipFa>
  } else {
    caption = p.label ? <>{p.label}</> : <>&nbsp;</>
  }

  return (
    <figure className="fig-tooltip" style={{width: p.width}}>
      <img src={p.src} alt="broken" />
      <figcaption className="fig-tooltip__caption">{caption}</figcaption>
    </figure>
  )
}
