import React from "react"
import ReactTooltip from "react-tooltip"

export const MyTooltip = (props: any): React.ReactElement =>
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

export const MyTooltipWithDelay = (props: any): React.ReactElement =>
  <MyTooltip delayHide={500} delayUpdate={500} {...props}>
    {props.children}
  </MyTooltip>
