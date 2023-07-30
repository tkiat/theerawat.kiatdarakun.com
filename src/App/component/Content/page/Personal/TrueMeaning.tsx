import React from "react"
import * as jsYaml from 'js-yaml'

import {DisplayListItems, PageWithIconsScrollbar} from "../../share"

const source = "/truemeaning.yaml"

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
      <i className="fa-solid fa-1"></i>,
      <i className="fa-solid fa-2"></i>,
      <i className="fa-solid fa-user-pen"></i>,
    ],
    content: {
      prelude: <Prelude />,
      sections: [
        <About content={content} />,
        <LiteratureReview1 content={content} />,
        <LiteratureReview2 content={content} />,
        <MyLifeRecord content={content} />,
      ]
    }
  }
  return <PageWithIconsScrollbar data={data} page="activity-digest" />
}

const Prelude = (): React.ReactElement =>
  <section>
    <p>TODO prelude</p>
  </section>

const About = ({content}: {content: unknown}): React.ReactElement =>
  <section>
    <h2>About</h2>

    <section>
      <h3 className="highlight"></h3>
    </section>
  </section>

const LiteratureReview1 = ({content}: {content: unknown}): React.ReactElement =>
  <section>
    <h2>Literature Review #1: Individual</h2>

    <p>TODO this is for the first book</p>

    <section>
      <h3 className="highlight"></h3>
    </section>
  </section>

const LiteratureReview2 = ({content}: {content: unknown}): React.ReactElement =>
  <section>
    <h2>Literature Review #2: Society</h2>

    <section>
      <h3 className="highlight"></h3>
    </section>
  </section>

const MyLifeRecord = ({content}: {content: unknown}): React.ReactElement =>
  <section>
    <h2>The Record of My Life</h2>

    <p>TODO this is for the first book</p>

    <section>
      <h3 className="highlight"></h3>
    </section>
  </section>
