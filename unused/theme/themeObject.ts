import {isType} from '../general'

import {BaseTheme, baseThemes, mkCustomBaseTheme, storeCustomBaseTheme} from './base'
import {Time, mkTime, storeTime} from './time'
import {DuckAndTubeKeys, WavesKey, defaultMappings, duckBeakKey, duckBodyKey, duckWingKey, addCustomPrefix, duckKeys, tubeKeys, tubeStrokeKey, tubeWaterKey, wavesKey, wavesSubKeys} from './custom'

// definitions ----------------------------------------------------------------
export const customTheme = 'custom'

export type Theme = (typeof themes)[number]
// export const themes = [...baseThemes, customTheme] as const
export const themes = baseThemes as const

const localThemeKey = 'theme'

export type ThemeObject = Readonly<{
  current: Theme
  time: Time

  custom: {
    [key in DuckAndTubeKeys]: string
  } & {
    baseTheme: BaseTheme
    [wavesKey]: string[]
  }
  get: (_: DuckAndTubeKeys) => string
  getArr: (_: WavesKey) => string[]
}>

// utilities ------------------------------------------------------------------
export const getBaseTheme = (x: ThemeObject): BaseTheme =>
  isType(x.current, baseThemes) ? x.current : x.custom.baseTheme

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
  return isType(l, themes) ? l : 'ocean'
}

export const mkThemeObject = (): ThemeObject => {
  const r = {
    current: mkTheme(),
    time: mkTime(),
    custom: {
      baseTheme: mkCustomBaseTheme(),
      [duckBeakKey]:
        localStorage.getItem(addCustomPrefix(duckBeakKey))
          ?? 'rgb(0, 0, 0)',
      [duckBodyKey]:
        localStorage.getItem(addCustomPrefix(duckBodyKey))
          ?? 'rgb(0, 0, 0)',
      [duckWingKey]:
        localStorage.getItem(addCustomPrefix(duckWingKey))
          ?? 'rgb(0, 0, 0)',
      [tubeStrokeKey]:
        localStorage.getItem(addCustomPrefix(tubeStrokeKey))
          ?? 'rgb(128, 128, 128)',
      [tubeWaterKey]:
        localStorage.getItem(addCustomPrefix(tubeWaterKey))
          ?? 'rgb(128, 128, 128)',
      [wavesKey]:
        wavesSubKeys .map(x => localStorage.getItem(addCustomPrefix(x))
          ?? 'rgb(0, 0, 0)'),
    },
    get: function(x: DuckAndTubeKeys) {
      return isBaseTheme(this.current)
        ? defaultMappings[x][this.current][this.time]
        : this.custom[x]
    },
    getArr: function(x: WavesKey) {
      return isBaseTheme(this.current)
        ? defaultMappings[x][this.current][this.time]
        : this.custom[x]
    },
  }
  return r
}

export const storeThemeObject = (t: ThemeObject) => {
  localStorage.setItem(localThemeKey, t.current)
  storeCustomBaseTheme(t.custom.baseTheme)
  storeTime(t.time)

  duckKeys.forEach(x => localStorage.setItem(addCustomPrefix(x), t.custom[x]))
  tubeKeys.forEach(x => localStorage.setItem(addCustomPrefix(x), t.custom[x]))

  t.custom[wavesKey].forEach((x, i) =>
    localStorage.setItem(addCustomPrefix(wavesSubKeys[i]), x))
}
