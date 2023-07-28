import React from "react"
import * as jsYaml from 'js-yaml'

import {PageWithIconsScrollbar} from "../../share"
import {Work} from "./Informal/Work"
import {Education} from "./Informal/Education"
import {Other} from "./Informal/Other"

export const Informal = (): React.ReactElement => {
  const data = {
    icons: [
      <i className="fa-solid fa-briefcase"></i>,
      <i className="fa-solid fa-school"></i>,
      <i className="fa-solid fa-ellipsis-vertical"></i>,
    ],
    content: {
      sections: [
        <Work />,
        <Education />,
        <Other />,
      ]
    }
  }
  return <PageWithIconsScrollbar data={data} page="about-character" />
}
