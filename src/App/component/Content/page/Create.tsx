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

  const [sources, setSources] = React.useState<Sources>({
    [files[0]]: undefined,
    [files[1]]: undefined,
    [files[2]]: undefined,
  })
//     files.reduce<Sources>((acc, x) => ({...acc, [x]: undefined}), {})

  React.useEffect((): (() => void) => {
    let mounted = true;

    (async () => {
      const res = await Promise.all(files.map(x => fetch(x)))

      if (mounted) {
        for (const i of getRange(0, files.length - 1)) {
          const type = res[i].headers.get("content-type")

          if (type && type.indexOf("application/json") !== -1) {
            const c = await res[i].json()
            setSources(prev => ({ ...prev, [files[i]]: c }));
          } else if (type && type.indexOf("text/yaml") !== -1) {
            const c = jsYaml.load(await res[i].text())
            setSources(prev => ({ ...prev, [files[i]]: c }));
          }
        }
      }
    })()

    return () => { mounted = false }
  }, [])

  const data = {
    icons: [
//       <i className="fa-solid fa-code"></i>,
//       <i className="fa-solid fa-pen"></i>,
      <i className="fa-solid fa-film"></i>,
    ],
    content: {
      prelude: <Prelude />,
      sections: [
//         <Section0 items={sources[files[0]]} />,
//         <Section1 items={sources[files[1]]}/>,
        <Section2 source={sources[files[2]]}/>,
      ]
    }
  }
  return <PageWithIconsScrollbar data={data} page="activity-create" />
}

type ContentItemValue = {
  date: string,
  link: string,
  title: string,
}

type Content = {
  [k: string]: ContentItemValue[]
}

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
type Sources = {
  "/create/apps.json": AppProps | undefined,
  "/create/blog.json": ContentProps | undefined,
  "/create/videos.yaml": Content | undefined,
}

const Prelude = (): React.ReactElement =>
  <p>I list both <span>active items</span> and <span className="abandoned">abandoned items</span>.</p>

const Section0 = ({items}: {items: AppProps | undefined}): React.ReactElement =>
  <>
    <h2>Software</h2>
    <h3 className="highlight">Apps</h3>
    {items === undefined ? <p>Loading ...</p> : renderAppItems(items)}
  </>

const Section1 = ({items}: {items: ContentProps | undefined}): React.ReactElement =>
  <>
    <h2>Writing</h2>
    <h3 className="highlight">My Own Blog Site</h3>
    {items === undefined ? <p>Loading ...</p> : renderContentItemsTODO(items)}
  </>

const Section2 = ({source}: {source: Content | undefined}): React.ReactElement =>
  <>
    <h2>Videos</h2>
    <h3 className="highlight">Channel</h3>

    <section>
      <h4>Freedom in Computing</h4>

      <p>I advocate FOSS operating systems (since they are very fundamental), the availability of FOSS application software alternatives (for accessibility to the poor), and OSS for entertainment software like video games (for the sake of transparency). I create this channel out of the wish to enhance freedom in the world of computing. I plan to add more videos down the road.</p>

      {renderContentItems(source, "freedom-in-computing")}
    </section>

    <section className="abandoned">
      <h4>Short Games Only</h4>

      <p>This <a href="https://www.youtube.com/@shortgamesonly3856">channel</a> contains just replays of two games without commentaries. I have abandoned it since 2020-06-01 in favor of open-source video games.</p>
    </section>
  </>

const renderContentItems = (source: Content | undefined, key: string) => {
  if (source === undefined) {
    return <p>Loading ...</p>
  } else if (key in source) {
    return (
      <ul className="ul-more-space">
        {
          source[key].map((x, i) =>
            <li key={i}>{x.date} — <a href={x.link}>{x.title}</a></li>)
        }
      </ul>
    )
  } else {
    console.error("property " + key + " not found in the source file")
    return <p>&lt;Content not found&gt;</p>
  }
}

const renderAppItems = (items: AppProps) => items &&
  items.map((x, i) =>
  <section key={i}>
    <h4>{x.group_name}</h4>

    {x.items &&
      <ul className="ul-more-space">
        {x.items.map((y, j) =>
          <li className={y.abandoned ? "abandoned" : ""} aria-hidden={y.abandoned} key={j}>
            {y.date} — <a href={y.link}>{y.name}</a>&ensp;<i className={y.type === "web" ? "fa-solid fa-globe" : "fa-solid fa-display"}></i> — {y.dscp} — <span className="highlight">{y.stack}</span>
          </li>
        )}
      </ul>
    }
  </section>
)

const renderContentItemsTODO = (items: ContentProps) => items &&
  items.map((x, i) =>
  <section className={x.abandoned ? "abandoned" : ""} aria-hidden={x.abandoned} key={i}>
    <h4>{x.link ? <a href={x.link}>{x.group_name}</a> : <>{x.group_name}</>}</h4>

    <p>{x.group_dscp}</p>

    {x.items &&
      <ul className="ul-more-space">
        {x.items.map((y, j) => <li key={j}>{y.date} — <a href={y.link}>{y.title}</a></li>)}
      </ul>
    }
  </section>
)
