import React from "react"

import {DisplayListItems} from "../../../share"

export const LitReview = ({content}: {content: unknown}): React.ReactElement =>
  <>
    <h1><u>Literature Review</u></h1>

    <section>
      <h2>Individual Scope</h2>

      <section>
        <h3 className="highlight">Metaphysics</h3>
        <DisplayListItems
          content={content}
          keys={["litreview", "individual", "metaphysics"]}
        />
      </section>
    </section>

    <section>
      <h2>Societal Scope</h2>

      <section>
        <h3 className="highlight">Animal Welfare</h3>
        <DisplayListItems
          content={content}
          keys={["litreview", "society", "animal welfare"]}
        />
      </section>

      <section>
        <h3 className="highlight">Religion</h3>
        <DisplayListItems
          content={content}
          keys={["litreview", "society", "religion"]}
        />
      </section>
    </section>
  </>
