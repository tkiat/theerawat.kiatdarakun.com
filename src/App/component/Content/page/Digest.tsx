import React from 'react'

import {TooltipFa, TooltipFaWithDelay, TooltipText, TooltipTextWithDelay} from "../share/Tooltip"
import {initInPageNavButtons, initIntObserver} from 'src/App/share/general'

type ItemProps = [
  {
    category: string,
    items: [
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

const renderItems = (categories: ItemProps) =>
  categories.map((x, i) => {
    return (
      <section id={`section-${page}-${i}`} key={i}>
        <h2>{x.category}</h2>
        {x.items.map((y, j) =>
          <p key={j}>{y.date} — {y.scope} &gt; {y.category} — {y.link ? <a href={y.link}>{y.title}</a> : <>{y.title}</>} — {renderFormatIcon(y.format)}{y.length && <>&ensp;{y.length}</>}{y.review_short && <>&ensp;<TooltipFa faclass="fa-regular fa-circle-question">{y.review_short}</TooltipFa></>}{y.review_ext && <>&ensp;<a href={y.review_ext} target="_blank" rel="noopener noreferrer"><i className="tooltip-fa fa-solid fa-arrow-up-right-from-square"></i></a></>}
          </p>
        )}
      </section>
    )
  })

const page = "activity-digest"
let observer: IntersectionObserver, sections: NodeListOf<Element>

export const Digest = (): React.ReactElement => {

  const [items, setItems] = React.useState()

  React.useEffect((): (() => void) => {
    let mounted = true;

    (async () => {
      const raw = await fetch("/digest.json")

      if (mounted) {
        setItems(await raw.json())

        initInPageNavButtons(document.querySelectorAll(`[id^="btn-${page}"]`))
        sections = document.querySelectorAll(`[id^="section-${page}"]`)
        observer = initIntObserver(sections)
      }
    })()

    return () => {
      mounted = false
      sections.forEach(section => {
        observer.unobserve(section)
      })
    }
  }, [])

  return items === undefined ?
    <>Loading ...</> :
    <div className="vsplit">
      <div className="vsplit__left">
        <button className="vsplit__icon" id={`btn-${page}-0`}>
          <i className="fa-solid fa-user"></i>
        </button>

        <button className="vsplit__icon" id={`btn-${page}-1`}>
          <i className="fa-solid fa-users"></i>
        </button>

        <button className="vsplit__icon" id={`btn-${page}-2`}>
          <i className="fa-solid fa-earth-americas"></i>
        </button>

        <button className="vsplit__icon" id={`btn-${page}-3`}>
          <i className="fa-solid fa-plus"></i>
        </button>

        <button className="vsplit__icon" id={`btn-${page}-4`}>
          <i className="fa-solid fa-wand-magic-sparkles"></i>
        </button>
      </div>

      <div className="vsplit__right vsplit__right--border">
        <br />
        I create this page for the sake of memory retention. I only list media that aligns with my&nbsp;
        <TooltipText text="ideals">
          <ol>
            <li>Available digitally</li>
            <li>Available DRM-free or free of charge</li>
            <li>Can be consumed on FOSS operating systems (like Linux)</li>
          </ol>
        </TooltipText>

        <p>Date — Scope &gt; Category — Title — Format&ensp;Length&ensp;Review/Summary</p>

        <hr />

        {renderItems(items)}
      </div>
    </div>
}
