import * as fc from 'fast-check'

import * as g from './general'

test('capitalize', () => {
  fc.assert(
    fc.property(fc.char(), fc.string(), (c, s) => {
      expect(g.capitalize(c + s)).toEqual(c.toUpperCase() + s)
    })
  )
})

test('getRange', () => {
  fc.assert(
    fc.property(fc.integer(0, 200), fc.integer(100, 300), (from, to) => {
      const temp = g.getRange(from, to)
      if(from <= to) {
        expect(temp[0]).toEqual(from)
        expect(temp[temp.length - 1]).toEqual(to)
      } else {
        expect(temp.length).toEqual(0)
      }
    })
  )
})
