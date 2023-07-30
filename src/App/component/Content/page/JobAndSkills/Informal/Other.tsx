import React from "react"

import {DisplayListItems} from "../../../share"

export const Other = ({content}: {content: unknown}): React.ReactElement =>
  <section>
    <h2>Other</h2>

    <section>
      <h3><u>Content</u></h3>

      <h4 className="abandoned highlight">A Freedom Blog (Abandoned)</h4>
      <p className="abandoned">
        This <a href="https://a-freedom-blog.kiatdarakun.com">personal blog</a> is about freedom-friendly stuff of mixed qualities on many topics. I have abandoned it since 2021-12 due to the shift of my persuits.
      </p>
    </section>

    <section>
      <h3><u>Learning</u></h3>

      <h4 className="highlight">Course</h4>
      <DisplayListItems
        content={content}
        keys={["other", "learning", "course"]}
      />
    </section>
  </section>
