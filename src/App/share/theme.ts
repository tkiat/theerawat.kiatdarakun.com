// export {baseThemes, mayApplyBaseTheme} from './theme/base'
// export {updateFavicon} from './theme/favicon'
// export {ThemeContext, ThemeProvider} from './theme/themeContext'
// export {getBaseTheme, mkGlobalStyle, mkThemeObject, storeThemeObject, themes} from './theme/themeObject'
// export {duckBeakKey, duckBodyKey, duckWingKey, duckKeys, tubeKeys, tubeStrokeKey, tubeWaterKey, wavesKey, wavesSubKeys} from './theme/custom'
// export {times} from './theme/time'

// export type {BaseTheme} from './theme/base'
// export type {DuckAndTubeKeys, WavesKey} from './theme/custom'
// export type {Theme, ThemeObject} from './theme/themeObject'
// export type {Time} from './theme/time'



import {isType, hslToString} from 'src/App/share/general'

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

export const getPlaceHS = (place: BaseTheme) => {
  switch(place) {
    case 'ocean': return {h: 210, s: 100}
    case 'desert': return {h: 30, s: 100}
    case 'sakura': return {h: 330, s: 100}
    case 'snow': return {h: 0, s: 0}
  }
}

export const genWaveColors = (place: BaseTheme) => {
  const hs = getPlaceHS(place)
  return [0, 1, 2].map(x =>
    hslToString({h: hs.h, s: hs.s, l: 25 + 15 * x})
  )
}
