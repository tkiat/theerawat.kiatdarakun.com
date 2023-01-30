import React from "react"

import {Child} from "./Story/00-Child"
import {Teen} from "./Story/01-Teen"
import {Undergraduate} from "./Story/02-Undergraduate"
import {Gap1} from "./Story/03-Gap1"
import {MasterDegree} from "./Story/04-MasterDegree"
import {WorkingGermany} from "./Story/05-WorkingGermany"
import {VoluntaryUnemployment} from "./Story/06-VoluntaryUnemployment"
import {Realization} from "./Story/07-Realization"

import {TooltipText} from "../share/Tooltip"

export const Story = (): React.ReactElement => (
  <>
    <p>I don't care if anyone reads it <i className="fa-regular fa-face-grin-tears"></i>. This should help me remember my past.</p>
    <hr />
    <Child />
    <hr />
    <Teen />
    <hr />
    <Undergraduate />
    <hr />
    <Gap1 />
    <hr />
    <MasterDegree />
    <hr />
    <WorkingGermany />
    <hr />
    <VoluntaryUnemployment />
    <hr />
    <Realization />
    <hr />
    <p>
      <b className="big highlight">32 Years Old - Present (Finding a Full-Time Job)</b> — I now believe I am much&nbsp;
      <TooltipText text="wiser">
        While it can take forever to uncover the <i>actual</i> flows inside all sentient beings, I now know reasons behind many of my actions. For example, I should turn on a fan when my body needs it, and one sign for this is sweat. I shouldn't harm myself from any truama, for the flow inside me matters, not illusory mind.
      </TooltipText>
      &nbsp;than ever before. Since I've got a satisfactory conclusion from self-introspection (about what truly matters), it is now reasonable to find job to sustain myself that allow me to continue my endeavors.
    </p>
  </>
)
