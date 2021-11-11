import React from 'react'

import {Markdown, TabsContent} from '../utils'
import * as data from './generalData'

let index = 0
const storage = 'tab-index-activity-general'
const items = [
  {
    title: 'Reading',
    content: <Markdown content={data.reading} />,
    index: index++,
  },
  {
    title: 'Content',
    content: <Markdown content={data.content} />,
    index: index++,
  },
  {
    title: 'Courses',
    content: <Markdown content={data.courses} />,
    index: index++,
  },
  {
    title: 'Archive',
    content: <Markdown content={data.archive} />,
    index: index++,
  },
]

export const General = (): React.ReactElement =>
  <TabsContent items={items} storage={storage} />
