import React from "react"

import {TooltipFa, TooltipFaWithDelay, TooltipText, TooltipTextWithDelay} from "../share/Tooltip"

type SoftwareItemProps = [{
  name: string,
  date: string,
  link: string,
  dscp: string,
  type: string,
  stack: string,
  abandoned: boolean,
}]

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

const renderSoftwareItems = (items: SoftwareItemProps) => items.map((x, i) =>
  <li className={x.abandoned ? "abandoned" : ""} aria-hidden={x.abandoned} key={i}>
    <a href={x.link}>{x.date}</a> — {x.name}&ensp;<i className={x.type === "web" ? "fa-solid fa-globe" : "fa-solid fa-display"}></i> — {x.dscp} — <span className="highlight">{x.stack}</span>
  </li>
)

const renderContentItems = (items: ContentProps) => items.map((x, i) =>
  <section className={x.abandoned ? "abandoned" : ""} aria-hidden={x.abandoned} key={i}>
    <h3>{x.group_name}</h3>

    <p>{x.link && <><a href={x.link}>Link</a> —&nbsp;</>}{x.group_dscp}</p>

    {x.items &&
      <ul>
        {x.items.map((y, j) => <li key={j}><a href={y.link}>{y.date}</a> — {y.title}</li>)}
      </ul>
    }
  </section>
)

export const Create = (): React.ReactElement => {

  const [softwareProjs, setSoftwareProjs] = React.useState()
  const [softwareToys, setSoftwareToys] = React.useState()
  const [blogs, setBlogs] = React.useState()
  const [videos, setVideos] = React.useState()

  React.useEffect(() => {
    (async () => {
//       const sProjRaw = await fetch("/software-project.json")
//       setSoftwareProjs(await sProjRaw.json())

      const [sProjRaw, sToyRaw, blogsRaw, videosRaw] = await Promise.all([
        fetch("/software-project.json"),
        fetch("/software-toy.json"),
        fetch("/blog.json"),
        fetch("/videos.json"),
      ])

      setSoftwareProjs(await sProjRaw.json())
      setSoftwareToys(await sToyRaw.json())
      setBlogs(await blogsRaw.json())
      setVideos(await videosRaw.json())
    })()
  }, [])

  return softwareProjs === undefined || softwareToys === undefined || blogs === undefined || videos === undefined ?
    <>Loading ...</> :
    <div className="page-create">
      <p>Abandoned projects are blurred.</p>

      <hr />

      <h2>Apps</h2>

      <h3>&gt; a Day</h3>

      <ul>
        {renderSoftwareItems(softwareProjs)}
      </ul>

      <h3>&lt; a Day</h3>

      <ul>
        {renderSoftwareItems(softwareToys)}
      </ul>

      <hr />

      <h2>Blog</h2>
      {renderContentItems(blogs)}

      <hr />

      <h2>Video Channel</h2>
      {renderContentItems(videos)}
    </div>
}
