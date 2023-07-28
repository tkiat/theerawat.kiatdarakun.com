import React from "react"
import * as jsYaml from 'js-yaml'

import {PageWithIconsScrollbar} from "../../share"
import {Intro} from "./Formal/Intro"
import {Work} from "./Formal/Work"
import {Education} from "./Formal/Education"
import {About} from "./Formal/About"

export const Formal = (): React.ReactElement => {
  const data = {
    icons: [
      <i className="fa-solid fa-briefcase"></i>,
      <i className="fa-solid fa-school"></i>,
      <i className="fa-solid fa-person"></i>,
    ],
    content: {
      prelude: <Intro />,
      sections: [
        <Work />,
        <Education />,
        <About />,
      ]
    }
  }
  return <PageWithIconsScrollbar data={data} page="about-character" />
}
