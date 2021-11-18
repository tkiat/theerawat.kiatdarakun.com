import React from "react"

import {TabsContent} from "../share"
import {Software} from "./Create/Software"
import {Content} from "./Create/Content"

export const Create = (): React.ReactElement =>
  <TabsContent
    items={[
      {
        title: "Software",
        content: <Software />,
      },
      {
        title: "Content",
        content: <Content />,
      },
    ]}
    localKey="tab-index-activity-create"
  />
