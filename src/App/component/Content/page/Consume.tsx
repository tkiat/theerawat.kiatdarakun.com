import React from 'react'

import {MyTooltipWithDelay} from "../share/MyTooltip"

import {Rec2022} from "./Consume/Rec2022"
import {Rec2021} from "./Consume/Rec2021"
import {Rec2020} from "./Consume/Rec2020"
import {Rec2019} from "./Consume/Rec2019"
import {Rec2018} from "./Consume/Rec2018"

export const Consume = (): React.ReactElement =>
  <>
    <p>I just realize that my memory retains much better when I shortly summarize books, courses, documentaries, etc., just after I digest them. The list below contains a selection of what I have digested (plus a few more from my memory). Hold a cursor on an item for information.</p>
    <Rec2022 />
    <Rec2021 />
    <Rec2020 />
    <Rec2019 />
    <Rec2018 />
  </>
