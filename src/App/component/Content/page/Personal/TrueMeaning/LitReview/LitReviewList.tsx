import React from "react"

import {DisplayListItems} from "../../../../share"

type P = {children: string | JSX.Element | JSX.Element[]}
export const LitReviewList = ({children}: P): React.ReactElement =>
  <details>
    <summary style={{outline: "none", userSelect: "none"}} className="highlight">
      <u>Literature Review</u>
    </summary>
    {children}
  </details>
