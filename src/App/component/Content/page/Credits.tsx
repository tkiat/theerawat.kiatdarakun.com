import React from 'react'

import {CardsMarkdown} from '../share'
import {credits} from './Credits/data'

export const Credits = (): React.ReactElement =>
  <CardsMarkdown mdArray={credits} />
