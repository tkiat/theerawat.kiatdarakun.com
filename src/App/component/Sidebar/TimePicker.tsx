import React from "react"

import {appId, capitalize, timeList} from "@app/share"

type P = {initTime: string}
export const TimePicker = ({initTime}: P): React.ReactElement =>
  <div
    className="sidebar__time"
    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
      const app = document.getElementById(appId)
      if (app) {
        app.dataset.time = e.target.value
      }
    }}
  >
  {
    timeList.map((t, i) =>
      <div key={i}>
        <input type="radio" name="time" id={"time-" + t} value={t}
               style={{cursor: "pointer"}}
               defaultChecked={t === initTime} />
        <span>&nbsp;&nbsp;</span>
        <label style={{cursor: "pointer"}} htmlFor={"time-" + t}>
          {capitalize(t)}
        </label>
      </div>
  )}
  </div>
