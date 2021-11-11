import React from 'react'
import {DraftFunction} from 'use-immer'

import {ThemeObject, mkThemeObject} from './themeObject'

type P = {
  theme: ThemeObject,
  setTheme: (_: ThemeObject | DraftFunction<ThemeObject>) => void,
}
export const ThemeContext = React.createContext<P>({
  theme: mkThemeObject(),
  setTheme: _ => {},
})
export const ThemeProvider = ThemeContext.Provider
