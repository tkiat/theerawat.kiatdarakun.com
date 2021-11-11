import React from 'react'

import {ContentRouter} from './Content/ContentRouter'

type P = {isInsideWater: boolean}
export const Content = ({isInsideWater}: P): React.ReactElement =>
  <div className={'content ' + (isInsideWater ? 'content--inside-water'
                                              : 'content--outside-water')}
  >
    <ContentRouter />
  </div>
