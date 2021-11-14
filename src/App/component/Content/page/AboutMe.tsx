import React from "react"

import {TabsContent} from "../share"
import {GoalAndPurposes} from "./AboutMe/GoalAndPurposes"
import {Items} from "./AboutMe/Items"
import {Personality} from "./AboutMe/Personality"
import {WorldView} from "./AboutMe/WorldView"

export const AboutMe = (): React.ReactElement =>
  <TabsContent
    items={[
      {
        title: "Personality",
        content: <Personality />,
      },
      {
        title: "Goal & Purpose",
        content: <GoalAndPurposes />,
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
