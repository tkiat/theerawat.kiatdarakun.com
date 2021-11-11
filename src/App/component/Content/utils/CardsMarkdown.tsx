import React from 'react'

import {Cards} from './Cards'
import {Markdown} from './Markdown'

type P = {mdArray: string[]}
export const CardsMarkdown = ({mdArray}: P): React.ReactElement =>
  <Cards items={mdArray.map((x) => <Markdown content={x} />)} />
