import React from "react"

import {CardsProject, Markdown, TabsContent} from "../share"
import webProject from "./Create/web-project.json"
import webExperiment from "./Create/web-experiment.json"
import pcProject from "./Create/pc-project.json"
import pcUtility from "./Create/pc-utility.json"
import {learning} from "./Create/learning"
import {pullRequest} from "./Create/pullrequest"

export const Create = (): React.ReactElement =>
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
