export const capitalize = (s: string) =>
  s ? s[0].toUpperCase() + s.slice(1) : ""

export const findObjValRecursive = (o: unknown, keys: string[]): (undefined | null | unknown) => {
  const k = keys[0]
  if (o === undefined) {
    return undefined
  } else if (o !== null && hasOwnPropertyTS(o, k)) {
    return keys.length === 1 ? o[k] : findObjValRecursive(o[k], keys.slice(1))
  } else {
    return null
  }
}

export const getRange = (from: number, to: number) =>
  (from <= to ? [...Array(to - from + 1).keys()].map(i => i + from) : [])

export const hasOwnPropertyTS = <Y extends PropertyKey>(obj: object, prop: Y):
  obj is Record<Y, unknown> => obj.hasOwnProperty(prop)

export type Hsl = {h: number, s: number, l: number}
export const hslToString = ({h, s, l}: Hsl) =>
  "hsl(" + h + "," + s + "%," + l + "%)"

export const isMobile = () => window.matchMedia("(max-width: 768px)").matches

export const isType = <T>(elem: unknown, arr: readonly T[]): elem is T =>
  arr.includes(elem as T)

export const initInPageNavButtons = (buttons: NodeListOf<Element>) => {
  buttons.forEach(e => {
    e.addEventListener("click", () => {
      const s = document.getElementById("section" + e.id.slice(3))
      if (s && s.parentNode) {
        (s.parentNode as HTMLElement).scrollTop = s.offsetTop
      }
    })
  })
}

export const initIntObserver = (sections: NodeListOf<Element>): IntersectionObserver => {
  const onIntersect = (entries: IntersectionObserverEntry[]) => {
    entries.forEach(entry => {
      const t = entry.target
      if (t instanceof HTMLElement) {
        const e = document.getElementById("btn" + t.id.slice(7))
        if (e) {
          e.style.opacity = entry.intersectionRatio > 0 ? "1" : "0.2"
        }
      }
    })
  }

  const observer = new IntersectionObserver(onIntersect, {
    rootMargin: "0px",
    threshold: 0,
  })

  sections.forEach(section => {
    observer.observe(section)
  })

  return observer
}
