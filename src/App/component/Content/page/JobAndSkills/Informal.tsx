import React from "react"
import * as jsYaml from 'js-yaml'

import {PageWithIconsScrollbar} from "../../share"

export const Informal = (): React.ReactElement => {
  const data = {
    icons: [
      <i className="fa-solid fa-person"></i>,
    ],
    content: {
      sections: [
        <>temp</>
      ]
    }
  }
  return <PageWithIconsScrollbar data={data} page="about-character" />
}
