import React from "react"

import {capitalize, timeList} from "@app/share"

type P = {initTime: string}
export const TimePicker = ({initTime}: P): React.ReactElement =>
  <div
    className="sidebar__time"
    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
      const app = document.getElementById(import.meta.env.VITE_APPID)
      if (app) app.dataset.time = e.target.value

      document.getElementById("consumables-barchart-trigger")?.click()
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
