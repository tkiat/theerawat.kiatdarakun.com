import React from 'react'

import {TabsContent} from "../share"
import {Book} from "./Consume/Book"
import {Course} from "./Consume/Course"

export const Consume = (): React.ReactElement =>
  <TabsContent
    items={[
      {
        title: "Course",
        content: <Course />,
      },
      {
        title: "Book",
        content: <Book />,
      },
    ]}
    localKey="tab-index-activity-consume"
  />
