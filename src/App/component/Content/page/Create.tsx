import React from "react"

import {TooltipFa, TooltipFaWithDelay, TooltipText, TooltipTextWithDelay} from "../share/Tooltip"

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

type ContentProps = [{
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
}]

const renderAppItems = (items: AppProps) => items.map((x, i) =>
  <section key={i}>
    <h3>{x.group_name}</h3>

    {x.items &&
      <ul>
        {x.items.map((y, j) =>
          <li className={y.abandoned ? "abandoned" : ""} aria-hidden={y.abandoned} key={j}>
            {y.date} — <a href={y.link}>{y.name}</a>&ensp;<i className={y.type === "web" ? "fa-solid fa-globe" : "fa-solid fa-display"}></i> — {y.dscp} — <span className="highlight">{y.stack}</span>
          </li>
        )}
      </ul>
    }
  </section>
)

const renderContentItems = (items: ContentProps) => items.map((x, i) =>
  <section className={x.abandoned ? "abandoned" : ""} aria-hidden={x.abandoned} key={i}>
    <h3>{x.group_name}</h3>

    <p>{x.link && <><a href={x.link}>Link</a> —&nbsp;</>}{x.group_dscp}</p>

    {x.items &&
      <ul>
        {x.items.map((y, j) => <li key={j}>{y.date} — <a href={y.link}>{y.title}</a></li>)}
      </ul>
    }
  </section>
)

export const Create = (): React.ReactElement => {

  const [apps, setApps] = React.useState()
  const [blogs, setBlogs] = React.useState()
  const [videos, setVideos] = React.useState()

  React.useEffect((): (() => void) => {
    let mounted = true;

    (async () => {
//       const sProjRaw = await fetch("/software-project.json")
//       setSoftwareProjs(await sProjRaw.json())

      const [appsRaw, blogsRaw, videosRaw] = await Promise.all([
        fetch("/apps.json"),
        fetch("/blog.json"),
        fetch("/videos.json"),
      ])

      if (mounted) {
        setApps(await appsRaw.json())
        setBlogs(await blogsRaw.json())
        setVideos(await videosRaw.json())
      }
    })()

    return () => mounted = false
  }, [])

  return (apps === undefined || blogs === undefined || videos === undefined) ?
    <>Loading ...</> :
    <div className="page-create">
      <p>Abandoned items are displayed with less opacity.</p>

      <hr />

      <h2>Apps</h2>
      {renderAppItems(apps)}

      <hr />

      <h2>Blog</h2>
      {renderContentItems(blogs)}

      <hr />

      <h2>Videos</h2>
      {renderContentItems(videos)}
    </div>
}
