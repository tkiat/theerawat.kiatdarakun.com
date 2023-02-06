import React from 'react'

import {appId} from 'src/App/share/elementId'
import {capitalize} from 'src/App/share/general'
import {ThemeContext, Time, times} from 'src/App/share/theme'

export const TimeRadioButtons = (): React.ReactElement => {
  const {theme, setTheme} = React.useContext(ThemeContext)
  return (
    <div
      className="sidebar__time"
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        document.getElementById(appId).dataset.themeTime = e.target.value
//         setTheme(d => {d.time = e.target.value as Time})
      }}
    >
    {times.map((t, i) =>
      <div key={i}>
        <input type="radio" name='time' id={'time-' + t} value={t}
               style={{cursor: 'pointer'}}
               defaultChecked={theme.time === t} />
        <span>&nbsp;&nbsp;</span>
        <label style={{cursor: 'pointer'}} htmlFor={'time-' + t}>
          {capitalize(t)}
        </label>
      </div>
    )}
    </div>
  )
}
