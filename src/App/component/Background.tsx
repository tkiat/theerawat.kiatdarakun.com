import React from 'react'

import {ThemeObject, baseThemes, getBaseTheme} from 'src/App/share/theme'

import {ReactComponent as Desert} from './Background/desert.svg'
import {ReactComponent as Ocean} from './Background/ocean.svg'
import {ReactComponent as Sakura} from './Background/sakura.svg'
import {ReactComponent as Snow} from './Background/snow.svg'

type P = {theme: ThemeObject}
export const Background = ({theme}: P): React.ReactElement => [
  <Ocean className={'background'} />,
  <Desert className={'background'} />,
  <Sakura className={'background'} />,
  <Snow className={'background'} />,
][baseThemes.indexOf(getBaseTheme(theme))]
