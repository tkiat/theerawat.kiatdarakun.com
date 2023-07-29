import React from "react"
import * as jsYaml from 'js-yaml'

import {PageWithIconsScrollbar} from "../../share"

const source = "/hobby.yaml"

export const Hobby = (): React.ReactElement => {
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
      <i className="fa-solid fa-book"></i>,
      <i className="fa-solid fa-gamepad"></i>,
      <i className="fa-solid fa-image"></i>,
      <i className="fa-solid fa-film"></i>,
    ],
    content: {
      sections: [
        <Book />,
        <VideoGame />,
        <Comics />,
        <Movie />,
      ]
    }
  }
  return <PageWithIconsScrollbar data={data} page="activity-create" />
}

const Book = (): React.ReactElement =>
  <>
    <h2>Book</h2>

    <section>
      <h3><u>TODO</u></h3>

      <section>
        <h4 className="highlight">TODO</h4>
      </section>
    </section>
  </>

const VideoGame = (): React.ReactElement =>
  <>
    <h2>VideoGame</h2>

    <section>
      <h3><u>TODO</u></h3>

      <section>
        <h4 className="highlight">TODO</h4>
      </section>
    </section>
  </>

const Comics = (): React.ReactElement =>
  <>
    <h2>Comics</h2>

    <section>
      <h3><u>TODO</u></h3>

      <section>
        <h4 className="highlight">TODO</h4>
      </section>
    </section>
  </>

const Movie = (): React.ReactElement =>
  <>
    <h2>Movie</h2>

    <section>
      <h3><u>TODO</u></h3>

      <section>
        <h4 className="highlight">TODO</h4>
      </section>
    </section>
  </>
