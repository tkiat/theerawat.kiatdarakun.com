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

export const Story = (): React.ReactElement =>
  <div className="vsplit">
    <div className="vsplit__left">
      <a className="noob" href="#story-child"></a>
      <a className="noob" href="#story-teen"></a>
      <a className="noob" href="#story-undergraduate"></a>
      <a className="noob" href="#story-beforemaster"></a>
      <a className="noob" href="#story-master"></a>
      <a className="noob" href="#story-workgermany"></a>
      <a className="noob" href="#story-voluntaryunemployment"></a>
      <a className="noob" href="#story-realization"></a>
      <a className="noob" href="#story-findwork"></a>
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
      <p><a id="story-findwork"><b className="big highlight">32 Years Old - Present (Finding a Full-Time Job)</b></a> — I am now <TooltipText text="more aware">While it can take forever to uncover the <i>actual</i> flows inside all sentient beings, I now know reasons behind many of my actions. For example, I should turn on a fan when my body needs it, and one sign for this is sweat. I shouldn't harm myself because of any trauma, because the flow inside me truly matters, while any illusory mind can matter but it isn't true.</TooltipText> than ever before. Since I've got a satisfactory conclusion from self-introspection (about what truly matters), it is now reasonable to find job to sustain myself that allow me to continue my endeavors.</p>
    </div>
  </div>
//   <div className="vsplit">
//   </div>
