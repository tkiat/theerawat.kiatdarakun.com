import React from "react"

import {DisplayListItems} from "../../../share"

export const Other = ({content}: {content: unknown}): React.ReactElement =>
  <>
    <h1>Other</h1>

    <h2><u>Content</u></h2>

    <h3 className="abandoned highlight">A Freedom Blog (Abandoned)</h3>

    <p className="abandoned">This <a href="https://a-freedom-blog.kiatdarakun.com">personal blog</a> is about freedom-friendly stuff of mixed qualities on many topics. I have abandoned it since 2021-12 due to the shift of my persuits.</p>

    <h2><u>Learning</u></h2>

    <h3 className="highlight">Course</h3>
    <DisplayListItems
      content={content}
      keys={["other", "learning", "course"]}
    />
  </>
