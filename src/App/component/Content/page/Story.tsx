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
    <div id="about-story" className="vsplit">
      <div className="vsplit__left">
        <button className="vsplit__icon" id="btn-about-story-child">
          <i className="fa-solid fa-baby"></i>
        </button>

        <button className="vsplit__icon" id="btn-about-story-teen">
          <i className="fa-solid fa-child"></i>
        </button>

        <button className="vsplit__icon" id="btn-about-story-bachelor">
          <i className="fa-solid fa-graduation-cap"></i>
        </button>

        <button className="vsplit__icon" id="btn-about-story-beforemaster">
          <i className="fa-solid fa-arrows-left-right-to-line"></i>
        </button>

        <button className="vsplit__icon" id="btn-about-story-master">
          <i className="fa-solid fa-graduation-cap"></i>
        </button>

        <button className="vsplit__icon" id="btn-about-story-workgermany">
          <i className="fa-solid fa-briefcase"></i>
        </button>

        <button className="vsplit__icon" id="btn-about-story-voluntaryunemployment">
          <i className="fa-solid fa-arrow-trend-down"></i>
        </button>

        <button className="vsplit__icon" id="btn-about-story-realization">
          <i className="fa-solid fa-lightbulb"></i>
        </button>

        <button className="vsplit__icon" id="btn-about-story-findwork">
          <i className="fa-solid fa-magnifying-glass-dollar"></i>
        </button>
      </div>

      <div className="vsplit__right">
        <p>I don't care if anyone reads it <i className="fa-regular fa-face-grin-tears"></i>. This should help me remember my past.</p>
        <hr />
        <Child part="about-story-child" />
        <hr />
        <Teen part="about-story-teen" />
        <hr />
        <Bachelor part="about-story-bachelor" />
        <hr />
        <BeforeMaster part="about-story-beforemaster" />
        <hr />
        <Master part="about-story-master" />
        <hr />
        <WorkGermany part="about-story-workgermany" />
        <hr />
        <VoluntaryUnemployment part="about-story-voluntaryunemployment" />
        <hr />
        <Realization part="about-story-realization" />
        <hr />
        <FindWork part="about-story-findwork" />
      </div>
    </div>
  )
}
