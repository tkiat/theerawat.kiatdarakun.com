import React from 'react'

import {Markdown, TabsContent} from '../share'
import * as data from './Lifestory/data'

const localKey = 'tab-index-activity-lifestory'
const items = [
  { title: 'Born' },
  {
    title: 'Very Smol',
    content: <Markdown content={data.verysmol} />,
  },
  { title: 'School' },
  {
    title: 'Primary School',
    content: <Markdown content={data.content} />,
  },
  {
    title: 'High School',
    content: <Markdown content={data.content} />,
  },
  { title: 'University' },
  {
    title: 'Bachelor',
    content: <Markdown content={data.content} />,
  },
  {
    title: 'Gap',
    content: <Markdown content={data.content} />,
  },
  {
    title: 'Master',
    content: <Markdown content={data.content} />,
  },
  { title: 'Work' },
  {
    title: 'Gap',
    content: <Markdown content={data.content} />,
  },
  {
    title: 'Work',
    content: <Markdown content={data.content} />,
  },
  {
    title: 'Gap',
    content: <Markdown content={data.content} />,
  },
]

export const LifeStory = (): React.ReactElement =>
  <TabsContent items={items} localKey={localKey} />
