import React from "react"
import ReactTooltip from "react-tooltip"

type P = {
  children: string,
  src: string,
}
export const ImageWithHoverEffect = (p: P): React.ReactElement =>
  <>
    <div className="wrapper">
      <span className="todo">
        <img data-tip data-for="computer" src={p.src} />
      </span>
    </div>
    <ReactTooltip className="tooltip" id="computer">{p.children}</ReactTooltip>
  </>
