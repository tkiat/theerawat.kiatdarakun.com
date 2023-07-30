import React from "react"
import * as jsYaml from 'js-yaml'

import {DisplayListItems} from "../../../share"

export const Software = ({content}: {content: unknown}): React.ReactElement =>
  <section>
    <h2>Software</h2>

    <section>
      <h3><u>App</u></h3>

      <section>
        <h4 className="highlight">&gt; a Month</h4>
        <DisplayListItems
          content={content}
          keys={["software", "app", "> month"]}
        />
      </section>

      <section>
        <h4 className="highlight">&gt; a Week</h4>
        <DisplayListItems
          content={content}
          keys={["software", "app", "> week"]}
        />
      </section>

      <section>
        <h4 className="highlight">&gt; a Day</h4>
        <DisplayListItems
          content={content}
          keys={["software", "app", "> day"]}
        />
      </section>

      <section>
        <h4 className="highlight">&lt; a Day</h4>
        <DisplayListItems
          content={content}
          keys={["software", "app", "< day"]}
        />
      </section>
    </section>

    <section>
      <h3><u>Learning</u></h3>

      <h4 className="highlight">Course</h4>
      <DisplayListItems
        content={content}
        keys={["software", "learning", "course"]}
      />

      <h4 className="highlight">Book</h4>
      <DisplayListItems
        content={content}
        keys={["software", "learning", "book"]}
      />
    </section>
  </section>
