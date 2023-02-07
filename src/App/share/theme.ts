import {appId} from "./elementId"
import {getRange, isType, hslToString} from "./general"

type HS = {h: number, s: number}

const storagePlaceKey = "place"
const storageTimeKey = "time"

export const placeList = ["ocean", "desert", "sakura", "snow"] as const
export type Place = (typeof placeList)[number]

export const timeList = ["day", "dark"] as const
type Time = (typeof timeList)[number]

type Theme = { place: Place, time: Time }

export const initTheme = (): Theme => {
  const localPlace = localStorage.getItem(storagePlaceKey)
  const localTime = localStorage.getItem(storageTimeKey)
  return {
    place: isType(localPlace, placeList) ? localPlace : placeList[0],
    time: isType(localTime, timeList) ? localTime : timeList[0]
  }
}

export const storeTheme = () => {
  const app = document.getElementById(appId)
  const p = app?.dataset.location
  const t = app?.dataset.time

  if (p) {
    localStorage.setItem(storagePlaceKey, p)
  }
  if (t) {
    localStorage.setItem(storageTimeKey, t)
  }
}

export const getPlaceHS = (p: Place): (HS | null) => {
  if (isType(p, placeList)) {
    switch(p) {
      case placeList[0]: return {h: 210, s: 100}
      case placeList[1]: return {h: 30, s: 100}
      case placeList[2]: return {h: 330, s: 100}
      case placeList[3]: return {h: 0, s: 0}
    }
  }
  else {
    return null
  }
}

export const genWaveColors = (p: Place, n: number): (string | null)[] => {
  const hs = getPlaceHS(p)
  return getRange(0, n - 1).map(x =>
    hs ? hslToString({h: hs.h, s: hs.s, l: 25 + 15 * x}) : null
  )
}

export const updateFavicon = (p: Place) => {
  const hs = getPlaceHS(p)
  if (!hs) return
  const hueBody = hs.h + 180
  const hueWing = hs.h + 90
  const favicon = document.getElementById("favicon") as HTMLLinkElement
  favicon.href = `data:image/svg+xml,%3Csvg width="607.3904" height="706.2912" version="1.1" xmlns="http://www.w3.org/2000/svg"%3E%3Cg transform="matrix(6.0225 0 0 6.7012 -2224.401 -2056.598)" stroke="%23000" stroke-linejoin="round"%3E%3Cpath class="duck__body" d="m443.5 309.9a24 24 0 0 0-23.6 24.3c0 7.7 3.5 14.6 9 19.1a107.6 107.6 0 0 0-24.1 0.6 35.6 35.6 0 0 0-20.4-17.2 46.2 46.2 0 0 0-12 33.3 50.8 50.8 0 0 0 8.6 28.9 83 83 0 0 0 74.7 2.9 45 45 0 0 0 4.9-50.7 24.5 24.5 0 0 0 6.6-16.8 24 24 0 0 0-23.6-24.3z" fill="hsl(${hueBody}, ${hs.s}%, 50%)" stroke-width="6"/%3E%3C/g%3E%3Cg transform="matrix(6.667149 0 0 7.447053 -746.0243 -1506.621)"%3E%3Cg stroke="%23000"%3E%3Cpath class="duck__wing" d="m135.5048 257.7786 7.22847 4.47074-7.33672 3.53354 7.41453 4.90628-6.85445 3.67636c21.73408 8.06733 33.8847 5.97652 32.72092-8.33217-2.34775-9.62604-17.00029-12.53855-33.17275-8.25475z" fill="hsl(${hueWing}, ${hs.s}%, 50%)" stroke-width="2.83885"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E%0A`
}
