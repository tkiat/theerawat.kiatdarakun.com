import React from "react"
import ReactTooltip, {TooltipProps} from "react-tooltip"
import {v4 as uuidv4} from "uuid"

type MyTooltipProps = TooltipProps & {text: string}
type FaTooltipProps = TooltipProps & {faclass: string}

export const MyTooltip = (p: MyTooltipProps): React.ReactElement => {
  const id = uuidv4()
  return (
    <>
      <span className="tooltip-front" data-tip data-for={id}>{p.text}</span>
      <ReactTooltip
        className="tooltip"
        arrowColor="transparent"
        wrapper="span"
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

export const FaTooltip = (p: FaTooltipProps): React.ReactElement => {
  const id = uuidv4()
  return (
    <>
      <span data-tip data-for={id}><i className={"tooltip-fa " + p.faclass}></i></span>
      <ReactTooltip
        className="tooltip"
        arrowColor="transparent"
        wrapper="span"
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

export const FaTooltipWithDelay = (p: FaTooltipProps): React.ReactElement =>
  <FaTooltip
    className="tooltip tooltip--withdelay"
    delayHide={500}
    delayShow={500}
    delayUpdate={500}
    effect="solid"
    {...p}
  >
    {p.children}
  </FaTooltip>
