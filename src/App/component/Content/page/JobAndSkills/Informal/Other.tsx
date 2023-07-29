import React from "react"

import {RenderConsumedMedia} from "../../../share"

export const Other = ({content}: {content: unknown}): React.ReactElement =>
  <section>
    <h2>Other</h2>

    <section>
      <h3><u>Study</u></h3>

      <h4 className="highlight">Course</h4>
      <RenderConsumedMedia
        content={content}
        keys={["other", "study", "course"]}
      />
    </section>
  </section>
