import React from "react"
import ReactDOM from "react-dom"
import {enableMapSet} from "immer"

import "./main.css"

import {App} from "./App"
import {SafariWarning, storageSafariBypassKey} from "./SafariWarning"

const willShowSafariWarning = (): boolean => {
  const u = navigator.userAgent
  const isSafari = u.indexOf("Safari") > -1 && u.indexOf("Chrome") === -1
  return isSafari && localStorage.getItem(storageSafariBypassKey) !== "true"
}

enableMapSet()

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
)
//     {willShowSafariWarning() ? <SafariWarning /> : <App />}
