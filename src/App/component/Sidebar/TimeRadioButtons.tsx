import React from 'react'

import {appId} from 'share/elementId'
import {capitalize} from 'share/general'
import {timeList} from 'share/theme'

type P = {initTime: string}
export const TimeRadioButtons = ({initTime}: P): React.ReactElement => {
  return (
    <div
      className="sidebar__time"
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        const app = document.getElementById(appId)
        if (app) {
          app.dataset.themeTime = e.target.value
        }
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
