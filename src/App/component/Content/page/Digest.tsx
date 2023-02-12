import React from "react"

import {SplitContent} from "../share/SplitContent"
import {TooltipFa, TooltipText} from "../share"
import {getRange, initInPageNavButtons, initIntObserver} from "@app/share"

type CategoryProps = {
  header: string,
  items: [
    {
      header: string,
      items: [
        {
          date: string,
          title: string,
          format: string,
          length: string,
          link: string,
          review_short: string,
          review_ext: string,
        }
      ]
    }
  ]
}
type Items = CategoryProps[]

export const Digest = (): React.ReactElement => {
  const [items, setItems] = React.useState<Items>([])

  React.useEffect((): (() => void) => {
    let mounted = true;

    (async () => {
      const res = await fetch("/digest.json")

      if (mounted) {
        const contentType = res.headers.get("content-type");
        if (contentType && contentType.indexOf("application/json") !== -1) {
           setItems(await res.json())
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
        renderSection(items[0]),
        renderSection(items[1]),
        renderSection(items[2]),
        renderSection(items[3]),
        renderSection(items[4]),
      ]
    }
  }
  return <SplitContent data={data} page="activity-digest" />
}

const Prelude = (): React.ReactElement =>
  <>
    <br />
    Here is the list of pieces of media that align with my&nbsp;
    <TooltipText text="ideals">
      <ul>
        <li>Available digitally</li>
        <li>Available DRM-free or free of charge</li>
        <li>Can be consumed on FOSS operating systems (like Linux)</li>
      </ul>
    </TooltipText>.
  </>

const renderSection = (cat: CategoryProps | undefined) => cat === undefined ?
  <>Loading ...</> :
  <>
    <h2>{cat.header}</h2>
    {
      cat.items.map((sub, j) =>
        <section key={j}>
          <h3 className="highlight">{sub.header}</h3>
          {
            sub.items.map((y, k) =>
              <p key={k}>{y.date} — {y.link ? <a href={y.link}>{y.title}</a> : <>{y.title}</>} — {getFormatIcon(y.format)}{y.length && <>&ensp;{y.length}</>}{y.review_short && <>&ensp;<TooltipFa faclass="fa-regular fa-circle-question">{y.review_short}</TooltipFa></>}{y.review_ext && <>&ensp;<a href={y.review_ext} target="_blank" rel="noopener noreferrer"><i className="tooltip-fa fa-solid fa-arrow-up-right-from-square"></i></a></>}</p>
            )
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
