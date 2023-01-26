import React from 'react'

import {TooltipFa, TooltipFaWithDelay, TooltipText, TooltipTextWithDelay} from "../share/Tooltip"

import {Religion} from "./Digest/Religion"
import {Software} from "./Digest/Software"

type ItemProps = [
  {
    date: string,
    scope: string,
    category: string,
    title: string,
    format: string,
    length: string,
    link: string,
    review_short: string,
    review_ext: string,
  }
]

const renderFormatIcon = (f: string) => {
  switch(f) {
    case "book":
      return <i className="fa-solid fa-book"></i>
    case "video":
      return <i className="fa-solid fa-film"></i>
    case "course":
      return <i className="fa-solid fa-graduation-cap"></i>
    case "image":
      return <i className="fa-regular fa-image"></i>
    default:
      return <></>
  }
}

const renderItems = (items: ItemProps) =>
  <section>
    <ul>
      {items.map((x, i) => <li key={i}>{x.date} — {x.scope} &gt; {x.category} — {x.link ? <a href={x.link}>{x.title}</a> : <>{x.title}</>} — {renderFormatIcon(x.format)}{x.length && <>&ensp;{x.length}</>}{x.review_short && <>&ensp;<TooltipFa faclass="fa-regular fa-circle-question">{x.review_short}</TooltipFa></>}{x.review_ext && <>&ensp;<a href={x.review_ext}><i className="tooltip-fa fa-solid fa-arrow-up-right-from-square"></i></a></>}</li>)}
    </ul>
  </section>

export const Digest = (): React.ReactElement => {

  const [items, setItems] = React.useState()

  React.useEffect((): (() => void) => {
    let mounted = true;

    (async () => {
      const raw = await fetch("/digest.json")

      if (mounted) {
        setItems(await raw.json())
      }
    })()

    return () => mounted = false
  }, [])

  return items === undefined ?
    <>Loading ...</> :
    <div className="page-digest">
      <br />
      <div>
        I list only some media that follow these&nbsp;
        <TooltipText text="requirements">
          <ol>
            <li>Available digitally</li>
            <li>Available DRM-free or free of charge</li>
            <li>Compatible with FOSS operating systems (like Linux)</li>
          </ol>
        </TooltipText>.
      </div>

      <hr />

      <p>Date — Scope &gt; Category — Title — Format&ensp;Length&ensp;Review/Summary</p>
      {renderItems(items)}
    </div>
}
