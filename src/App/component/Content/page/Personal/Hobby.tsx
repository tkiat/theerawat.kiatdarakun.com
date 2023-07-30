import React from "react"
import * as jsYaml from 'js-yaml'

import {PageWithIconsScrollbar, RenderConsumedMedia, DisplayCreatedItems} from "../../share"

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
        <Book content={content} />,
        <VideoGame content={content} />,
        <Comics content={content} />,
        <Movie content={content} />,
      ]
    }
  }
  return <PageWithIconsScrollbar data={data} page="activity-create" />
}

const Book = ({content}: {content: unknown}): React.ReactElement =>
  <section>
    <h2>Book</h2>

    <section>
      <h3><u>Read</u></h3>

      <h4 className="highlight">Nonfiction</h4>
      <RenderConsumedMedia
        content={content}
        keys={["book", "read", "nonfiction"]}
      />

      <h4 className="highlight">Fiction</h4>
      <RenderConsumedMedia
        content={content}
        keys={["book", "read", "fiction"]}
      />
    </section>
  </section>

const VideoGame = ({content}: {content: unknown}): React.ReactElement =>
  <section>
    <h2>Video Games</h2>

    <section>
      <h3><u>DRM-Free on Linux</u></h3>

      <h4 className="highlight">Created</h4>
      <DisplayCreatedItems
        content={content}
        keys={["videogame", "drm-free linux", "created"]}
      />
    </section>

    <section>
      <h3><u>Not DRM-Free on Linux</u></h3>

      <h4 className="highlight">Created</h4>
      <DisplayCreatedItems
        content={content}
        keys={["videogame", "not drm-free linux", "create"]}
      />
    </section>
  </section>

const Comics = ({content}: {content: unknown}): React.ReactElement =>
  <>
    <h2>Comics</h2>

    <section>
      <h3><u>TODO</u></h3>

      <section>
        <h4 className="highlight">TODO</h4>
      </section>
    </section>
  </>

const Movie = ({content}: {content: unknown}): React.ReactElement =>
  <>
    <h2>Movie</h2>

    <section>
      <h3><u>TODO</u></h3>

      <section>
        <h4 className="highlight">TODO</h4>
      </section>
    </section>
  </>
