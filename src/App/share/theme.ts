import {appId} from 'src/App/share/elementId'
import {isType, hslToString} from 'src/App/share/general'

const storagePlaceKey = "place"
const storageTimeKey = "time"

export const placeList = ['ocean', 'desert', 'sakura', 'snow'] as const
export const timeList = ['day', 'dark'] as const

export type Place = (typeof placeList)[number]

export const initTheme = () => {
  const localPlace = localStorage.getItem(storagePlaceKey)
  const localTime = localStorage.getItem(storageTimeKey)
  return {
    initPlace: isType(localPlace, placeList) ? localPlace : placeList[0],
    initTime: isType(localTime, timeList) ? localTime : timeList[0]
  }
}

export const storeTheme = () => {
  const app = document.getElementById(appId)
  const p = app?.dataset.themeBase
  const t = app?.dataset.themeTime

  if (p) {
    localStorage.setItem(storagePlaceKey, p)
  }
  if (t) {
    localStorage.setItem(storageTimeKey, t)
  }
}

export const getPlaceHS = (p: Place) => {
  switch(p) {
    case 'ocean': return {h: 210, s: 100}
    case 'desert': return {h: 30, s: 100}
    case 'sakura': return {h: 330, s: 100}
    case 'snow': return {h: 0, s: 0}
  }
}

export const genWaveColors = (p: Place) => {
  const hs = getPlaceHS(p)
  return [0, 1, 2].map(x =>
    hslToString({h: hs.h, s: hs.s, l: 25 + 15 * x})
  )
}

export const updateFavicon = (p: Place) => {
//   const {h, s} = getBaseThemeHS(p)
//   const [hueBody, hueWing] = [h + 180, h + 90]
//   const favicon = document.getElementById('favicon') as HTMLLinkElement
//   favicon.href = `data:image/svg+xml,%3Csvg width='607.3904' height='706.2912' version='1.1' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform='matrix(6.0225 0 0 6.7012 -2224.401 -2056.598)' stroke='%23000' stroke-linejoin='round'%3E%3Cpath class='duck__body' d='m443.5 309.9a24 24 0 0 0-23.6 24.3c0 7.7 3.5 14.6 9 19.1a107.6 107.6 0 0 0-24.1 0.6 35.6 35.6 0 0 0-20.4-17.2 46.2 46.2 0 0 0-12 33.3 50.8 50.8 0 0 0 8.6 28.9 83 83 0 0 0 74.7 2.9 45 45 0 0 0 4.9-50.7 24.5 24.5 0 0 0 6.6-16.8 24 24 0 0 0-23.6-24.3z' fill='hsl(${hueBody}, ${s}%, 50%)' stroke-width='6'/%3E%3C/g%3E%3Cg transform='matrix(6.667149 0 0 7.447053 -746.0243 -1506.621)'%3E%3Cg stroke='%23000'%3E%3Cpath class='duck__wing' d='m135.5048 257.7786 7.22847 4.47074-7.33672 3.53354 7.41453 4.90628-6.85445 3.67636c21.73408 8.06733 33.8847 5.97652 32.72092-8.33217-2.34775-9.62604-17.00029-12.53855-33.17275-8.25475z' fill='hsl(${hueWing}, ${s}%, 50%)' stroke-width='2.83885'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E%0A`
}
