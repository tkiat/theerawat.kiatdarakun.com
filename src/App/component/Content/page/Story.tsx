import React from "react"

import {Child} from "./Story/00-Child"
import {Teen} from "./Story/01-Teen"
import {Undergraduate} from "./Story/02-Undergraduate"
import {BeforeMaster} from "./Story/03-BeforeMaster"
import {Master} from "./Story/04-Master"
import {WorkGermany} from "./Story/05-WorkGermany"
import {VoluntaryUnemployment} from "./Story/06-VoluntaryUnemployment"
import {Realization} from "./Story/07-Realization"

import {initiateIntObserver} from 'src/App/share/general'
import {TooltipFa, TooltipText} from "../share/Tooltip"

export const Story = (): React.ReactElement => {
  React.useEffect(() => initiateIntObserver("storysection"), [])

//   React.useEffect(() => {
//   document.querySelectorAll("a[href^='#']").forEach(node => {
//     console.log(node)
//       node.addEventListener('click', e => {
//         e.preventDefault();
//         console.log(e.target);
//         //this.props.history.push(e.target.href);
//       });
//     })
//   }, [])

  return (
    <div className="vsplit">
      <div className="vsplit__left">
        <a className="vsplit__icon" id="story-child-btn" href="#story-child">
          <i className="fa-solid fa-baby"></i>
        </a>
        <a className="vsplit__icon" id="story-teen-btn" href="#story-teen">
          <i className="fa-solid fa-child"></i>
        </a>
        <a className="vsplit__icon" id="story-undergraduate-btn" href="#story-undergraduate">
          <i className="fa-solid fa-graduation-cap"></i>
        </a>
        <a className="vsplit__icon" id="story-beforemaster-btn" href="#story-beforemaster">
          <i className="fa-solid fa-arrows-left-right-to-line"></i>
        </a>
        <a className="vsplit__icon" id="story-master-btn" href="#story-master">
          <i className="fa-solid fa-graduation-cap"></i>
        </a>
        <a className="vsplit__icon" id="story-workgermany-btn" href="#story-workgermany">
          <i className="fa-solid fa-briefcase"></i>
        </a>
        <a className="vsplit__icon" id="story-voluntaryunemployment-btn" href="#story-voluntaryunemployment">
          <i className="fa-solid fa-arrow-trend-down"></i>
        </a>
        <a className="vsplit__icon" id="story-realization-btn" href="#story-realization">
          <i className="fa-solid fa-lightbulb"></i>
        </a>
        <a className="vsplit__icon" id="story-findwork-btn" href="#story-findwork">
          <i className="fa-solid fa-magnifying-glass-dollar"></i>
        </a>
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
        <section data-storysection="story-findwork">
          <p><a id="story-findwork"><b className="big highlight">32 Years Old - Present (Finding a Full-Time Job)</b></a> — I am now <TooltipText text="more aware">While it can take forever to uncover the <i>actual</i> flows inside all sentient beings, I now know reasons behind many of my actions. For example, I should turn on a fan when my body needs it, and one sign for this is sweat. I shouldn't harm myself because of any trauma, because the flow inside me truly matters, while any illusory mind can matter but it isn't true.</TooltipText> than ever before. Since I've got a satisfactory conclusion from self-introspection (about what truly matters), it is now reasonable to find job to sustain myself that allow me to continue my endeavors.</p>
        </section>
      </div>
    </div>
  )
}
