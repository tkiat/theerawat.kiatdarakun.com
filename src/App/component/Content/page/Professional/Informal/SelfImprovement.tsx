import React from "react"

import {DisplayListItems} from "../../../share"

export const SelfImprovement = ({content}: {content: unknown}): React.ReactElement =>
  <>
    <h1>Self-Improvement</h1>

    <h2><u>Learning</u></h2>

    <h3 className="highlight">Course</h3>

    <DisplayListItems
      content={content}
      keys={["selfimprovement", "course"]}
    />
  </>
