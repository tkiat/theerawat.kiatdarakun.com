import {Link} from "@reach/router"
import React from "react"

import {NodeHighlighter} from "./NodeHighlighter"
import {mapping} from "./TextMap"

type P = {
  cur: number
  i: number
  onclick: React.MouseEventHandler<HTMLAnchorElement>
  to: string
  word: string
}
export const NodeText = ({cur, i, onclick, to, word}: P) =>
  <Link className={"nav-tube__link"} to={to} onClick={onclick}
        draggable="false">
    <Text word={word} />
    <NodeHighlighter i={i * 2} visible={cur === i} />
  </Link>

const Text = ({word}: {word: string}): React.ReactElement =>
  <>
    {Array.from(word).map((letter, i) =>
      <div key={i} className="letter">
        {mapping.border[letter]}{mapping.mask[letter]}
      </div>
    )}
  </>
