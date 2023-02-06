import React from 'react'

import {appId} from 'src/App/share/elementId'
import {capitalize} from 'src/App/share/general'
import {timeList} from 'src/App/share/theme'

type P = {initTime: string}
export const TimeRadioButtons = ({initTime}: P): React.ReactElement => {
  return (
    <div
      className="sidebar__time"
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        document.getElementById(appId).dataset.themeTime = e.target.value
      }}
    >
    {timeList.map((t, i) =>
      <div key={i}>
        <input type="radio" name='time' id={'time-' + t} value={t}
               style={{cursor: 'pointer'}}
               defaultChecked={t === initTime} />
        <span>&nbsp;&nbsp;</span>
        <label style={{cursor: 'pointer'}} htmlFor={'time-' + t}>
          {capitalize(t)}
        </label>
      </div>
    )}
    </div>
  )
}
