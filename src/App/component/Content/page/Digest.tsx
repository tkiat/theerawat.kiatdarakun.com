import React from "react"

import {TooltipFa, TooltipFaWithDelay, TooltipText, TooltipTextWithDelay} from "@component/Content/share"
import {initInPageNavButtons, initIntObserver} from "@share/general"

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

const renderCategory = (cat: CategoryProps) =>
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
    <div className="no-split">Loading ...</div> :
    <div className="split">
      <div className="split__status">
        <button className="split__icon" id={`btn-${page}-0`}>
          <i className="fa-solid fa-user"></i>
        </button>

        <button className="split__icon" id={`btn-${page}-1`}>
          <i className="fa-solid fa-users"></i>
        </button>

        <button className="split__icon" id={`btn-${page}-2`}>
          <i className="fa-solid fa-earth-americas"></i>
        </button>

        <button className="split__icon" id={`btn-${page}-3`}>
          <i className="fa-solid fa-plus"></i>
        </button>

        <button className="split__icon" id={`btn-${page}-4`}>
          <i className="fa-solid fa-wand-magic-sparkles"></i>
        </button>
      </div>

      <div className="split__content">
        <br />
        Here is the list of pieces of media that align with my&nbsp;
        <TooltipText text="ideals">
          <ul>
            <li>Available digitally</li>
            <li>Available DRM-free or free of charge</li>
            <li>Can be consumed on FOSS operating systems (like Linux)</li>
          </ul>
        </TooltipText>.

        <section id={`section-${page}-0`}>
          {renderCategory(items[0])}
        </section>

        <hr />

        <section id={`section-${page}-1`}>
          {renderCategory(items[1])}
        </section>

        <hr />

        <section id={`section-${page}-2`}>
          {renderCategory(items[2])}
        </section>

        <hr />

        <section id={`section-${page}-3`}>
          {renderCategory(items[3])}
        </section>

        <hr />

        <section id={`section-${page}-4`}>
          {renderCategory(items[4])}
        </section>
      </div>
    </div>
}
