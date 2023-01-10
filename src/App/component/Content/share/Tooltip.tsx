import React from "react"
import ReactTooltip, {TooltipProps} from "react-tooltip"
import {v4 as uuidv4} from "uuid"

type TooltipTextProps = TooltipProps & {text: string}
type TooltipFaProps = TooltipProps & {faclass: string}

export const TooltipText = (p: TooltipTextProps): React.ReactElement => {
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

export const TooltipTextWithDelay = (p: TooltipTextProps): React.ReactElement =>
  <TooltipText
    className="tooltip tooltip--withdelay"
    delayHide={500}
    delayShow={500}
    delayUpdate={500}
    effect="solid"
    {...p}
  >
    {p.children}
  </TooltipText>

export const TooltipFa = (p: TooltipFaProps): React.ReactElement => {
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

export const TooltipFaWithDelay = (p: TooltipFaProps): React.ReactElement =>
  <TooltipFa
    className="tooltip tooltip--withdelay"
    delayHide={500}
    delayShow={500}
    delayUpdate={500}
    effect="solid"
    {...p}
  >
    {p.children}
  </TooltipFa>
