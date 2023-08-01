import {isType} from "./general"

// definitions ----------------------------------------------------------------
export type PathObject = typeof pathObject
export const pathObject = {
  "jobs & Skills": ["formal", "informal"],
  "personal": ["bio", "trueMeaning", "hobby"],
} as const

export const paths = Object.entries(pathObject).
  map(([k, v]) => v.length ? v.map(x => encodeURI(k) + "/" + x) : [k]).flat(1)

const numMainPaths = Object.keys(pathObject).length

const numDucksMain = numMainPaths
const numDuckSetting = 1
export const numDucks = numDucksMain + numDuckSetting


export type MainPath = keyof PathObject
export const mainPaths: MainPath[] = Object.keys(pathObject) as MainPath[]

type SubPath = PathObject[MainPath][number]
export const subPaths: SubPath[] =
  Object.values(pathObject).flat(1) as SubPath[]

export type Path = {
  current: MainPath,
  mapping: Record<MainPath, SubPath>
}

const localCurrentPathKey = "path-current"
const localMappingPrefix = "path-mapping-"

// utilities ------------------------------------------------------------------
export const adaptPathToUrl = (p: Path,
                               urlPath: string = window.location.pathname):
                               Path => {
  const temp = JSON.parse(JSON.stringify(p)) as Path
  const [p1, p2] = urlPath.split("/").filter(x => x !== "")

  const m = mainPaths.find(x => p1 === x)
  if (isType(m, mainPaths)) {
    temp.current = m

    const s = pathObject[m].map(x => x).find(x => p2 === x)
    if (isType(s, subPaths)) temp.mapping[m] = s
  }
  return temp
}

const mkLocalPath = (): Path => {
  const l = localStorage.getItem(localCurrentPathKey)
  const fc = isType(l, mainPaths) ? l : mainPaths[0]

  const fm = mainPaths.reduce((acc, k) => {
    const l = localStorage.getItem(localMappingPrefix + k)
    const v = isType(l, subPaths) ? l : pathObject[k][0]
    return {...acc, [k as MainPath]: v as SubPath}
  }, {} as Path["mapping"])

  return {current: fc, mapping: fm}
}

export const getSubpageIndex = (page: MainPath, subpage: string) =>
  pathObject[page].findIndex(i => i === subpage)

// prioritize current url > local storage > first index
export const mkPath = (): Path => adaptPathToUrl(mkLocalPath())

export const storePath = (p: Path) => {
  localStorage.setItem(localCurrentPathKey, p.current)
  mainPaths.map(x => {
    if (x === p.current) {
      const [subpage] = window.location.pathname.split("/").slice(-1)
      localStorage.setItem(localMappingPrefix + x, subpage)
    } else {
      localStorage.setItem(localMappingPrefix + x, p.mapping[x])
    }
  })
}
