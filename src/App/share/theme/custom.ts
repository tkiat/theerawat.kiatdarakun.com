import {getRange, hslToString, hslaToString} from 'src/App/share/general'
import {BaseTheme, baseThemes, getBaseThemeHS} from './base'
import {Time, times} from './time'

// definitions ----------------------------------------------------------------
export const duckBeakKey = 'duckBeak' as const
export const duckBodyKey = 'duckBody' as const
export const duckWingKey = 'duckWing' as const
export const duckKeys = [duckBeakKey, duckBodyKey, duckWingKey] as const

export const tubeStrokeKey = 'tubeStroke' as const
export const tubeWaterKey = 'tubeWater' as const
export const tubeKeys = [tubeStrokeKey, tubeWaterKey] as const

export type DuckAndTubeKeys = typeof duckKeys[number]
                            | typeof tubeKeys[number]

export const wavesKey = 'waves' as const
export const wavesSubKeys = ['waveFront', 'waveMiddle', 'waveBack'] as const

export type WavesKey = typeof wavesKey

type Mapping<T> = Record<BaseTheme, Record<Time, T>>
type MappingFunc<T> = (base: BaseTheme, time: Time) => T

// utilities ------------------------------------------------------------------
export const addCustomPrefix = (x: string) => 'custom-' + x

const mkDefaultMapping = <T>(f: MappingFunc<T>) => baseThemes.reduce((acc, b) => {
  const x = times.reduce((acc, t) => ({...acc, [t]: f(b, t)}), {})
  return {...acc, [b]: x}
}, {} as Mapping<T>)

const duckBeakMapping = mkDefaultMapping(
  (base: BaseTheme, time: Time): string => {
    const {h, s} = getBaseThemeHS(base)
    return hslToString({h: h + 270, s, l: time === 'day' ? 50 : 40})
  }
)
const duckBodyMapping = mkDefaultMapping(
  (base: BaseTheme, time: Time): string => {
    const {h, s} = getBaseThemeHS(base)
    return hslToString({h: h + 180, s, l: time === 'day' ? 50 : 40})
  }
)
const duckWingMapping = mkDefaultMapping(
  (base: BaseTheme, time: Time): string => {
    const {h, s} = getBaseThemeHS(base)
    return hslToString({h: h + 90, s, l: time === 'day' ? 50 : 40})
  }
)
const tubeStrokeMapping = mkDefaultMapping(
  (base: BaseTheme, time: Time): string =>
    hslToString({...getBaseThemeHS(base), l: time === 'day' ? 25 : 65})
)
const tubeWaterMapping = mkDefaultMapping(
  (base: BaseTheme, time: Time): string => {
    const {h, s} = getBaseThemeHS(base)
    const [l, a] = time === 'day' ? [50, 0.9] : [40, 0.8]
    return hslaToString({h: h + 180, s, l, a})
  }
)
const wavesMapping = mkDefaultMapping(
  (base: BaseTheme, time: Time): string[] => {
    const {h, s} = getBaseThemeHS(base)
    const [custom, step] = time === 'day' ? [25, 25] : [15, 15]
    return getRange(0, wavesSubKeys.length - 1).
      map(x => hslToString({h, s, l: custom + step * x}))
  }
)
export const defaultMappings = {
  duckBeak: duckBeakMapping,
  duckBody: duckBodyMapping,
  duckWing: duckWingMapping,
  tubeStroke: tubeStrokeMapping,
  tubeWater: tubeWaterMapping,
  waves: wavesMapping,
}
