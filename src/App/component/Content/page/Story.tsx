import React from "react"

import {Child} from "./Story/00-Child"
import {Teen} from "./Story/01-Teen"
import {Undergraduate} from "./Story/02-Undergraduate"
import {MasterDegree} from "./Story/03-MasterDegree"
import {WorkingGermany} from "./Story/04-WorkingGermany"
import {LongUnemployment} from "./Story/05-LongUnemployment"

export const Story = (): React.ReactElement => (
  <>
    <Child />
    <Teen />
    <Undergraduate />
    <MasterDegree />
    <WorkingGermany />
    <LongUnemployment />
  </>
)
