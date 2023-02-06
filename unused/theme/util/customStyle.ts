import {Status} from '@types-basic'

const applyCustomStyle = (c: CSSStyleSheet, rules: string[]) => {
  rules.map((x, i) => {
    if (c.cssRules[i]) c.deleteRule(i)
    c.insertRule(x, i)
  })
}

export const mayApplyCustomStyle = async (id: string, rules: string[]):
  Promise<Status> => {
  let e = document.getElementById(id) as HTMLStyleElement
  if (!e) e = await mkStyleElement(id)
  if (!e.sheet) {
    console.error('mayApplyCustomStyle: HTMLStyleElement not found')
    return 1
  } else {
    applyCustomStyle(e.sheet, rules)
    return 0
  }
}

const mkStyleElement = async (id: string): Promise<HTMLStyleElement> => {
  const e = document.createElement('style')
  e.id = id
  document.head.appendChild(e)
  return e
}
