import React from "react"

import {TabsContent} from "../share"
import {Items} from "./Character/Items"
import {Personality} from "./Character/Personality"
import {PurposeAndGoals} from "./Character/PurposeAndGoals"
import {WorldView} from "./Character/WorldView"

export const Character = (): React.ReactElement =>
  <TabsContent
    items={[
      {
        title: "Personality",
        content: <Personality />,
      },
      {
        title: "Purpose & Goals",
        content: <PurposeAndGoals />,
      },
      {
        title: "WorldView",
        content: <WorldView />,
      },
      {
        title: "Items",
        content: <Items />,
      },
    ]}
    localKey="tab-index-about-character"
  />
