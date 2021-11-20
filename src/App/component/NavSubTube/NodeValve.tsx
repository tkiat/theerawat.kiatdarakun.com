import React from "react"

import {ReactComponent as ValveBorder} from "./NodeValve/valve-border.svg"
import {ReactComponent as ValveMask} from "./NodeValve/valve-mask.svg"
import {NodeHighlighter} from "./NodeHighlighter"

type P = {cur: number, i: number}
export const NodeValve = ({cur, i}: P) =>
  <>
    <div className="valve">
      <ValveBorder />
      <ValveMask />
    </div>
    <NodeHighlighter i={i * 2 + 1} visible={cur === i} />
  </>
