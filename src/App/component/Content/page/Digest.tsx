import React from "react"

import {PageWithIconsScrollbar} from "../share"
import {TooltipFa, TooltipText} from "../share"
import {getRange, initInPageNavButtons, initIntObserver} from "@app/share"

export const Digest = (): React.ReactElement => {
  const [source, setSource] = React.useState<Source>([])

  React.useEffect((): (() => void) => {
    let mounted = true;

    (async () => {
      const res = await fetch("/digest.json")

      if (mounted) {
        const contentType = res.headers.get("content-type");
        if (contentType && contentType.indexOf("application/json") !== -1) {
           setSource(await res.json())
        }
      }
    })()

    return () => { mounted = false }
  }, [])

  const data = {
    icons: [
      <i className="fa-solid fa-user"></i>,
      <i className="fa-solid fa-users"></i>,
      <i className="fa-solid fa-earth-americas"></i>,
      <i className="fa-solid fa-plus"></i>,
      <i className="fa-solid fa-wand-magic-sparkles"></i>,
    ],
    content: {
      prelude: <Prelude />,
      sections: [
        renderCategoryTwoLevels(source[0]),
        renderCategoryTwoLevels(source[1]),
        renderCategoryTwoLevels(source[2]),
        renderCategoryTwoLevels(source[3]),
        renderCategoryOneLevel(source[4]),
      ]
    }
  }
  return <PageWithIconsScrollbar data={data} page="activity-digest" />
}

type Item = {
  date: string,
  title: string,
  format: string,
  length: string,
  link: string,
  review_short: string,
  review_ext: string,
}

type CategoryOneLevel = {
  header: string,
  items: [Item]
}
type CategoryTwoLevels = {
  header: string,
  items: [{
    header: string,
    items: [Item]
  }]
}

type Source = (CategoryOneLevel | CategoryTwoLevels | undefined)[]

const Prelude = (): React.ReactElement =>
  <>
    <br />
    Here is the list of pieces of media that align with my&nbsp;
    <TooltipText text="ideals">
      <ul>
        <li>Available digitally</li>
        <li>Available DRM-free or free of charge</li>
        <li>Can be consumed on FOSS operating systems (like Linux)</li>
        <li>Video games have to be open-source</li>
      </ul>
    </TooltipText>.
  </>

const renderItem = (x: Item, i: number = 0) =>
  <p key={i}>{x.date} — {x.link ? <a href={x.link}>{x.title}</a> : <>{x.title}</>} — {getFormatIcon(x.format)}{x.length && <>&ensp;{x.length}</>}{x.review_short && <>&ensp;<TooltipFa faclass="fa-regular fa-circle-question">{x.review_short}</TooltipFa></>}{x.review_ext && <>&ensp;<a href={x.review_ext} target="_blank" rel="noopener noreferrer"><i className="tooltip-fa fa-solid fa-arrow-up-right-from-square"></i></a></>}</p>

const renderCategoryOneLevel = (c: CategoryOneLevel | undefined) =>
  c === undefined ?
    <>Loading ...</>
  : <>
      <h2>{c.header}</h2>
      {
        c.items.map((s, i) => renderItem(s, i))
      }
    </>

const renderCategoryTwoLevels = (c: CategoryTwoLevels | undefined) =>
  c === undefined ?
    <>Loading ...</>
  : <>
      <h2>{c.header}</h2>
      {
        c.items.map((s, i) =>
          <section key={i}>
            <h3 className="highlight">{s.header}</h3>
            {
              s.items.map((x, j) => renderItem(x, j))
            }
          </section>
        )
      }
    </>

const getFormatIcon = (f: string) => {
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
