import React from "react"
import * as jsYaml from 'js-yaml'

import {DisplayListItems, PageWithIconsScrollbar} from "../../share"

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
      prelude: <Prelude />,
      sections: [
        <Books content={content} />,
        <VideoGames content={content} />,
        <Comics content={content} />,
        <Videos content={content} />,
      ]
    }
  }
  return <PageWithIconsScrollbar data={data} page="activity-create" />
}

const Prelude = (): React.ReactElement =>
  <section>
    <p>All items here are irrelevant to my work on true meaning. I show only the ones that align with my philosophical ideals:</p>
    <ol>
      <li>Available free of charge, DRM-free, or as part of a subscription</li>
      <li>Available digitally and can be created/consumed entirely on FOSS operating systems (like Linux)</li>
    </ol>
  </section>

const Books = ({content}: {content: unknown}): React.ReactElement =>
  <section>
    <h2>Books</h2>

    <section>
      <h3><u>Read</u></h3>

      <h4 className="highlight">Nonfiction</h4>
      {/*TODO tell this not exhaudtive list als truemeaning*/}

      <DisplayListItems
        content={content}
        keys={["book", "read", "nonfiction"]}
      />

      <h4 className="highlight">Fiction</h4>
      <DisplayListItems
        content={content}
        keys={["book", "read", "fiction"]}
      />
    </section>
  </section>

const VideoGames = ({content}: {content: unknown}): React.ReactElement =>
  <section>
    <h2>Video Games</h2>

    <section>
      <h3><u>Created Content</u></h3>

      <h4 className="highlight">Linux</h4>
      <DisplayListItems
        content={content}
        keys={["videogame", "linux", "created"]}
      />
    </section>

    <section>
      <h3><u>Played</u></h3>

      <h4 className="highlight">Linux</h4>
      <DisplayListItems
        content={content}
        keys={["videogame", "linux", "played"]}
      />
    </section>

    {/*
    <section>
      <h3><u>Other</u></h3>

      <h4 className="highlight">Created</h4>
      <DisplayListItems
        content={content}
        keys={["videogame", "other", "created"]}
      />
    </section>
    */}
  </section>

const Comics = ({content}: {content: unknown}): React.ReactElement =>
  <>
    <h2>Comics</h2>

    <section>
      <h3><u>Read</u></h3>

      <h4 className="highlight">Graphic Novels</h4>
      <DisplayListItems
        content={content}
        keys={["comics", "read", "graphic novel"]}
      />

      <h4 className="highlight">Comics</h4>
      <DisplayListItems
        content={content}
        keys={["comics", "read", "comics"]}
      />
    </section>
  </>

const Videos = ({content}: {content: unknown}): React.ReactElement =>
  <>
    <h2>Videos</h2>

    <section>
      <h3><u>Watched</u></h3>

      <h4 className="highlight">Series</h4>
      <DisplayListItems
        content={content}
        keys={["video", "watched", "series"]}
      />

      <h4 className="highlight">Movies</h4>
      <DisplayListItems
        content={content}
        keys={["video", "watched", "movies"]}
      />
    </section>
  </>
