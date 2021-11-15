import React from 'react'
import {Updater} from 'use-immer'

import {Theme, ThemeContext, ThemeObject, duckBodyKey, themes, tubeStrokeKey, tubeWaterKey, wavesKey} from 'src/App/share/theme'
import {capitalize} from 'src/App/share/general'

export const ThemePickers = (): React.ReactElement => {
  const {theme, setTheme} = React.useContext(ThemeContext)
  return (
    <>
      {themes.map(x =>
        <div className="grid__item grid__item--6em" key={x}>
          <Picker setTheme={setTheme} themeDisplay={x} theme={theme} />
        </div>
      )}
    </>
  )}

type P = {setTheme: Updater<ThemeObject>, theme: ThemeObject,
          themeDisplay: Theme}
const Picker = ({themeDisplay, theme, setTheme}: P): React.ReactElement => {
  const o = {...theme, current: themeDisplay}
  const ts = o.get(tubeStrokeKey)
  const title = capitalize(themeDisplay)
  return (
    <button
      className={'theme-picker' +
        (theme.current === themeDisplay ? ' theme-picker--active' : '')}
      onClick={() => setTheme(d => {d.current = themeDisplay})}
      theme-base={themeDisplay}
      theme-supplement={themeDisplay}
    >
    {
      //@ts-ignore
      <div className={'theme-picker__nav-tube'} overlay={title} style={{
        color: o.get(tubeWaterKey),
        textShadow: `-1px 0 ${ts}, 0 1px ${ts}, 1px 0 ${ts}, 0 -1px ${ts}`
      }}>{title}</div>
    }
      <div className={'theme-picker__header'}>Header</div>
      <div className={'theme-picker__text'}>Sample text</div>
    {['l', 'r'].map((x, i) =>
      <div key={i}
           className={'theme-picker__nav-main theme-picker__nav-main--' + x}
           style={{backgroundColor: o.get(duckBodyKey)}}
      >
      </div>
    )}
    {o.getArr(wavesKey).map((x, i) =>
      <div key={i} className={`theme-picker__wave theme-picker__wave--${i}`}
           style={{backgroundColor: x}}></div>
    )}
    </button>
  )
}
