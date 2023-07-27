import React from "react"
import * as jsYaml from 'js-yaml'

import {PageWithIconsScrollbar} from "../share"
import {Consumables} from "./Informal/Consumables"
import {Hobbies} from "./Informal/Hobbies"
import {ThingsIOwn} from "./Informal/ThingsIOwn"
import {Trait} from "./Informal/Trait"

export const Informal = (): React.ReactElement => {
  const data = {
    icons: [
      <i className="fa-solid fa-person"></i>,
      <i className="fa-solid fa-person-hiking"></i>,
      <i className="fa-solid fa-cart-shopping"></i>,
//       <i className="fa-solid fa-suitcase-rolling"></i>,
    ],
    content: {
      sections: [
        <Trait />,
        <Hobbies />,
        <Consumables />,
//         <ThingsIOwn />,
      ]
    }
  }
  return <PageWithIconsScrollbar data={data} page="about-character" />
}
