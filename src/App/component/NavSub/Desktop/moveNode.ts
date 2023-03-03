import {moveWater} from "./moveWater"

const isPositionValid = (x: number): boolean => x >= 0 && x % 2 === 0

export const moveNode = (
  from: number,
  to: number,
  stepMs: number,
  callback: Function
): void => {
  const app = document.getElementById(import.meta.env.VITE_APPID)

  new Promise<void>((resolve, reject) => {
    if (from === to) return {then: function() {}} // break promise chain
    if (isPositionValid(from) && isPositionValid(to)) {
      resolve()
    } else {
      reject("invalid input")
    }
  }).then(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      callback()
      return {then: function() {}}
    }
  }).then(() =>
    new Promise<void>((resolve, reject) => {
      if (!app) {
        callback()
        reject(`moveNode.ts: element of id ${import.meta.env.VITE_APPID} not found`)
      } else {
        app.classList.toggle("waiting")
        resolve()
      }
    })
  ).then(() =>
    new Promise<number>(resolve => resolve(moveWater(from, to, stepMs)))
  ).then(delay => new Promise(resolve => {setTimeout(resolve, delay)})
  ).then(() => {
    callback()
    app?.classList.toggle("waiting")
  })
  .catch(msg => console.error(msg))
}
