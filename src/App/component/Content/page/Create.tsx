import React from "react"
import * as jsYaml from 'js-yaml'

import {PageWithIconsScrollbar} from "../share"
import {getRange} from "@app/share"

const files = [
  "/create/apps.json",
  "/create/blog.json",
  "/create/videos.yaml",
] as const

export const Create = (): React.ReactElement => {

  const [source, setSource] = React.useState<Source>({})

  React.useEffect((): (() => void) => {
    let mounted = true;

    (async () => {
      const res = await fetch("/create.yaml")

      if (mounted) {
        const contentType = res.headers.get("content-type");
        if (contentType && contentType.indexOf("text/yaml") !== -1) {
          const c = jsYaml.load(await res.text())
          setSource(c)
        }
      }
    })()

    return () => { mounted = false }
  }, [])

  const data = {
    icons: [
      <i className="fa-solid fa-code"></i>,
      <i className="fa-solid fa-pen"></i>,
      <i className="fa-solid fa-film"></i>,
    ],
    content: {
      prelude: <Prelude />,
      sections: [
        <Section0 source={source["app"]} />,
        <Section1 />,
        <Section2 source={source["video"]}/>,
      ]
    }
  }
  return <PageWithIconsScrollbar data={data} page="activity-create" />
}

type AppItem = {
  date: string,
  title: string,
  link: string,
  dscp: string,
  type: string,
  stack: string,
  abandoned: boolean,
}
type ContentItem = {
  date: string,
  title: string,
  link: string,
}
type Item = AppItem | ContentItem

type CategoryValue = {
  [k: string]: Item[]
}
type Source = {
  [k in string]: CategoryValue
}
// const categoryKeys = ["app", "video"] as const

type AppProps = [
  {
    group_name: string,
    items: [
      {
        name: string,
        date: string,
        link: string,
        dscp: string,
        type: string,
        stack: string,
        abandoned: boolean,
      }
    ]
  }
]
type ContentProps = [
  {
    group_name: string,
    group_dscp: string,
    link: string,
    abandoned: boolean,
    items: [
      {
        date: string,
        link: string,
        title: string,
      }
    ]
  }
]

const Prelude = (): React.ReactElement =>
  <p>I list both <span>active items</span> and <span className="abandoned">abandoned items</span>.</p>

const Section0 = ({source}: {source: CategoryValue | undefined}): React.ReactElement =>
  <>
    <h2>Software</h2>
    <h3 className="highlight">Apps</h3>

    <section>
      <h4>&gt; a Month</h4>
      {renderCategoryItems(source, "more-than-a-month")}
    </section>
  </>

const Section1 = (): React.ReactElement =>
  <>
    <h2>Writing</h2>

    <h3 className="highlight">My Own Blog Site</h3>

    <section className="abandoned">
      <h4>A Freedom Blog</h4>

      <p>This <a href="https://a-freedom-blog.kiatdarakun.com">personal blog</a> is oriented toward the freedom-friendly stuff of mixed qualities on many topics. I abandoned it since 2021-12-02 to focus my lifelong efforts on the philosophical work of what truly matter.</p>
    </section>
  </>

const Section2 = ({source}: {source: CategoryValue | undefined}): React.ReactElement =>
  <>
    <h2>Videos</h2>
    <h3 className="highlight">Channel</h3>

    <section>
      <h4>Freedom in Computing</h4>

      <p>I advocate FOSS operating systems (since they are very fundamental), the availability of FOSS application software alternatives (for accessibility to the poor), and OSS for entertainment software like video games (for the sake of transparency). I create this channel out of the wish to enhance freedom in the world of computing. I plan to add more videos down the road.</p>

      {renderCategoryItems(source, "freedom-in-computing")}
    </section>

    <section className="abandoned">
      <h4>Short Games Only</h4>

      <p>This <a href="https://www.youtube.com/@shortgamesonly3856">channel</a> contains just replays of two games without commentaries. I have abandoned it since 2020-06-01 in favor of open-source video games.</p>
    </section>
  </>

const renderCategoryItems = (source: CategoryValue | undefined, key: string) => {
  if (source === undefined) {
    return <p>Loading ...</p>
  } else if (key in source) {
    console.log(source[key])
    return (
      <ul className="ul-more-space">
        {
          source[key].map((x, i) => {
            if (isContentItem(x)) {
              return (
                <li key={i}>
                  {x.date} — <a href={x.link}>{x.title}</a>
                </li>
              )
            } else if (isAppItem(x)) {
              return (
                <li key={i} className={x.abandoned ? "abandoned" : ""} aria-hidden={x.abandoned}>
                  {x.date} — <a href={x.link}>{x.name}</a>&ensp;<i className={x.type === "web" ? "fa-solid fa-globe" : "fa-solid fa-display"}></i> — {x.dscp} — <span className="highlight">{x.stack}</span>
                </li>
              )
            } else {
              console.error("wrong format", x)
              return (
                <li key={i}>Wrong Format</li>
              )
            }
          })
        }
      </ul>
    )
  } else {
    console.error("property " + key + " not found in the source file")
    return <p>&lt;Content not found&gt;</p>
  }
}

const isContentItem = (x: Item): x is ContentItem =>
  typeof x === "object" && x !== null &&
  "date" in x && typeof x.date === "string" &&
  "title" in x && typeof x.title  === "string" &&
  "link" in x && typeof x.link === "string" &&
  !("stack" in x)

const isAppItem = (x: Item): x is AppItem =>
  typeof x === "object" && x !== null &&
  "date" in x && typeof x.date === "string" &&
  "link" in x && typeof x.link === "string" &&
  "title" in x && typeof x.title  === "string" &&
  "dscp" in x && typeof x.dscp === "string" &&
  "type" in x && typeof x.type === "string" &&
  "stack" in x && typeof x.stack === "string" && (
    !("abandoned" in x) ||
    "abandoned" in x && typeof x.abandoned === "boolean"
  )
