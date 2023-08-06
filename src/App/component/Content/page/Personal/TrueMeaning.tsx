import React from "react"
import * as jsYaml from 'js-yaml'

import {PageWithIconsScrollbar} from "../../share"
import {About} from "./TrueMeaning/About"
import {LitReview} from "./TrueMeaning/LitReview"
import {MyLifeRecord} from "./TrueMeaning/MyLifeRecord"

const source = "/page/personal/truemeaning.yaml"

export const TrueMeaning = (): React.ReactElement => {
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
      <i className="fa-solid fa-circle-question"></i>,
      <i className="fa-solid fa-book-open-reader"></i>,
      <i className="fa-solid fa-user-pen"></i>,
    ],
    content: {
      prelude: <Prelude />,
      sections: [
        <About />,
        <LitReview content={content} />,
        <MyLifeRecord content={content} />,
      ]
    }
  }
  return <PageWithIconsScrollbar data={data} page="activity-digest" />
}

const Prelude = (): React.ReactElement =>
  <p>This is my life's persuit about how an individual can live by true meaning and how to build a society that enables its members to do so. This work encompasses philosophy, social science, and science.</p>
