import React from "react"

import {CardsProject, Markdown, TabsContent} from "../share"
import webProject from "./Software/web-project.json"
import webExperiment from "./Software/web-experiment.json"
import pcProject from "./Software/pc-project.json"
import pcUtility from "./Software/pc-utility.json"
import {learning} from "./Software/learning"
import {pullRequest} from "./Software/pullrequest"

export const Software = (): React.ReactElement =>
  <TabsContent
    items={[
      {
        title: "Web",
      },
      {
        title: "Project",
        content: <CardsProject items={webProject} />,
      },
      {
        title: "Experiment",
        content: <CardsProject items={webExperiment} />,
      },
      {
        title: "PC",
      },
      {
        title: "Project",
        content: <CardsProject items={pcProject} />,
      },
      {
        title: "Utility",
        content: <CardsProject items={pcUtility} />,
      },
      {
        title: "General",
      },
      {
        title: "Pull Request",
        content: <Markdown content={pullRequest} />,
      },
      {
        title: "Learning",
        content: <Markdown content={learning} />,
      },
    ]}
    localKey="tab-index-activity-software"
  />
