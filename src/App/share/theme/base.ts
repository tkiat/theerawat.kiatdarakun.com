import {Status} from '@types-basic'
import {isType} from '../general'
import {mayApplyCustomStyle} from './util/customStyle'

export type BaseTheme = (typeof baseThemes)[number]
export const baseThemes = ['ocean', 'desert', 'sakura', 'snow'] as const

export const getBaseThemeHS = (t: BaseTheme) => {
  switch(t) {
    case 'ocean': return {h: 210, s: 100}
    case 'desert': return {h: 30, s: 100}
    case 'sakura': return {h: 330, s: 100}
    case 'snow': return {h: 0, s: 0}
  }
}

const localCustomBaseThemeKey = 'theme-custom-base'

export const mayApplyBaseTheme = (): Promise<Status> => {
  const id = 'theme-base'
  const rules = baseThemes.map(t => {
    const {h, s} = getBaseThemeHS(t)
    return "[theme-base='" + t + "']{--hue:" + h + ";--saturation:" + s + "%;}"
  })
  return mayApplyCustomStyle(id, rules)
}

export const mkCustomBaseTheme = (): BaseTheme => {
  const l = localStorage.getItem(localCustomBaseThemeKey)
  return isType(l, baseThemes) ? l : 'ocean'
}

export const storeCustomBaseTheme = (b: BaseTheme) =>
  localStorage.setItem(localCustomBaseThemeKey, b)
