import React from "react"
import ReactTooltip, {TooltipProps} from "react-tooltip"
import {v4 as uuidv4} from "uuid"

type MyTooltipProps = TooltipProps & {text: string}

export const MyTooltip = (p: MyTooltipProps): React.ReactElement => {
  const id = uuidv4()
  return (
    <>
      <span className="tooltip-front" data-tip data-for={id}>{p.text}</span>
      <ReactTooltip
        className="tooltip"
        arrowColor="transparent"
        overridePosition={({left, top}, _e, _t, _) => ({
          top,
          left: Math.max(left, 0),
        })}
        id={id}
        {...p}
      >
        {p.children}
      </ReactTooltip>
    </>
  )
}

export const MyTooltipWithDelay = (p: MyTooltipProps): React.ReactElement =>
  <MyTooltip
    className="tooltip tooltip--withdelay"
    delayHide={500}
    delayShow={500}
    delayUpdate={500}
    effect="solid"
    {...p}
  >
    {p.children}
  </MyTooltip>
