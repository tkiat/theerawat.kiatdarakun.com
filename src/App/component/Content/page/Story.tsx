import React from "react"

import {Child} from "./Story/00-Child"
import {Teen} from "./Story/01-Teen"
import {Bachelor} from "./Story/02-Bachelor"
import {BeforeMaster} from "./Story/03-BeforeMaster"
import {Master} from "./Story/04-Master"
import {WorkGermany} from "./Story/05-WorkGermany"
import {VoluntaryUnemployment} from "./Story/06-VoluntaryUnemployment"
import {Realization} from "./Story/07-Realization"
import {FindWork} from "./Story/08-FindWork"

import {initInPageNavButtons, initIntObserver} from "@app/share"

const page = "about-story"

export const Story = (): React.ReactElement => {
  React.useEffect(() => {
    initInPageNavButtons(document.querySelectorAll(`[id^="btn-${page}"]`))

    const sections = document.querySelectorAll(`[id^="section-${page}"]`)
    const observer = initIntObserver(sections)

    return () => {
      sections.forEach(section => {
        observer.unobserve(section)
      })
    }
  }, [])

  return (
    <div className="split-status">
      <div className="split-status__status">
        <button className="split-status__icon" id={`btn-${page}-00`}>
          <i className="fa-solid fa-baby"></i>
        </button>

        <button className="split-status__icon" id={`btn-${page}-01`}>
          <i className="fa-solid fa-child"></i>
        </button>

        <button className="split-status__icon" id={`btn-${page}-02`}>
          <i className="fa-solid fa-graduation-cap"></i>
        </button>

        <button className="split-status__icon" id={`btn-${page}-03`}>
          <i className="fa-solid fa-arrows-left-right-to-line"></i>
        </button>

        <button className="split-status__icon" id={`btn-${page}-04`}>
          <i className="fa-solid fa-graduation-cap"></i>
        </button>

        <button className="split-status__icon" id={`btn-${page}-05`}>
          <i className="fa-solid fa-briefcase"></i>
        </button>

        <button className="split-status__icon" id={`btn-${page}-06`}>
          <i className="fa-solid fa-arrow-trend-down"></i>
        </button>

        <button className="split-status__icon" id={`btn-${page}-07`}>
          <i className="fa-solid fa-lightbulb"></i>
        </button>

        <button className="split-status__icon" id={`btn-${page}-08`}>
          <i className="fa-solid fa-magnifying-glass-dollar"></i>
        </button>
      </div>

      <div className="split-status__content">
        <p>I don't care if anyone reads it <i className="fa-regular fa-face-grin-tears"></i>. This should help me remember my past.</p>

        <section id={`section-${page}-00`}>
          <Child />
        </section>

        <hr />

        <section id={`section-${page}-01`}>
          <Teen />
        </section>

        <hr />

        <section id={`section-${page}-02`}>
          <Bachelor />
        </section>

        <hr />

        <section id={`section-${page}-03`}>
          <BeforeMaster />
        </section>

        <hr />

        <section id={`section-${page}-04`}>
          <Master />
        </section>

        <hr />

        <section id={`section-${page}-05`}>
          <WorkGermany />
        </section>

        <hr />

        <section id={`section-${page}-06`}>
          <VoluntaryUnemployment />
        </section>

        <hr />

        <section id={`section-${page}-07`}>
          <Realization />
        </section>

        <hr />

        <section id={`section-${page}-08`}>
          <FindWork />
        </section>
      </div>
    </div>
  )
}
