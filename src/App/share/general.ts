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

export const initiateIntObserver = (field: string): (() => void) => {
    const sections = [...document.querySelectorAll("[data-" + field +"]")]
    console.log('initiate')

    const onIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        const t = entry.target
        if (t instanceof HTMLElement) {
//           console.log(t.dataset[field])
          const e = document.getElementById(t.dataset[field] + "-btn")
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

    return () => {
      sections.forEach(section => {
        observer.unobserve(section)
      })
    }
  }


// export const stripHTMLWhitespaces =
  // (str: string) => str.replace(/>\s+</g, '><')
