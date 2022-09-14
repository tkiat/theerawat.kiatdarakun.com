import React from 'react'

import {MyTooltipWithDelay} from "../share/MyTooltip"

import {Rec2022} from "./Consume/Rec2022"
import {Rec2021} from "./Consume/Rec2021"
import {Rec2020} from "./Consume/Rec2020"
import {Rec2019} from "./Consume/Rec2019"
import {Rec2018} from "./Consume/Rec2018"

export const Consume = (): React.ReactElement =>
  <>
    <p>The list below contains the selection of what I have digested. Hold a cursor on an item below for my experience or review.</p>
    <Rec2022 />
    <Rec2021 />
    <Rec2020 />
    <Rec2019 />
    <Rec2018 />
  </>
