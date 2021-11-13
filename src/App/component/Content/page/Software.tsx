import React from 'react'

import {CardsProject, Markdown, TabsContent} from '../share'

import webProject from './Software/web-project.json'
import webExperiment from './Software/web-experiment.json'
import pcProject from './Software/pc-project.json'
import pcUtility from './Software/pc-utility.json'
import {learning} from './Software/learning'
import {pullRequest} from './Software/pullrequest'

let index = 0

const storage = 'tab-index-activity-software'
const items = [
  {
    title: 'Web',
  },
  {
    title: 'Project',
    content: <CardsProject items={webProject} />,
    index: index++,
  },
  {
    title: 'Experiment',
    content: <CardsProject items={webExperiment} />,
    index: index++,
  },
  {
    title: 'PC',
  },
  {
    title: 'Project',
    content: <CardsProject items={pcProject} />,
    index: index++,
  },
  {
    title: 'Utility',
    content: <CardsProject items={pcUtility} />,
    index: index++,
  },
  {
    title: 'General',
    clickable: false,
  },
  {
    title: 'Pull Request',
    content: <Markdown content={pullRequest} />,
    index: index++,
  },
  {
    title: 'Learning',
    content: <Markdown content={learning} />,
    index: index++,
  },
]

export const Software = (): React.ReactElement =>
  <TabsContent items={items} storage={storage} />
