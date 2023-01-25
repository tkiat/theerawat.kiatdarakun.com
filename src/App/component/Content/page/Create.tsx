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

type VideosProps = [{
  group_name: string,
  group_dscp: string,
  abandoned: boolean,
  videos: [
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

const renderVideoItems = (items: VideosProps) => items.map((x, i) =>
  <section className={x.abandoned ? "abandoned" : ""} aria-hidden={x.abandoned} key={i}>
    <h3>{x.group_name}</h3>

    <p>{x.group_dscp}</p>

    <ul>
      {x.videos.map(y => <li><a href={y.link}>{y.date}</a> — {y.title}</li>)}
    </ul>
  </section>
)

export const Create = (): React.ReactElement => {

  const [softwareProjs, setSoftwareProjs] = React.useState()
  const [softwareToys, setSoftwareToys] = React.useState()
  const [videos, setVideos] = React.useState()

  React.useEffect(() => {
    (async () => {
//       const sProjRaw = await fetch("/software-project.json")
//       setSoftwareProjs(await sProjRaw.json())

      const [sProjRaw, sToyRaw, videosRaw] = await Promise.all([
        fetch("/software-project.json"),
        fetch("/software-toy.json"),
        fetch("/videos.json"),
      ])

      setSoftwareProjs(await sProjRaw.json())
      setSoftwareToys(await sToyRaw.json())
      setVideos(await videosRaw.json())
    })()
  }, [])

  return softwareProjs === undefined || softwareToys === undefined || videos === undefined ?
    <>Loading ...</> :
    <div className="page-create">
      <p>Abandoned projects are blurred.</p>

      <hr />

      <h2>Software</h2>

      <h3>Apps</h3>

      <ul>
        {renderSoftwareItems(softwareProjs)}
      </ul>

      <h3>Less-Than-a-Day Apps</h3>

      <ul>
        {renderSoftwareItems(softwareToys)}
      </ul>

      <hr />

      <h2>Blog</h2>

      <section className="abandoned" aria-hidden={true}>
        <h3>A Freedom Blog</h3>

        <p><a href="https://a-freedom-blog.kiatdarakun.com">Link</a> — This personal blog is oriented toward the freedom-friendly stuff of mixed qualities on many topics. I abandoned it since 2021-12-02 to focus my lifelong efforts on the philosophical work of life guided by awareness. I should be able to migrate some content from here.</p>
      </section>

      <hr />

      <h2>Video Channel</h2>

      {renderVideoItems(videos)}
    </div>
}
