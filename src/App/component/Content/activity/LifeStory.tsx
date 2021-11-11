import React from 'react'

import {Markdown, TabsContent} from '../utils'
import * as data from './lifeStoryData'

let index = 0

const storage = 'tab-index-activity-lifestory'
const items = [
  { title: 'Born' },
  {
    title: 'Very Smol',
    content: <Markdown content={data.verysmol} />,
    index: index++,
  },
  { title: 'School' },
  {
    title: 'Primary School',
    content: <Markdown content={data.content} />,
    index: index++,
  },
  {
    title: 'High School',
    content: <Markdown content={data.content} />,
    index: index++,
  },
  { title: 'University' },
  {
    title: 'Bachelor',
    content: <Markdown content={data.content} />,
    index: index++,
  },
  {
    title: 'Gap',
    content: <Markdown content={data.content} />,
    index: index++,
  },
  {
    title: 'Master',
    content: <Markdown content={data.content} />,
    index: index++,
  },
  { title: 'Work' },
  {
    title: 'Gap',
    content: <Markdown content={data.content} />,
    index: index++,
  },
  {
    title: 'Work',
    content: <Markdown content={data.content} />,
    index: index++,
  },
  {
    title: 'Gap',
    content: <Markdown content={data.content} />,
    index: index++,
  },
]

export const LifeStory = (): React.ReactElement =>
  <TabsContent items={items} storage={storage} />
