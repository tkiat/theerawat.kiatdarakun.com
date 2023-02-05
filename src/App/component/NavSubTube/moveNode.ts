import {appId} from 'src/App/share/elementId'
import {moveWater} from './moveWater'

const isPositionValid = (x: number): boolean => x >= 0 && x % 2 === 0

export const moveNode = (
  from: number,
  to: number,
  stepMs: number,
  callback: Function
): void => {
  const m = document.getElementById(appId)

  new Promise<void>((resolve, reject) => {
    if (from === to) return {then: function() {}} // break promise chain
    if (isPositionValid(from) && isPositionValid(to)) {
      resolve()
    } else {
      reject('invalid input')
    }
  }).then(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      callback()
      return {then: function() {}}
    }
  }).then(() =>
    new Promise<void>((resolve, reject) => {
      if (!m) {
        callback()
        reject('moveNode.ts: element of id "main" not found')
      } else {
        m.classList.toggle('waiting')
        resolve()
      }
    })
  ).then(() =>
    new Promise<number>(resolve => resolve(moveWater(from, to, stepMs)))
  ).then(delay => new Promise(resolve => {setTimeout(resolve, delay)})
  ).then(() => {
    callback()
    m?.classList.toggle('waiting')
  })
  .catch(msg => console.error(msg))
}
