import {Coordinate, Dimension, Line} from '@types-basic'
import {MainPath, mainPaths} from 'src/App/share/path'
import {point, Point} from './point'

type MkWaveArgument = {
  index: number
  numPoints: number
  from: Coordinate
  to: Coordinate
}

export type Wave = {points: Point[]}
export type WaveConfigs = {waves: Wave[], physics: WavePhysics}
export type WavePhysics = {height: number, speed: number, shakiness: number}

const localWavePhysicsKey = {
  h: 'wave-height',
  sp: 'wave-speed',
  sh: 'wave-shakiness',
}

const mkPoints = (a: MkWaveArgument) => {
  const pointGapX = (a.to.x - a.from.x) / (a.numPoints - 1)
  const pointGapY = (a.to.y - a.from.y) / (a.numPoints - 1)

  return [...Array(a.numPoints).keys()].reduce(
    (points, cur) => [
      ...points,
      point({
        index: a.index + cur,

        x: a.from.x + pointGapX * cur,
        y: a.from.y + pointGapY * cur,
      }),
    ],
    [] as Point[]
  )
}

export const mkWave = (a: MkWaveArgument): Wave => ({
  points: mkPoints(a),
})

export const mkWaveLine = (d: Dimension, p: MainPath): Line => [
  {from: {x: 0, y: d.h - 30,}, to: {x: d.w, y: d.h - 30,},},
  {from: {x: 0, y: d.h - 30,}, to: {x: d.w, y: d.h - 30,},},
][mainPaths.indexOf(p)]

export const mkWavePhysics = (): WavePhysics => {
  const s = window && window.matchMedia
    ('(prefers-reduced-motion: reduce)').matches ? '0' : '0.05'

  const h = localStorage.getItem(localWavePhysicsKey.h) ?? '10'
  const sp = localStorage.getItem(localWavePhysicsKey.sp) ?? s
  const sh = localStorage.getItem(localWavePhysicsKey.sh) ?? '0'
  return {
    height: parseFloat(h),
    speed: parseFloat(sp),
    shakiness: parseFloat(sh),
  }
}

export const mkWaves =
  (numWaves: number, numPoints: number, d: Dimension, p: MainPath):
  Wave[] => {
  const {from, to} = mkWaveLine(d, p)
  return [...Array(numWaves).keys()]
    .map(i => mkWave({index: i, numPoints, from, to}))
}

export const storeWavePhysics = (p: WavePhysics) => {
  localStorage.setItem(localWavePhysicsKey.h, p.height.toString())
  localStorage.setItem(localWavePhysicsKey.sp, p.speed.toString())
  localStorage.setItem(localWavePhysicsKey.sh, p.shakiness.toString())
}
