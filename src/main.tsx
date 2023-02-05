import React from 'react'
import ReactDOM from 'react-dom'

import './main.css'

import {App} from './App'
import {SafariWarning, localSafariBypassKey} from './SafariWarning'

const willShowSafariWarning = (): boolean => {
  const u = navigator.userAgent
  const isSafari = u.indexOf('Safari') > -1 && u.indexOf('Chrome') === -1
  return isSafari && localStorage.getItem(localSafariBypassKey) !== 'true'
}

// ReactDOM.render(<App />,document.getElementById('root'))

ReactDOM.render(
  <React.StrictMode>
    {willShowSafariWarning() ? <SafariWarning /> : <App />}
  </React.StrictMode>,
  document.getElementById('root')
)
