import React from 'react'

import {CardsMarkdown} from '../utils'
import {credits} from './creditsData'

export const Credits = (): React.ReactElement =>
  <CardsMarkdown mdArray={credits} />
