import React from "react"

import {ValveBorder, ValveMask} from "@assets/valve"

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
