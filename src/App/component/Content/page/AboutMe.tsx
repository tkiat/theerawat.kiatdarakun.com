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
        index: 0,
      },
      {
        title: "Goal & Purpose",
        content: <GoalAndPurposes />,
        index: 1,
      },
      {
        title: "WorldView",
        content: <WorldView />,
        index: 2,
      },
      {
        title: "Items",
        content: <Items />,
        index: 3,
      },
    ]}
    storage="tab-index-about-character"
  />
