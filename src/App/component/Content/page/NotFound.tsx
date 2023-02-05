import React from 'react'

import {pathObject} from 'src/App/share/path'

const firstPage = Object.keys(pathObject)[0]
const route = "/" + firstPage + "/" + pathObject[firstPage][0]

export const NotFound = (): React.ReactElement =>
  <div className="no-split">
    <div>
      Content not found. No worries, we have <a href={route}>HOME</a>

    </div>
  </div>
