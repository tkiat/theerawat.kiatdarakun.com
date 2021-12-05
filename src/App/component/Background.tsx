import React from 'react'

import {ReactComponent as Desert} from 'assets/background/desert.svg'
import {ReactComponent as Ocean} from 'assets/background/ocean.svg'
import {ReactComponent as Sakura} from 'assets/background/sakura.svg'
import {ReactComponent as Snow} from 'assets/background/snow.svg'

import {ThemeObject, baseThemes, getBaseTheme} from 'src/App/share/theme'

type P = {theme: ThemeObject}
export const Background = ({theme}: P): React.ReactElement => [
  <Ocean className={'background'} />,
  <Desert className={'background'} />,
  <Sakura className={'background'} />,
  <Snow className={'background'} />,
][baseThemes.indexOf(getBaseTheme(theme))]
