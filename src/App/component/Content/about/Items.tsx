import React from 'react'

import {CardsMarkdown, Markdown, TabsContent} from '../utils'
import {gadgets, hygiene, intro, software} from './itemData'

const storage = 'tab-index-about-items'
const items = [
  {
    title: 'Intro',
    content: <Markdown content={intro} />,
    index: 0,
  },
  {
    title: 'Physical',
  },
  {
    title: 'Gadgets',
    content: <CardsMarkdown mdArray={gadgets} />,
    index: 1,
  },
  {
    title: 'Hygiene',
    content: <Markdown content={hygiene} />,
    index: 2,
  },
  {
    title: 'Tools',
    content: <Markdown content={hygiene} />,
    index: 3,
  },
  {
    title: 'Cloths',
    content: <Markdown content={hygiene} />,
    index: 4,
  },
  {
    title: 'Kitchenware',
    content: <Markdown content={hygiene} />,
    index: 5,
  },
  {
    title: 'Nonphysical',
    clickable: false,
  },
  {
    title: 'Software',
    content: <CardsMarkdown mdArray={software} />,
    index: 6,
  },
  {
    title: 'Media',
    content: <CardsMarkdown mdArray={software} />,
    index: 7,
  },
]

export const Items = (): React.ReactElement =>
  <TabsContent items={items} storage={storage} />
