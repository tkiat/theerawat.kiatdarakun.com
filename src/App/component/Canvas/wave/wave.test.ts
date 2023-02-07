import * as fc from "fast-check"

import {mkWave, mkWaveLine} from "./wave"
import {mainPaths} from "@app/share"

test("check all points on wave after creation", () => {
  const y = 600
  const waveProps = {
    index: 0,
    numPoints: 5,
    from: {x: 0, y},
    to: {x: 1280, y},
  }
  const wave = mkWave(waveProps)

  wave.points.map((point, i) => {
    expect(point.x).toStrictEqual([0, 320, 640, 960, 1280][i])
    expect(point.getY()).toStrictEqual(600)
  })
})

describe.each(mainPaths)("mainPath: %s", m => {
  fc.assert(fc.property(fc.integer({min: 200, max: 1200}),
                        fc.integer({min: 200, max: 1200}), (h, w) => {
    const viewport = {h, w}

      const line = mkWaveLine(viewport, m)
      it(`should satisfy "line.from.x <= line.to.x"`, () => {
        expect(line.from.x).toBeLessThanOrEqual(line.to.x)
      })

      it(`should satisfy "line.to.x <= viewport width"`, () => {
        expect(line.to.x).toBeLessThanOrEqual(w)
      })

      it(`should satisfy "line.from.y <= line.to.y"`, () => {
        expect(line.from.y).toBeLessThanOrEqual(line.to.y)
      })

      it(`should satisfy "line.to.y <= viewport height"`, () => {
        expect(line.to.y).toBeLessThanOrEqual(h)
      })
    })
  )
})
