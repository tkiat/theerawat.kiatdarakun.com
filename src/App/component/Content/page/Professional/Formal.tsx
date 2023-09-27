import React from "react"
import * as jsYaml from 'js-yaml'

import {PageWithIconsScrollbar} from "../../share"
import {Intro} from "./Formal/Intro"
import {Work} from "./Formal/Work"
import {Education} from "./Formal/Education"
import {Other} from "./Formal/Other"

export const Formal = (): React.ReactElement => {
  const data = {
    icons: [
      <i className="fa-solid fa-user"></i>,
      <i className="fa-solid fa-briefcase"></i>,
      <i className="fa-solid fa-school"></i>,
      <i className="fa-solid fa-ellipsis-vertical"></i>,
    ],
    content: {
      sections: [
        <Intro />,
        <Work />,
        <Education />,
        <Other />,
      ]
    }
  }
  return <PageWithIconsScrollbar data={data} page="professional-formal" />
}
