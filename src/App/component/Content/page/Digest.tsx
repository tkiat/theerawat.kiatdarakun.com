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
      <section key={i}>
        <h2>{x.category}</h2>
        {x.items.map((y, j) =>
          <p key={j}>{y.date} — {y.scope} &gt; {y.category} — {y.link ? <a href={y.link}>{y.title}</a> : <>{y.title}</>} — {renderFormatIcon(y.format)}{y.length && <>&ensp;{y.length}</>}{y.review_short && <>&ensp;<TooltipFa faclass="fa-regular fa-circle-question">{y.review_short}</TooltipFa></>}{y.review_ext && <>&ensp;<a href={y.review_ext} target="_blank" rel="noopener noreferrer"><i className="tooltip-fa fa-solid fa-arrow-up-right-from-square"></i></a></>}
          </p>
        )}
      </section>
    )
  })

const page = "activity-digest"

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
    <div className="vsplit">
      <div className="vsplit__left">
        <button className="vsplit__icon" id={`btn-${page}-individual`}>
          <i className="fa-solid fa-user"></i>
        </button>

        <button className="vsplit__icon" id={`btn-${page}-humans`}>
          <i className="fa-solid fa-users"></i>
        </button>

        <button className="vsplit__icon" id={`btn-${page}-earth`}>
          <i className="fa-solid fa-earth-americas"></i>
        </button>

        <button className="vsplit__icon" id={`btn-${page}-nonfiction`}>
          <i className="fa-solid fa-plus"></i>
        </button>

        <button className="vsplit__icon" id={`btn-${page}-fiction`}>
          <i className="fa-solid fa-wand-magic-sparkles"></i>
        </button>
      </div>

      <div className="vsplit__right vsplit__right--border">
        <section>
          I select only pieces of media that align with my philosophical&nbsp;
          <TooltipText text="ideals">
            <ol>
              <li>Available digitally</li>
              <li>Available DRM-free or free of charge</li>
              <li>Can be Consumed on FOSS operating systems (like Linux)</li>
            </ol>
          </TooltipText> and categorize them into 5 scopes (mind, person, human society, nonhuman, and the earth). This list should help me recall information as time goes by.
        </section>

        <section>
          <p>Date — Scope &gt; Category — Title — Format&ensp;Length&ensp;Review/Summary</p>

          <hr />

          {renderItems(items)}
        </section>
      </div>
    </div>
}
