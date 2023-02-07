import * as fc from "fast-check"

import {point} from "./point"

test("getRange", () => {
  fc.assert(
    fc.property(fc.integer({min: 0}),
                fc.integer({min: 0}),
                fc.integer({min: 0}), (index, x, y) => {
      const prop = {index, x, y}
      const pointMock = point(prop)

      // oscillating should alter only y position
      expect(pointMock.x).toBe(prop.x)
      expect(pointMock.getY()).toBe(prop.y)

      pointMock.oscillate(10, 1, 0)

      expect(pointMock.x).toBe(prop.x)
      expect(pointMock.getY()).not.toBe(prop.y)
    })
  )
})
