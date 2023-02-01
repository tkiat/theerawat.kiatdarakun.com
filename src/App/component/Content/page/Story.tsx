import React from "react"

import {Child} from "./Story/00-Child"
import {Teen} from "./Story/01-Teen"
import {Undergraduate} from "./Story/02-Undergraduate"
import {BeforeMaster} from "./Story/03-BeforeMaster"
import {Master} from "./Story/04-Master"
import {WorkGermany} from "./Story/05-WorkGermany"
import {VoluntaryUnemployment} from "./Story/06-VoluntaryUnemployment"
import {Realization} from "./Story/07-Realization"

import {TooltipText} from "../share/Tooltip"


export const Story = (): React.ReactElement => {
  React.useEffect((): (() => void) => {
    const sections = [...document.querySelectorAll('[data-section]')]

    const onIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        const t = entry.target
        if (t instanceof HTMLElement) {
          const e = document.getElementById(t.dataset.section + "-btn")
          if (e) {
            e.style.opacity = entry.intersectionRatio > 0 ? "1" : "0.2"
          }
        }
      })
    }

    const observer = new IntersectionObserver(onIntersect, {
      rootMargin: "0px",
      threshold: 0,
    })

    sections.forEach(section => {
      observer.observe(section)
    })

    return () => {
      sections.forEach(section => {
        observer.unobserve(section)
      })
    }
  }, [])

  return (
    <div className="vsplit">
      <div className="vsplit__left">
        <a className="vsplit__prog" id="story-child-btn" href="#story-child"></a>
        <a className="vsplit__prog" id="story-teen-btn" href="#story-teen"></a>
        <a className="vsplit__prog" id="story-undergraduate-btn" href="#story-undergraduate"></a>
        <a className="vsplit__prog" id="story-beforemaster-btn" href="#story-beforemaster"></a>
        <a className="vsplit__prog" id="story-master-btn" href="#story-master"></a>
        <a className="vsplit__prog" id="story-workgermany-btn" href="#story-workgermany"></a>
        <a className="vsplit__prog" id="story-voluntaryunemployment-btn" href="#story-voluntaryunemployment"></a>
        <a className="vsplit__prog" id="story-realization-btn" href="#story-realization"></a>
        <a className="vsplit__prog" id="story-findwork-btn" href="#story-findwork"></a>
      </div>
      <div className="vsplit__right">
        <p>I don't care if anyone reads it <i className="fa-regular fa-face-grin-tears"></i>. This should help me remember my past.</p>
        <hr />
        <Child />
        <hr />
        <Teen />
        <hr />
        <Undergraduate />
        <hr />
        <BeforeMaster />
        <hr />
        <Master />
        <hr />
        <WorkGermany />
        <hr />
        <VoluntaryUnemployment />
        <hr />
        <Realization />
        <hr />
        <section data-section="story-findwork">
          <p><a id="story-findwork"><b className="big highlight">32 Years Old - Present (Finding a Full-Time Job)</b></a> — I am now <TooltipText text="more aware">While it can take forever to uncover the <i>actual</i> flows inside all sentient beings, I now know reasons behind many of my actions. For example, I should turn on a fan when my body needs it, and one sign for this is sweat. I shouldn't harm myself because of any trauma, because the flow inside me truly matters, while any illusory mind can matter but it isn't true.</TooltipText> than ever before. Since I've got a satisfactory conclusion from self-introspection (about what truly matters), it is now reasonable to find job to sustain myself that allow me to continue my endeavors.</p>
        </section>
      </div>
    </div>
  )
}
