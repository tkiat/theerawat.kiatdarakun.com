export type Hsla = {h: number, s: number, l: number, a: number}
export const hslaToString = ({h, s, l, a}: Hsla) =>
  'hsl(' + h + ',' + s + '%,' + l + '%,' + a + ')'

export const pathToTestId = (path: string) =>
  'page' + path.toLowerCase().split('/').join('-')

export const splitCamelCase = (s: string) => s.replace(/([A-Z])/g, ' $1')

export const stripHTMLWhitespaces =
  (str: string) => str.replace(/>\s+</g, '><')
