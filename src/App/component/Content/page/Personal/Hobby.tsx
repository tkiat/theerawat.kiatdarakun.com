import React from "react"
import {Link} from "@reach/router"
import * as jsYaml from 'js-yaml'

import {DisplayListItems, PageWithIconsScrollbar} from "../../share"
import {paths} from "@app/share"

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
      <i className="fa-solid fa-bicycle"></i>,
    ],
    content: {
      prelude: <Prelude />,
      sections: [
        <Books content={content} />,
        <VideoGames content={content} />,
        <Comics content={content} />,
        <Videos content={content} />,
        <CyclingTrips />,
      ]
    }
  }
  return <PageWithIconsScrollbar data={data} page="activity-create" />
}

const Prelude = (): React.ReactElement =>
  <>
    <p>This section is about how I spend my leisure time apart from my work on <a href={window.location.origin + "/" + paths[3]}>true meaning</a>. All media here align with my philosophical ideals:</p>

    <ol>
      <li>Available free of charge, DRM-free, or as part of a subscription</li>
      <li>Available digitally and can be created/consumed entirely on FOSS operating systems (like Linux)</li>
    </ol>
  </>

const Books = ({content}: {content: unknown}): React.ReactElement =>
  <>
    <h1>Books</h1>

    <h2><u>Read</u></h2>

    <h3 className="highlight">Nonfiction</h3>
    {/*TODO tell this not exhaudtive list als truemeaning*/}

    <DisplayListItems
      content={content}
      keys={["book", "read", "nonfiction"]}
    />

    <h3 className="highlight">Fiction</h3>
    <DisplayListItems
      content={content}
      keys={["book", "read", "fiction"]}
    />
  </>

const VideoGames = ({content}: {content: unknown}): React.ReactElement =>
  <>
    <h1>Video Games</h1>

    <h2><u>Created Content</u></h2>

    <h3 className="highlight">Linux</h3>
    <DisplayListItems
      content={content}
      keys={["videogame", "created content", "linux"]}
    />

    <h2><u>Played</u></h2>

    <h3 className="highlight">Linux</h3>
    <DisplayListItems
      content={content}
      keys={["videogame", "played", "linux"]}
    />

  {/*
    <h2><u>Other</u></h2>

    <h3 className="highlight">Created</h3>
    <DisplayListItems
      content={content}
      keys={["videogame", "created content", "other"]}
    />
  */}
  </>

const Comics = ({content}: {content: unknown}): React.ReactElement =>
  <>
    <h1>Comics</h1>

    <h2><u>Read</u></h2>

    <h3 className="highlight">Graphic Novels</h3>
    <DisplayListItems
      content={content}
      keys={["comics", "read", "graphic novel"]}
    />

    <h3 className="highlight">Comics</h3>
    <DisplayListItems
      content={content}
      keys={["comics", "read", "comics"]}
    />
  </>

const Videos = ({content}: {content: unknown}): React.ReactElement =>
  <>
    <h1>Videos</h1>

    <h2><u>Watched</u></h2>

    <h3 className="highlight">Series</h3>
    <DisplayListItems
      content={content}
      keys={["video", "watched", "series"]}
    />

    <h3 className="highlight">Movies</h3>
    <DisplayListItems
      content={content}
      keys={["video", "watched", "movies"]}
    />
  </>

const CyclingTrips = (): React.ReactElement =>
  <>
    <h1>Cycling Trips</h1>

    TODO
  </>
