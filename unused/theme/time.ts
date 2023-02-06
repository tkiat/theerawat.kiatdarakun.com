import {isType} from '../general'

export type Time = (typeof times)[number]
export const times = ['day', 'dark'] as const

const localKey = 'time'

export const mkTime = () => {
  const fallback: Time = window &&
    window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'day'
  const t = localStorage.getItem(localKey)
  return isType(t, times) ? t : fallback
}

export const storeTime = (t: Time) => localStorage.setItem(localKey, t)
