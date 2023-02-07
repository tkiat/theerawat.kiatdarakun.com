import {Point} from "./point"
import {Wave} from "./wave"

type NumItem = number

const getMidY = (a: Point, b: Point) => (a.getY() + b.getY()) / 2
const getMidDeg = (a: Point, b: Point) =>
  (Math.atan2(b.getY() - a.getY(), b.x - a.x) * 180) / Math.PI

const mkItemsOffsetDeg = (n: NumItem, ps: Point[]): number[] =>
  ps.flatMap((_, i, arr) => i < n ? getMidDeg(arr[i], arr[i + 1]) : [])

const mkItemsOffsetY = (n: NumItem, ps: Point[]): number[] =>
  ps.flatMap((_, i, arr) => i < n ? getMidY(arr[i], arr[i + 1]) : [])

export const moveItemsAlongWave =
  (items: NodeListOf<HTMLElement>, wave: Wave, userOffset: number) => {
  const n = items.length
  if (n !== wave.points.length - 1) return

  const offsetDeg = mkItemsOffsetDeg(n, wave.points)
  const offsetY = mkItemsOffsetY(n, wave.points)

  Array.prototype.forEach.call(items, (x, i) => {
    const y = offsetY[i] - x.clientHeight + userOffset
    x.style.transform = `translateY(${y}px) rotate(${offsetDeg[i]}deg)`
    return x
  })
}
