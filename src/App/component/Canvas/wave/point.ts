export type Point = {
  oscillate: (h: number, sp: number, sh: number) => void
  x: number
  getY: () => number
}

type P = {index: number, x: number, y: number}
export const point = (obj: P): Point => {
  let _radian = obj.index
  let _y = obj.y

  return {
    oscillate: (height, speed, shakiness) => {
      _radian += speed
      _y = obj.y + Math.sin(_radian) * height + Math.random() * shakiness
    },
    x: obj.x,
    getY: () => {
      return _y
    },
  }
}
