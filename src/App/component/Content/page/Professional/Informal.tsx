import React from "react"
import * as jsYaml from 'js-yaml'

import {PageWithIconsScrollbar} from "../../share"
import {Software} from "./Informal/Software"
import {SelfImprovement} from "./Informal/SelfImprovement"

const source = "/page/professional/informal.yaml"

export const Informal = (): React.ReactElement => {
  const [content, setContent] = React.useState<unknown>()

  React.useEffect((): (() => void) => {
    let mounted = true;

    (async () => {
      const res = await fetch(source)

      if (mounted) {
        const t = res.headers.get("content-type");
        if (t && t.indexOf("text/yaml") !== -1) {
          setContent(jsYaml.load(await res.text()))
        } else {
          console.error("the content-type of file " + source + " is not yaml")
        }
      }
    })()

    return () => { mounted = false }
  }, [])

  const data = {
    icons: [
      <i className="fa-solid fa-code"></i>,
      <i className="fa-solid fa-person-arrow-up-from-line"></i>,
    ],
    content: {
      prelude: <Prelude />,
      sections: [
        <Software content={content} />,
        <SelfImprovement content={content} />,
      ]
    }
  }
  return <PageWithIconsScrollbar data={data} page="about-character" />
}

const Prelude = (): React.ReactElement =>
  <>
    <p>This section lists informal work and qualifications that relate to my resume.</p>
  </>
