import React from "react"
import ReactTooltip from "react-tooltip"

// TODO move css here
export const MyReactTooltip = (props: any): React.ReactElement =>
  <>
    <span className="tooltip-front" data-tip data-for={props.id}>{props.text}</span>
    <ReactTooltip
      className="tooltip"
      arrowColor="transparent"
      overridePosition={({left, top}, _e, _t, _) => ({
        top,
        left: Math.max(left, 0),
      })}
      {...props}
    >
      {props.children}
    </ReactTooltip>
  </>
