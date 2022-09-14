import React from "react"

import {TabsContent} from "../share"
import {Items} from "./Character/Items"
import {General} from "./Character/General"
import {PurposeAndGoals} from "./Character/PurposeAndGoals"
import {WorldView} from "./Character/WorldView"

export const Character = (): React.ReactElement =>
  <TabsContent
    items={[
      {
        title: "General",
        content: <General />,
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
