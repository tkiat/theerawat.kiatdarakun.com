import * as fc from 'fast-check'

import {getTrajectory} from './drawWaves'
import {mkWave} from './wave'

test('getTrajectory', () => {
  fc.assert(
    fc.property(fc.integer({min: 2, max: 10}),
                fc.integer({min: 960}),
                fc.integer({min: 1200}),
                fc.integer({min: 0, max: 960}),
                fc.integer({min: 0, max: 1200}),
                (numPoints, h, w, x, y) => {
      const viewport = {h, w}
      const wave = mkWave({
        index: 0,
        numPoints,
        from: {x, y},
        to: {x: w - x, y: h - y},
      })
      const wavePhy = {height: 3, speed: 4, shakiness: 5}

      const {curves, lines} = getTrajectory(wave, wavePhy, viewport)
      // trajectory consist of all curves from first to last point then ->
      // line to bottom right, line to bottom left, and line to the first point
      expect(curves.length).toBe(numPoints - 1)
      expect(lines.length).toBe(3)
    })
  )
})
