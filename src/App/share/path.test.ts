import {Path, adaptPathToUrl, mainPaths, pathObject} from "./path"

const a: Path = {
  current: mainPaths[0],
  mapping: {
    "professional": "formal",
    personal: "bio",
  }
}

describe.each(mainPaths)("mainPath: %s", m => {
  pathObject[m].forEach(s => {
    const validUrl = "/" + m + "/" + s
    it(`the valid url ${validUrl} should correctly update the path`, () => {
      expect(adaptPathToUrl(a, validUrl).mapping[m]).toBe(s)
    })

    const invalidUrlMain = "/invalid/" + s
    it(`the invalid url ${invalidUrlMain} shouldn"t update the path at all`, () => {
      expect(adaptPathToUrl(a, invalidUrlMain)).toStrictEqual(a)
    })

    const invalidUrlSub = "/" + m + "/invalid"
    it(`the invalid url ${invalidUrlSub} should update only the main path`, () => {
      expect(adaptPathToUrl(a, invalidUrlSub).current).toBe(m)
      expect(adaptPathToUrl(a, invalidUrlSub).mapping).toStrictEqual(a.mapping)
    })
  })
})
