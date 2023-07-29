import React from "react"
import * as jsYaml from 'js-yaml'

import {TooltipFa} from "./Tooltip"
import {findObjValRecursive} from "@app/share"

type P = {
  content: unknown,
  keys: [string, string, string],
}
export const RenderCreatedApps = ({content, keys}: P): React.ReactElement =>
  <>{renderItems(content, keys)}</>

type AppItem = {
  date: string,
  title: string,
  link: string,
  dscp: string,
  type: string,
  stack: string,
  abandoned?: boolean,
}
type ContentItem = {
  date: string,
  title: string,
  link: string,
}

const isContentItem = (x: unknown): x is ContentItem =>
  typeof x === "object" && x !== null &&
  "date" in x && typeof x.date === "string" &&
  "title" in x && typeof x.title  === "string" &&
  "link" in x && typeof x.link === "string" &&
  !("stack" in x)

const isAppItem = (x: unknown): x is AppItem =>
  typeof x === "object" && x !== null &&
  "date" in x && typeof x.date === "string" &&
  "link" in x && typeof x.link === "string" &&
  "title" in x && typeof x.title  === "string" &&
  "dscp" in x && typeof x.dscp === "string" &&
  "type" in x && typeof x.type === "string" &&
  "stack" in x && typeof x.stack === "string" && (
    !("abandoned" in x) ||
    "abandoned" in x && typeof x.abandoned === "boolean"
  )

// TODO separate renderAppItems/ContentItems
const renderItems = (content: unknown, keys: string[]) => {
  const arr = findObjValRecursive(content, keys)

  if (arr === undefined) {
    return <p>Loading ...</p>
  } else if (arr === null) {
    const props = keys.reduce((acc, cur) => {
      return acc + "[\"" + cur + "\"]"
    }, "")

    console.error("property " + props + " not found in", content)
    return <p>&lt;Content not found&gt;</p>
  } else {
    if (Array.isArray(arr)) {
      return (
        <ul className="ul-more-space">
          {
            arr.map((x, i) => {
              let content

              if (isContentItem(x)) {
                content = <>{x.date} — <a href={x.link}>{x.title}</a></>
              } else if (isAppItem(x)) {
                content = <>{x.date} — <a href={x.link}>{x.title}</a>&ensp;<i className={x.type === "web" ? "fa-solid fa-globe" : "fa-solid fa-display"}></i> — {x.dscp} — <span className="highlight">{x.stack}</span></>
              } else {
                console.error("wrong format", x)
                content = <>&lt;wrong format&gt;</>
              }
              return <li key={i} className={x.abandoned ? "abandoned" : ""} aria-hidden={x.abandoned}>{content}</li>
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
