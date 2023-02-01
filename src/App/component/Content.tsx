import React from 'react'

import {ContentRouter} from './Content/ContentRouter'

type P = {isInsideWater: boolean}
export const Content = ({isInsideWater}: P): React.ReactElement =>
  <div id="content-container" className="content content--outside-water">
    <ContentRouter />
  </div>
