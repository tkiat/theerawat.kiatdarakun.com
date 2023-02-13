import React from "react"
import ReactTooltip from "react-tooltip"
import {TooltipText} from "./Tooltip"

type P = {
  children: string,
  src: string,
  label: string,
  height: string,
  width: string,
}
export const FigureOptionalTooltip = (p: P): React.ReactElement => p.children ?
  <figure className="fig-tooltip">
    <img width={p.width} height={p.height} src={p.src} alt="broken" />
    <figcaption className="fig-tooltip__caption">
      <TooltipText text={p.label}>
        {p.children}
      </TooltipText>
    </figcaption>
  </figure>
  :
  <figure className="fig-tooltip">
    <img width={p.width} height={p.height} src={p.src} alt="broken" />
    <figcaption className="fig-tooltip__caption">{p.label}</figcaption>
  </figure>
