import React from "react"

import {capitalize} from "@app/share"

type P = {title: string}
export const Title = ({title}: P): React.ReactElement =>
  <h1 className="title">{capitalize(title)}</h1>
