import React from "react"
import * as jsYaml from 'js-yaml'

import {TooltipFa} from "./Tooltip"
import {findObjValRecursive} from "@app/share"

type P = {
  content: unknown,
  keys: [string, string, string],
}
export const DisplayListItems = ({content, keys}: P): React.ReactElement =>
  <>{renderItems(content, keys)}</>

const getIcon = (x: string) => {
  switch(x) {
    case "book":
      return <i className="fa-solid fa-book"></i>
    case "course":
      return <i className="fa-solid fa-graduation-cap"></i>
    case "desktop":
      return <i className="fa-solid fa-computer"></i>
    case "gamepad":
      return <i className="fa-solid fa-gamepad"></i>
    case "image":
      return <i className="fa-regular fa-image"></i>
    case "laptop":
      return <i className="fa-solid fa-laptop"></i>
    case "linux":
      return <i className="fa-brands fa-linux"></i>
    case "mobile":
      return <i className="fa-solid fa-mobile-screen-button"></i>
    case "online":
      return <i className="fa-solid fa-wifi"></i>
    case "offline":
      return <i className="fa-solid fa-plane"></i>
    case "tablet":
      return <i className="fa-solid fa-tablet-button"></i>
    case "video":
      return <i className="fa-solid fa-film"></i>
    case "web":
      return <i className="fa-solid fa-globe"></i>
    default:
      return <></>
  }
}

const renderItems = (content: unknown, keys: string[]) => {
  const arr = findObjValRecursive(content, keys)

  if (arr === undefined) {
    return <p>Loading ...</p>
  } else if (arr === null) {
    return <p>&lt;no content&gt;</p>
  } else {
    if (Array.isArray(arr)) {
      return (
        <ul className="ul-more-space">
          {
            arr.map((x, i) => {
              let content

              if (x.date && x.title) {
                const title = x.link ? <a href={x.link}>{x.title}</a> : <>{x.title}</>
                const icon = x.icon ? <>&ensp;{getIcon(x.icon)}</> : <></>
                const dscp = x.dscp ? <> — {x.dscp}</> : <></>
                const stack = x.stack ? <> — <span className="highlight">{x.stack}</span></> : <></>
                const review_short = x.review_short ? <> <TooltipFa faclass="fa-regular fa-star-half-stroke">{x.review_short}</TooltipFa></> : <></>
                const review_ext = x.review_ext ? <>&ensp;<a href={x.review_ext} target="_blank" rel="noopener noreferrer"><i className="tooltip-fa fa-solid fa-arrow-up-right-from-square"></i></a></> : <></>
                content = <>{x.date} — {title}{icon}{dscp}{stack}{review_short}{review_ext}</>
              } else {
                content = <>&lt;date and/or title is missing&gt;</>
              }
              return <li key={i} className={x.abandoned === true ? "abandoned" : ""} aria-hidden={x.abandoned}>{content}</li>
            })
          }
        </ul>
      )
    } else {
      const props = keys.reduce((acc, cur) => {
        return acc + "[\"" + cur + "\"]"
      }, "")

      console.error("property " + props + " in", content, "must be an array")
      return <p>&lt;wrong format&gt;</p>
    }
  }
}
