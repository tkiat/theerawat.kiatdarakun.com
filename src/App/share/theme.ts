export {baseThemes, mayApplyBaseTheme} from './theme/base'
export {updateFavicon} from './theme/favicon'
export {ThemeContext, ThemeProvider} from './theme/themeContext'
export {getBaseTheme, mkGlobalStyle, mkThemeObject, storeThemeObject, themes} from './theme/themeObject'
export {duckBeakKey, duckBodyKey, duckWingKey, duckKeys, tubeKeys, tubeStrokeKey, tubeWaterKey, wavesKey, wavesSubKeys} from './theme/custom'
export {times} from './theme/time'

export type {BaseTheme} from './theme/base'
export type {DuckAndTubeKeys, WavesKey} from './theme/custom'
export type {Theme, ThemeObject} from './theme/themeObject'
export type {Time} from './theme/time'



import {isType} from 'src/App/share/general'
import {themes} from 'src/App/share/theme'

export const placeList = ['ocean', 'desert', 'sakura', 'snow'] as const
export const timeList = ['day', 'dark'] as const

const storagePlaceKey = "place"
const storageTimeKey = "time"

export const initTheme = (): Theme => {
  const localPlace = localStorage.getItem(storagePlaceKey)
  const localTime = localStorage.getItem(storageTimeKey)
  return {
    initPlace: isType(localPlace, placeList) ? localPlace : placeList[0],
    initTime: isType(localTime, timeList) ? localTime : timeList[0]
  }
}

export const storeTheme = () => {
  const app = document.getElementById("app")
  const place = app.dataset.themeBase
  const time = app.dataset.themeTime
  localStorage.setItem(storagePlaceKey, place)
  localStorage.setItem(storageTimeKey, time)
}
