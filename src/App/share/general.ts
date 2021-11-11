export const capitalize = (s: string) =>
  s ? s[0].toUpperCase() + s.slice(1) : ''

export const getRange = (from: number, to: number) =>
  (from <= to ? [...Array(to - from + 1).keys()].map(i => i + from) : [])

export type Hsl = {h: number, s: number, l: number}
export const hslToString = ({h, s, l}: Hsl) =>
  'hsl(' + h + ',' + s + '%,' + l + '%)'

export type Hsla = {h: number, s: number, l: number, a: number}
export const hslaToString = ({h, s, l, a}: Hsla) =>
  'hsl(' + h + ',' + s + '%,' + l + '%,' + a + ')'

export const isMobile = () => window.matchMedia('(max-width: 768px)').matches

export const isType = <T>(elem: unknown, arr: readonly T[]): elem is T =>
  arr.includes(elem as T)

export const pathToTestId = (path: string) =>
  'page' + path.toLowerCase().split('/').join('-')

export const splitCamelCase = (s: string) => s.replace(/([A-Z])/g, ' $1')

// export const stripHTMLWhitespaces =
  // (str: string) => str.replace(/>\s+</g, '><')
