import React from "react"

import {DisplayListItems} from "../../../share"

export const LitReview = ({content}: {content: unknown}): React.ReactElement =>
  <>
    <h1>Literature Review</h1>

    <h2><u>Individual Scope</u></h2>

    <h3 className="highlight">Metaphysics</h3>
    <DisplayListItems
      content={content}
      keys={["litreview", "individual", "metaphysics"]}
    />

    <h2><u>Societal Scope</u></h2>

    <h3 className="highlight">Animal Welfare</h3>
    <DisplayListItems
      content={content}
      keys={["litreview", "society", "animal welfare"]}
    />

    <h3 className="highlight">Religion</h3>
    <DisplayListItems
      content={content}
      keys={["litreview", "society", "religion"]}
    />
  </>
