import React from "react"

import {initInPageNavButtons, initIntObserver} from "@app/share"

type P = {
  data: {
    icons: React.ReactElement[],
    content: {
      prelude: React.ReactElement,
      sections: React.ReactElement[],
    }
  },
  page: string,
}
export const SplitContent = ({data, page}: P): React.ReactElement => {
  let observer: IntersectionObserver, sectionElems: NodeListOf<Element>

  React.useEffect((): (() => void) => {
    (async () => {
      initInPageNavButtons(document.querySelectorAll(`[id^="btn-${page}"]`))
      sectionElems = document.querySelectorAll(`[id^="section-${page}"]`)
      observer = initIntObserver(sectionElems)
    })()

    return () => {
      sectionElems?.forEach(section => { observer.unobserve(section) })
    }
  }, [])

  return (
    <div className="split-status">
      <div className="split-status__status">
        {
          data.icons.map((x, i) =>
            <button key={i} className="split-status__icon" id={`btn-${page}-${i}`}>
              {x}
            </button>
          )
        }
      </div>

      <div className="split-status__content">
        <section>
          {data.content.prelude}
        </section>

        {
          data.content.sections.map((x, i) =>
            <React.Fragment key={i}>
              <hr />
              <section id={`section-${page}-${i}`}>
                {x}
              </section>
            </React.Fragment>
          )
        }
      </div>
    </div>
  )
}
