import {isType} from '../general'

import {BaseTheme, baseThemes, mkCustomBase, storeCustomBaseTheme} from './base'
import {Time, mkTime, storeTime} from './time'
import {DuckAndTubeKeys, UserAdjustable, WavesKey, duckBeakKey, duckBodyKey, duckWingKey, mkDuckBeak, mkDuckBody, mkDuckWing, mkLocalKey, mkTubeStroke, mkTubeWater, mkWaves, duckKeys, tubeKeys, tubeStrokeKey, tubeWaterKey, wavesKey, wavesSubKeys} from './custom'

// definitions ----------------------------------------------------------------
export const customTheme = 'custom'

export type Theme = (typeof themes)[number]
export const themes = [...baseThemes, customTheme] as const

const localThemeKey = 'theme'

export type ThemeObject = Readonly<{
  current: Theme
  customBase: BaseTheme
  time: Time

  get: (_: DuckAndTubeKeys) => string
  getArr: (_: WavesKey) => string[]

  [wavesKey]: UserAdjustable<string[]>
} & {
  [key in DuckAndTubeKeys]: UserAdjustable<string>
}>

// utilities ------------------------------------------------------------------
export const getBaseTheme = (x: ThemeObject): BaseTheme =>
  isType(x.current, baseThemes) ? x.current : x.customBase

export const isBaseTheme = (t: Theme): t is BaseTheme => t !== customTheme

export const mkGlobalStyle = (t: ThemeObject) => ({
  '--dark': t.time === 'day' ? 0 : 1,
  '--duck-beak-color': t.get(duckBeakKey),
  '--duck-body-color': t.get(duckBodyKey),
  '--duck-wing-color': t.get(duckWingKey),
  '--tube-stroke-color': t.get(tubeStrokeKey),
  '--tube-water-color': t.get(tubeWaterKey),
}) as React.CSSProperties

const mkTheme = (): Theme => {
  const l = localStorage.getItem(localThemeKey)
  return isType(l, themes) ? l : 'sakura'
}

export const mkThemeObject = (): ThemeObject => {
  const r = {
    current: mkTheme(),
    customBase: mkCustomBase(),
    time: mkTime(),

    get: function(x: DuckAndTubeKeys) {
      return isBaseTheme(this.current)
        ? this[x].mapping[this.current][this.time]
        : this[x].custom
    },
    [duckBeakKey]: mkDuckBeak(duckBeakKey),
    [duckBodyKey]: mkDuckBody(duckBodyKey),
    [duckWingKey]: mkDuckWing(duckWingKey),
    [tubeStrokeKey]: mkTubeStroke(tubeStrokeKey),
    [tubeWaterKey]: mkTubeWater(tubeWaterKey),

    getArr: function(x: WavesKey) {
      return isBaseTheme(this.current)
        ? this[x].mapping[this.current][this.time]
        : this[x].custom
    },
    [wavesKey]: mkWaves(wavesSubKeys),
  }
  return r
}

export const storeThemeObject = (t: ThemeObject) => {
  localStorage.setItem(localThemeKey, t.current)
  storeCustomBaseTheme(t.customBase)
  storeTime(t.time)

  duckKeys.forEach(x => localStorage.setItem(mkLocalKey(x), t[x].custom))
  tubeKeys.forEach(x => localStorage.setItem(mkLocalKey(x), t[x].custom))

  t[wavesKey].custom.forEach((x, i) =>
    localStorage.setItem(mkLocalKey(wavesSubKeys[i]), x))
}
