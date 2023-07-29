import React from "react"
import * as jsYaml from 'js-yaml'

import {RenderConsumedMedia, TooltipFa} from "../../../share"
import {findObjValRecursive} from "@app/share"

const source = "/digest.yaml"

export const Software = (): React.ReactElement =>
  <section>
    <h2>Software</h2>

    <section>
      <h3><u>Study</u></h3>
      <RenderConsumedMedia key1="unrelated" key2="nonfiction" key3="software" />
    </section>
  </section>
