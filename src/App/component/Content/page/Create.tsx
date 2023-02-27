import React from "react"
import * as jsYaml from 'js-yaml'

import {PageWithIconsScrollbar} from "../share"
import {getRange} from "@app/share"

export const Create = (): React.ReactElement => {

  const [source, setSource] = React.useState<Source>({
    "app": undefined,
    "video": undefined,
  })

  React.useEffect((): (() => void) => {
    let mounted = true;

    (async () => {
      const res = await fetch("/create.yaml")

      if (mounted) {
        const contentType = res.headers.get("content-type");
        if (contentType && contentType.indexOf("text/yaml") !== -1) {
          const c = jsYaml.load(await res.text())
          if (isSource(c)) setSource(c)
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
        <Section0 source={source} />,
        <Section1 />,
        <Section2 source={source}/>,
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
const categoryKeys = ["app", "video"] as const
export type CategoryKey = (typeof categoryKeys)[number]

type Source = {
  [k in CategoryKey]: unknown
}

const isSource = (x: unknown): x is Source =>
  typeof x === "object" && x !== null && categoryKeys.every(y => y in x)

const Prelude = (): React.ReactElement =>
  <p>I list both <span>active items</span> and <span className="abandoned">abandoned items</span>.</p>

const Section0 = ({source}: {source: unknown | undefined}): React.ReactElement =>
  <>
    <h2>Software</h2>
    <h3 className="highlight">Apps</h3>

    <section>
      <h4>&gt; a Month</h4>
      {renderItems(source, ["app", "more-than-a-month"])}
    </section>

    <section>
      <h4>&gt; a Week</h4>
      {renderItems(source, ["app", "more-than-a-week"])}
    </section>

    <section>
      <h4>&gt; a Day</h4>
      {renderItems(source, ["app", "more-than-a-day"])}
    </section>

    <section>
      <h4>&lt; a Day</h4>
      {renderItems(source, ["app", "less-than-a-day"])}
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

const Section2 = ({source}: {source: unknown | undefined}): React.ReactElement =>
  <>
    <h2>Videos</h2>
    <h3 className="highlight">Channel</h3>

    <section>
      <h4>Freedom in Computing</h4>

      <p>I advocate FOSS operating systems (since they are very fundamental), the availability of FOSS application software alternatives (for accessibility to the poor), and OSS for entertainment software like video games (for the sake of transparency). I create this channel out of the wish to enhance freedom in the world of computing. I plan to add more videos down the road.</p>

      {renderItems(source, ["video", "freedom-in-computing"])}
    </section>

    <section className="abandoned">
      <h4>Short Games Only</h4>

      <p>This <a href="https://www.youtube.com/@shortgamesonly3856">channel</a> contains just replays of two games without commentaries. I have abandoned it since 2020-06-01 in favor of open-source video games.</p>
    </section>
  </>

const fibo = (o: object, keys: string[]) => {
//   console.log(o, keys)
  const k = keys[0]
  if (typeof o === "object" && o !== null && k in o) {
    return keys.length === 1 ? o[k] : fibo(o[k], keys.slice(1))
  } else {
    return undefined
  }
}

const renderItems = (source: unknown, keys: string[]) => {
  if (source === undefined) {
    return <p>Loading ...</p>
  } else {
    const arr = fibo(source, keys)
    console.log(arr)
    if (Array.isArray(arr)) {
      return (
        <ul className="ul-more-space">
          {
            arr.map((x, i) => {
              if (isContentItem(x)) {
                return (
                  <li key={i}>
                    {x.date} — <a href={x.link}>{x.title}</a>
                  </li>
                )
              } else if (isAppItem(x)) {
                return (
                  <li key={i} className={x.abandoned ? "abandoned" : ""} aria-hidden={x.abandoned}>
                    {x.date} — <a href={x.link}>{x.title}</a>&ensp;<i className={x.type === "web" ? "fa-solid fa-globe" : "fa-solid fa-display"}></i> — {x.dscp} — <span className="highlight">{x.stack}</span>
                  </li>
                )
              } else {
                console.error("Wrong format", x)
                return (
                  <li key={i}>Content not found</li>
                )
              }
            })
          }
        </ul>
      )
    } else {
      return <p>Loading ...</p>
    }
  }
}

// const renderCategoryItems = (source: unknown, key: string) => {
//   if (source === undefined) {
//     return <p>Loading ...</p>
//   } else if (typeof source === "object" && source !== null && typeof key === "string" && key in source && Array.isArray(source[key])) {
//     return (
//       <ul className="ul-more-space">
//         {
//           source[key].map((x, i) => {
//             if (isContentItem(x)) {
//               return (
//                 <li key={i}>
//                   {x.date} — <a href={x.link}>{x.title}</a>
//                 </li>
//               )
//             } else if (isAppItem(x)) {
//               return (
//                 <li key={i} className={x.abandoned ? "abandoned" : ""} aria-hidden={x.abandoned}>
//                   {x.date} — <a href={x.link}>{x.title}</a>&ensp;<i className={x.type === "web" ? "fa-solid fa-globe" : "fa-solid fa-display"}></i> — {x.dscp} — <span className="highlight">{x.stack}</span>
//                 </li>
//               )
//             } else {
//               console.error("Wrong format", x)
//               return (
//                 <li key={i}>Content not found</li>
//               )
//             }
//           })
//         }
//       </ul>
//     )
//   } else {
//     console.error("property " + key + " not found in", source)
//     return <p>&lt;Content not found&gt;</p>
//   }
// }

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
