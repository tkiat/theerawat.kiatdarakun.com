import React from 'react'

import {capitalize} from 'src/App/share/general'
import {ThemeContext, baseThemes} from 'src/App/share/theme'

export const BaseThemePicker = (): React.ReactElement => {
  const {theme, setTheme} = React.useContext(ThemeContext)
  return (
    <div className="grid__item">
      <div className="basetheme-picker">
        <div className="basetheme-picker__header">Base Theme</div>
        <div className="basetheme-picker__content">
          {baseThemes.map(x => (
            <button
              key={x}
              className={'basetheme-picker__picker' +
                (theme.custom.baseTheme === x ?
                  ' basetheme-picker__picker--active' : '')}
              onClick={() => {setTheme(d => {d.custom.baseTheme = x})}}
              theme-base={x}
            >
              {capitalize(x)}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
