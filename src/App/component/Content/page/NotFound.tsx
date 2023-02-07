import React from "react"

import {MainPath, pathObject} from "@app/share"

const firstPage = Object.keys(pathObject)[0] as keyof typeof pathObject
const route = "/" + firstPage + "/" + pathObject[firstPage][0]

export const NotFound = (): React.ReactElement =>
  <div className="no-split">
    Content not found. No worries, we have <a href={route}>HOME</a>
  </div>
