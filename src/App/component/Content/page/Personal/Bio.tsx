import React from "react"

import {PageWithIconsScrollbar} from "../../share"
import {Child} from "./Bio/00-Child"
import {Teen} from "./Bio/01-Teen"
import {Bachelor} from "./Bio/02-Bachelor"
import {BeforeMaster} from "./Bio/03-BeforeMaster"
import {Master} from "./Bio/04-Master"
import {WorkGermany} from "./Bio/05-WorkGermany"
import {VoluntaryUnemployment} from "./Bio/06-VoluntaryUnemployment"
import {Realization} from "./Bio/07-Realization"
import {FindWork} from "./Bio/08-FindWork"

export const Bio = (): React.ReactElement => {
  const data = {
    icons: [
      <i className="fa-solid fa-baby"></i>,
      <i className="fa-solid fa-child"></i>,
      <i className="fa-solid fa-graduation-cap"></i>,
      <i className="fa-solid fa-arrows-left-right-to-line"></i>,
      <i className="fa-solid fa-graduation-cap"></i>,
      <i className="fa-solid fa-briefcase"></i>,
      <i className="fa-solid fa-person-walking-with-cane"></i>,
      <i className="fa-solid fa-lightbulb"></i>,
      <i className="fa-solid fa-magnifying-glass-dollar"></i>,
    ],
    content: {
      sections: [
        <Child />,
        <Teen />,
        <Bachelor />,
        <BeforeMaster />,
        <Master />,
        <WorkGermany />,
        <VoluntaryUnemployment />,
        <Realization />,
        <FindWork />,
      ]
    }
  }
  return <PageWithIconsScrollbar data={data} page="personal-bio" />
}
