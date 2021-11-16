import {getRange, hslToString, hslaToString} from 'src/App/share/general'
import {BaseTheme, baseThemes, getBaseThemeHS} from './base'
import {Time, times} from './time'

// definitions ----------------------------------------------------------------
export const duckBeakKey = 'duckBeak' as const
export const duckBodyKey = 'duckBody' as const
export const duckWingKey = 'duckWing' as const
export const tubeStrokeKey = 'tubeStroke' as const
export const tubeWaterKey = 'tubeWater' as const
export const wavesKey = 'waves' as const

export const duckKeys = [duckBeakKey, duckBodyKey, duckWingKey] as const
export const tubeKeys = [tubeStrokeKey, tubeWaterKey] as const

export const wavesSubKeys = ['waveFront', 'waveMiddle', 'waveBack'] as const

export type DuckAndTubeKeys = typeof duckKeys[number]
                            | typeof tubeKeys[number]
export type WavesKey = typeof wavesKey

type Mapping<T> = Record<BaseTheme, Record<Time, T>>
type MappingFunc<T> = (base: BaseTheme, time: Time) => T

export type UserAdjustable<T> = {custom: T, mapping: Mapping<T>}

// utilities ------------------------------------------------------------------
export const mkLocalKey = (x: string) => 'custom-' + x + '-color'

const mkMapping = <T>(f: MappingFunc<T>) => baseThemes.reduce((acc, b) => {
  const x = times.reduce((acc, t) => ({...acc, [t]: f(b, t)}), {})
  return {...acc, [b]: x}
}, {} as Mapping<T>)

export const mkDuckBeak = (key: string): UserAdjustable<string> => {
  const f = (base: BaseTheme, time: Time): string => {
    const {h, s} = getBaseThemeHS(base)
    return hslToString({h: h + 270, s, l: time === 'day' ? 50 : 40})
  }
  return {
    custom: localStorage.getItem(mkLocalKey(key)) ?? 'rgb(0, 0, 0)',
    mapping: mkMapping(f),
  }
}
export const mkDuckBody = (key: string): UserAdjustable<string> => {
  const f = (base: BaseTheme, time: Time): string => {
    const {h, s} = getBaseThemeHS(base)
    return hslToString({h: h + 180, s, l: time === 'day' ? 50 : 40})
  }
  return {
    custom: localStorage.getItem(mkLocalKey(key)) ?? 'rgb(0, 0, 0)',
    mapping: mkMapping(f),
  }
}
export const mkDuckWing = (key: string): UserAdjustable<string> => {
  const f = (base: BaseTheme, time: Time): string => {
    const {h, s} = getBaseThemeHS(base)
    return hslToString({h: h + 90, s, l: time === 'day' ? 50 : 40})
  }
  return {
    custom: localStorage.getItem(mkLocalKey(key)) ?? 'rgb(0, 0, 0)',
    mapping: mkMapping(f),
  }
}

export const mkTubeStroke = (key: string): UserAdjustable<string> => {
  const f = (base: BaseTheme, time: Time): string =>
    hslToString({...getBaseThemeHS(base), l: time === 'day' ? 25 : 65})
  return {
    custom: localStorage.getItem(mkLocalKey(key)) ?? 'rgb(128, 128, 128)',
    mapping: mkMapping(f),
  }
}

export const mkTubeWater = (key: string): UserAdjustable<string> => {
  const f = (base: BaseTheme, time: Time): string => {
    const {h, s} = getBaseThemeHS(base)
    const [l, a] = time === 'day' ? [50, 0.9] : [40, 0.8]
    return hslaToString({h: h + 180, s, l, a})
  }
  return {
    custom: localStorage.getItem(mkLocalKey(key)) ?? 'rgb(128, 128, 128)',
    mapping: mkMapping(f),
  }
}

export const mkWaves = (keys: readonly string[]): UserAdjustable<string[]> => {
  const f = (base: BaseTheme, time: Time): string[] => {
    const {h, s} = getBaseThemeHS(base)
    const [custom, step] = time === 'day' ? [25, 25] : [15, 15]
    return getRange(0, keys.length - 1).
      map(x => hslToString({h, s, l: custom + step * x}))
  }
  return {
    custom: keys.map(x => localStorage.getItem(mkLocalKey(x)) ??
                          'rgb(0, 0, 0)'),
    mapping: mkMapping(f),
  }
}
