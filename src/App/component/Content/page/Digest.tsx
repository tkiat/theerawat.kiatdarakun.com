import React from 'react'

import {MyTooltipWithDelay} from "../share/MyTooltip"

import {Rec2022} from "./Digest/Rec2022"
import {Rec2021} from "./Digest/Rec2021"
import {Rec2020} from "./Digest/Rec2020"
import {Rec2019} from "./Digest/Rec2019"
import {Rec2018} from "./Digest/Rec2018"

export const Digest = (): React.ReactElement =>
  <>
    <p>I just realize that my memory retains much better when I make a short summary, hence the list below. I list only DRM-free or free of charge media for now.</p>
    <Rec2022 />
    <Rec2021 />
    <Rec2020 />
    <Rec2019 />
    <Rec2018 />
  </>
