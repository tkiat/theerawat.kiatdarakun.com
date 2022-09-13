import React from "react"

import {TabsContent} from "../share"
import {Undergraduate} from "./Story/Undergraduate"
import {Child} from "./Story/Child"
import {MasterDegree} from "./Story/MasterDegree"
import {Teen} from "./Story/Teen"
import {WorkingGermany} from "./Story/WorkingGermany"
import {LongUnemployment} from "./Story/LongUnemployment"

export const Story = (): React.ReactElement =>
  <TabsContent
    items={[
      {
        title: "Child",
        content: <Child />,
      },
      {
        title: "Teen",
        content: <Teen />,
      },
      {
        title: "Undergraduate",
        content: <Undergraduate />,
      },
      {
        title: "Master's Degree",
        content: <MasterDegree />,
      },
      {
        title: "Working in Germany",
        content: <WorkingGermany />,
      },
      {
        title: "Unemployment",
        content: <LongUnemployment />,
      },
    ]}
    localKey="tab-index-about-story"
  />
