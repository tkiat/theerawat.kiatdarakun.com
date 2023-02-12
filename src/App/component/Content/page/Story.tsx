import React from "react"

import {initInPageNavButtons, initIntObserver} from "@app/share"
import {PageWithIconsScrollbar} from "../share"
import {Child} from "./Story/00-Child"
import {Teen} from "./Story/01-Teen"
import {Bachelor} from "./Story/02-Bachelor"
import {BeforeMaster} from "./Story/03-BeforeMaster"
import {Master} from "./Story/04-Master"
import {WorkGermany} from "./Story/05-WorkGermany"
import {VoluntaryUnemployment} from "./Story/06-VoluntaryUnemployment"
import {Realization} from "./Story/07-Realization"
import {FindWork} from "./Story/08-FindWork"

export const Story = (): React.ReactElement => {
  const data = {
    icons: [
      <i className="fa-solid fa-baby"></i>,
      <i className="fa-solid fa-child"></i>,
      <i className="fa-solid fa-graduation-cap"></i>,
      <i className="fa-solid fa-arrows-left-right-to-line"></i>,
      <i className="fa-solid fa-graduation-cap"></i>,
      <i className="fa-solid fa-briefcase"></i>,
      <i className="fa-solid fa-arrow-trend-down"></i>,
      <i className="fa-solid fa-lightbulb"></i>,
      <i className="fa-solid fa-magnifying-glass-dollar"></i>,
    ],
    content: {
      prelude: <Prelude />,
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
  return <PageWithIconsScrollbar data={data} page="about-story" />
}

const Prelude = (): React.ReactElement =>
  <p>
    I don't care if anyone reads it <i className="fa-regular fa-face-grin-tears"></i>. This should help me remember my past.
  </p>
