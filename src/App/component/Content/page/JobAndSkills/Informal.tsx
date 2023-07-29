import React from "react"
import * as jsYaml from 'js-yaml'

import {PageWithIconsScrollbar} from "../../share"
import {Software} from "./Informal/Software"
import {Other} from "./Informal/Other"

export const Informal = (): React.ReactElement => {
  const data = {
    icons: [
      <i className="fa-solid fa-code"></i>,
      <i className="fa-solid fa-ellipsis-vertical"></i>,
    ],
    content: {
      sections: [
        <Software />,
        <Other />,
      ]
    }
  }
  return <PageWithIconsScrollbar data={data} page="about-character" />
}
