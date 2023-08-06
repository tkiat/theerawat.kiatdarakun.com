import React from "react"
import * as jsYaml from 'js-yaml'

import {DisplayListItems} from "../../../share"

export const Software = ({content}: {content: unknown}): React.ReactElement =>
  <>
    <h1>Software</h1>

    <h2><u>Created App</u></h2>

    <h3 className="highlight">&gt; a Month (Project Duration)</h3>
    <DisplayListItems
      content={content}
      keys={["software", "app", "> month"]}
    />

    <h3 className="highlight">&gt; a Week</h3>
    <DisplayListItems
      content={content}
      keys={["software", "app", "> week"]}
    />

    <h3 className="highlight">&gt; a Day</h3>
    <DisplayListItems
      content={content}
      keys={["software", "app", "> day"]}
    />

    <h3 className="highlight">&lt; a Day</h3>
    <DisplayListItems
      content={content}
      keys={["software", "app", "< day"]}
    />

    <h2><u>Learning</u></h2>

    <h3 className="highlight">Course</h3>
    <DisplayListItems
      content={content}
      keys={["software", "learning", "course"]}
    />

    <h3 className="highlight">Book</h3>
    <DisplayListItems
      content={content}
      keys={["software", "learning", "book"]}
    />
  </>
