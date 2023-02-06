import React from 'react'
import {Updater} from 'use-immer'

import {Theme, ThemeContext, ThemeObject, duckBodyKey, themes, tubeStrokeKey, tubeWaterKey, wavesKey} from 'src/App/share/theme'
import {capitalize, hslToString} from 'src/App/share/general'
import {appId} from 'src/App/share/elementId'

type P = {waveConfigs: React.MutableRefObject<WaveConfigs>}
export const ThemePickers = ({waveConfigs}: P): React.ReactElement => {
  const {theme, setTheme} = React.useContext(ThemeContext)
  return (
    <>
      {themes.map(x =>
        <div className="grid__item grid__item--6em" key={x}>
          <Picker setTheme={setTheme} place={x} theme={theme} waveConfigs={waveConfigs} />
        </div>
      )}
    </>
  )}

type P = {setTheme: Updater<ThemeObject>, theme: ThemeObject,
          place: Theme, waveConfigs: React.MutableRefObject<WaveConfigs>}
const Picker = ({place, theme, setTheme, waveConfigs}: P): React.ReactElement => {
  const o = {...theme, current: place}
  const ts = o.get(tubeStrokeKey)
  const title = capitalize(place)
  return (
    <button
      className={'theme-picker' +
        (theme.current === place ? ' theme-picker--active' : '')}
      onClick={() => {
        document.getElementById(appId).dataset.themeBase = place
        const [custom, step] = [25, 15]
        waveConfigs.current.colors = [0, 1, 2].map(x => hslToString({h: 90, s: 100, l: custom + step * x}))
      }}
//       theme-supplement={place}
      data-theme-base={place}
    >
    {
      //@ts-ignore
      <div className="theme-picker__nav-tube" overlay={title}>{title}</div>
    }
      <div className="theme-picker__header">Header</div>
      <div className="theme-picker__text">Sample text</div>
      <div className="theme-picker__nav-main theme-picker__nav-main--l"></div>
      <div className="theme-picker__nav-main theme-picker__nav-main--r"></div>
      <div className="theme-picker__wave theme-picker__wave--0"></div>
      <div className="theme-picker__wave theme-picker__wave--1"></div>
      <div className="theme-picker__wave theme-picker__wave--2"></div>
    </button>
  )
}
