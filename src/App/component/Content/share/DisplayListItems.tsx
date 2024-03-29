import React from "react"
import * as jsYaml from 'js-yaml'

import {TooltipFa} from "./Tooltip"
import {getFaClassName} from "./getFaClassName"
import {findObjValRecursive} from "@app/share"

type P = {
  content: unknown,
  keys: string[],
}
export const DisplayListItems = ({content, keys}: P): React.ReactElement =>
  <>{renderItems(content, keys)}</>

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
                const title = x.link ? <a href={x.link} target="_blank">{x.title}</a> : <>{x.title}</>
                const icon = x.icon ? <>&ensp;<i className={getFaClassName(x.icon)}></i></> : <></>
                const dscp = x.dscp ? <> — {x.dscp}</> : <></>
                const stack = x.stack ? <> — <span className="highlight">{x.stack}</span></> : <></>
                const review = x.review ? <> <TooltipFa faclass="fa-regular fa-star-half-stroke">{x.review}</TooltipFa></> : <></>
                const review_ext = x.review_ext ? <>&ensp;<a href={x.review_ext} target="_blank" rel="noopener noreferrer"><i className="tooltip-fa fa-solid fa-arrow-up-right-from-square"></i></a></> : <></>
                content = <>{x.date} — {title}{icon}{dscp}{stack}{review}{review_ext}</>
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
