import React from 'react'

import {ContentRouter} from './Content/ContentRouter'

export const Content = (): React.ReactElement =>
  <div className="content content--outside-water">
    <ContentRouter />
  </div>
