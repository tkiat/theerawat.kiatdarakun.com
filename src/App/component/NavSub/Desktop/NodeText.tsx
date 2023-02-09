import {Link} from "@reach/router"
import React from "react"

import * as ls from "@assets/tubeLetter"
import {NodeHighlighter} from "./NodeHighlighter"

type P = {[k in "border" | "mask"]: {[index: string]: React.ReactElement}}
export const letters: P = {
  border: {
//     A: <ls.UpperABorder />,
    C: <ls.UpperCBorder />,
    D: <ls.UpperDBorder />,
    E: <ls.UpperEBorder />,
//     F: <ls.UpperFBorder />,
//     G: <ls.UpperGBorder />,
    H: <ls.UpperHBorder />,
//     I: <ls.UpperIBorder />,
//     L: <ls.UpperLBorder />,
//     M: <ls.UpperMBorder />,
//     O: <ls.UpperOBorder />,
//     P: <ls.UpperPBorder />,
//     Q: <ls.UpperQBorder />,
//     R: <ls.UpperRBorder />,
    S: <ls.UpperSBorder />,
//     T: <ls.UpperTBorder />,
//     U: <ls.UpperUBorder />,
//     V: <ls.UpperVBorder />,
//     W: <ls.UpperWBorder />,

    a: <ls.LowerABorder />,
//     b: <ls.LowerBBorder />,
    c: <ls.LowerCBorder />,
//     d: <ls.LowerDBorder />,
    e: <ls.LowerEBorder />,
//     f: <ls.LowerFBorder />,
    g: <ls.LowerGBorder />,
    h: <ls.LowerHBorder />,
    i: <ls.LowerIBorder />,
//     k: <ls.LowerKBorder />,
//     l: <ls.LowerLBorder />,
//     m: <ls.LowerMBorder />,
    n: <ls.LowerNBorder />,
    o: <ls.LowerOBorder />,
//     p: <ls.LowerPBorder />,
    r: <ls.LowerRBorder />,
    s: <ls.LowerSBorder />,
    t: <ls.LowerTBorder />,
//     u: <ls.LowerUBorder />,
    v: <ls.LowerVBorder />,
//     w: <ls.LowerWBorder />,
    y: <ls.LowerYBorder />,
  },
  mask: {
//     A: <ls.UpperAMask />,
    C: <ls.UpperCMask />,
    D: <ls.UpperDMask />,
    E: <ls.UpperEMask />,
//     F: <ls.UpperFMask />,
//     G: <ls.UpperGMask />,
    H: <ls.UpperHMask />,
//     I: <ls.UpperIMask />,
//     L: <ls.UpperLMask />,
//     M: <ls.UpperMMask />,
//     O: <ls.UpperOMask />,
//     P: <ls.UpperPMask />,
//     Q: <ls.UpperQMask />,
//     R: <ls.UpperRMask />,
    S: <ls.UpperSMask />,
//     T: <ls.UpperTMask />,
//     U: <ls.UpperUMask />,
//     V: <ls.UpperVMask />,
//     W: <ls.UpperWMask />,

    a: <ls.LowerAMask />,
//     b: <ls.LowerBMask />,
    c: <ls.LowerCMask />,
//     d: <ls.LowerDMask />,
    e: <ls.LowerEMask />,
//     f: <ls.LowerFMask />,
    g: <ls.LowerGMask />,
    h: <ls.LowerHMask />,
    i: <ls.LowerIMask />,
//     k: <ls.LowerKMask />,
//     l: <ls.LowerLMask />,
//     m: <ls.LowerMMask />,
    n: <ls.LowerNMask />,
    o: <ls.LowerOMask />,
//     p: <ls.LowerPMask />,
    r: <ls.LowerRMask />,
    s: <ls.LowerSMask />,
    t: <ls.LowerTMask />,
//     u: <ls.LowerUMask />,
    v: <ls.LowerVMask />,
//     w: <ls.LowerWMask />,
    y: <ls.LowerYMask />,
  },
}

const Text = ({word}: {word: string}): React.ReactElement =>
  <>
    {Array.from(word).map((letter, i) =>
      <div key={i} className="letter">
        {letters.border[letter]}{letters.mask[letter]}
      </div>
    )}
  </>

type Q = {
  cur: number
  i: number
  onclick: React.MouseEventHandler<HTMLAnchorElement>
  to: string
  word: string
}
export const NodeText = ({cur, i, onclick, to, word}: Q) =>
  <Link className={"nav-tube__link"} to={to} onClick={onclick}
        draggable="false">
    <Text word={word} />
    <NodeHighlighter i={i * 2} visible={cur === i} />
  </Link>
