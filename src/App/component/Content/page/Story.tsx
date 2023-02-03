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

import {initInPageNavButtons, initIntObserver} from 'src/App/share/general'

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
    <div className="vsplit">
      <div className="vsplit__left">
        <button className="vsplit__icon" id={`btn-${page}-child`}>
          <i className="fa-solid fa-baby"></i>
        </button>

        <button className="vsplit__icon" id={`btn-${page}-teen`}>
          <i className="fa-solid fa-child"></i>
        </button>

        <button className="vsplit__icon" id={`btn-${page}-bachelor`}>
          <i className="fa-solid fa-graduation-cap"></i>
        </button>

        <button className="vsplit__icon" id={`btn-${page}-beforemaster`}>
          <i className="fa-solid fa-arrows-left-right-to-line"></i>
        </button>

        <button className="vsplit__icon" id={`btn-${page}-master`}>
          <i className="fa-solid fa-graduation-cap"></i>
        </button>

        <button className="vsplit__icon" id={`btn-${page}-workgermany`}>
          <i className="fa-solid fa-briefcase"></i>
        </button>

        <button className="vsplit__icon" id={`btn-${page}-voluntaryunemployment`}>
          <i className="fa-solid fa-arrow-trend-down"></i>
        </button>

        <button className="vsplit__icon" id={`btn-${page}-realization`}>
          <i className="fa-solid fa-lightbulb"></i>
        </button>

        <button className="vsplit__icon" id={`btn-${page}-findwork`}>
          <i className="fa-solid fa-magnifying-glass-dollar"></i>
        </button>
      </div>

      <div className="vsplit__right">
        <p>I don't care if anyone reads it <i className="fa-regular fa-face-grin-tears"></i>. This should help me remember my past.</p>

        <hr />

        <section id={`section-${page}-child`}>
          <Child />
        </section>

        <hr />

        <section id={`section-${page}-teen`}>
          <Teen />
        </section>

        <hr />

        <section id={`section-${page}-bachelor`}>
          <Bachelor />
        </section>

        <hr />

        <section id={`section-${page}-beforemaster`}>
          <BeforeMaster />
        </section>

        <hr />

        <section id={`section-${page}-master`}>
          <Master />
        </section>

        <hr />

        <section id={`section-${page}-workgermany`}>
          <WorkGermany />
        </section>

        <hr />

        <section id={`section-${page}-voluntaryunemployment`}>
          <VoluntaryUnemployment />
        </section>

        <hr />

        <section id={`section-${page}-realization`}>
          <Realization />
        </section>

        <hr />

        <section id={`section-${page}-findwork`}>
          <FindWork />
        </section>
      </div>
    </div>
  )
}
