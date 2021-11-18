import React from "react"

import {TabsContent} from "../share"

export const Events = (): React.ReactElement =>
  <TabsContent
    items={[
      {
        title: "TODO",
        content: <></>,
      },
    ]}
    localKey="tab-index-activity-events"
  />
