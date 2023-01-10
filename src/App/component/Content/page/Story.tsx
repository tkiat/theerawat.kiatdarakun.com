import React from "react"

import {Child} from "./Story/00-Child"
import {Teen} from "./Story/01-Teen"
import {Undergraduate} from "./Story/02-Undergraduate"
import {Gap1} from "./Story/03-Gap1"
import {MasterDegree} from "./Story/04-MasterDegree"
import {WorkingGermany} from "./Story/05-WorkingGermany"
import {VoluntaryUnemployment} from "./Story/06-VoluntaryUnemployment"

export const Story = (): React.ReactElement => (
  <>
    <p>I don't care if anyone read it <i class="fa-regular fa-face-grin-tears"></i>. This should help me remember my past.</p>
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
  </>
)
