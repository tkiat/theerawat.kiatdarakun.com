import {isType} from './general'

// definitions ----------------------------------------------------------------
export type PathObject = typeof pathObject
export const pathObject = {
  'about': ['hi', 'character', 'story', 'credits'],
  'activity': ['create', 'digest'],
  'resume': [''],
} as const

export type MainPath = keyof PathObject
export const mainPaths: MainPath[] = Object.keys(pathObject) as MainPath[]

type SubPath = PathObject[MainPath][number]
const subPaths: SubPath[] =
  Object.values(pathObject).flat(1) as SubPath[]

export type Path = {
  current: MainPath,
  mapping: Record<MainPath, SubPath>
}

const localCurrentPathKey = 'path-current'
const localMappingPrefix = 'path-mapping-'

// utilities ------------------------------------------------------------------
export const adaptPathToUrl = (p: Path,
                               urlPath: string = window.location.pathname):
                               Path => {
  const temp = JSON.parse(JSON.stringify(p)) as Path
  const [p1, p2] = urlPath.split('/').filter(x => x !== '')

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
  }, {} as Path['mapping'])

  return {current: fc, mapping: fm}
}

// prioritize current url > local storage > first index
export const mkPath = (): Path => adaptPathToUrl(mkLocalPath())

export const storePath = (p: Path) => {
  localStorage.setItem(localCurrentPathKey, p.current)
  mainPaths.map(x =>
    localStorage.setItem(localMappingPrefix + x, p.mapping[x]))
}
