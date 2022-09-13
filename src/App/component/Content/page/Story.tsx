import React from "react"

import {Child} from "./Story/00-Child"
import {Teen} from "./Story/01-Teen"
import {Undergraduate} from "./Story/02-Undergraduate"
import {Gap1} from "./Story/03-Gap1"
import {MasterDegree} from "./Story/04-MasterDegree"
import {WorkingGermany} from "./Story/05-WorkingGermany"
import {LongUnemployment} from "./Story/06-LongUnemployment"

export const Story = (): React.ReactElement => (
  <>
    <Child />
    <Teen />
    <Undergraduate />
    <Gap1 />
    <MasterDegree />
    <WorkingGermany />
    <LongUnemployment />
  </>
)
