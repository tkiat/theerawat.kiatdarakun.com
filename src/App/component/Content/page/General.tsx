import React from "react"

import {Markdown, TabsContent} from "../share"
import * as data from "./General/data"

export const General = (): React.ReactElement =>
  <TabsContent
    items={[
      {
        title: "Reading",
        content: <Markdown content={data.reading} />,
      },
      {
        title: "Content",
        content: <Markdown content={data.content} />,
      },
      {
        title: "Courses",
        content: <Markdown content={data.courses} />,
      },
      {
        title: "Archive",
        content: <Markdown content={data.archive} />,
      },
    ]}
    localKey="tab-index-activity-general"
  />
