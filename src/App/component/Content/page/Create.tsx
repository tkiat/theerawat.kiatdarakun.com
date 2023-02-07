import React from "react"

import {initInPageNavButtons, initIntObserver} from "@app/share"

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

const renderContentItems = (items: ContentProps) => items.map((x, i) =>
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

const page = "activity-create"
let observer: IntersectionObserver, sections: NodeListOf<Element>

export const Create = (): React.ReactElement => {

  const [apps, setApps] = React.useState()
  const [blogs, setBlogs] = React.useState()
  const [videos, setVideos] = React.useState()

  React.useEffect((): (() => void) => {
    let mounted = true;

    (async () => {
      const [appsRaw, blogsRaw, videosRaw] = await Promise.all([
        fetch("/create/apps.json"),
        fetch("/create/blog.json"),
        fetch("/create/videos.json"),
      ])

      if (mounted) {
        setApps(await appsRaw.json())
        setBlogs(await blogsRaw.json())
        setVideos(await videosRaw.json())

        initInPageNavButtons(document.querySelectorAll(`[id^="btn-${page}"]`))
        sections = document.querySelectorAll(`[id^="section-${page}"]`)
        observer = initIntObserver(sections)
      }
    })()

    return () => {
      mounted = false
      sections.forEach(section => {
        observer.unobserve(section)
      })
    }
  }, [])

  return (apps === undefined || blogs === undefined || videos === undefined) ?
    <div className="no-split">Loading ...</div> :
    <div className="split">
      <div className="split__status">
        <button className="split__icon" id={`btn-${page}-software`}>
          <i className="fa-solid fa-code"></i>
        </button>

        <button className="split__icon" id={`btn-${page}-write`}>
          <i className="fa-solid fa-pen"></i>
        </button>

        <button className="split__icon" id={`btn-${page}-video`}>
          <i className="fa-solid fa-film"></i>
        </button>
      </div>

      <div className="split__content">
        <section>
          <p>I list both <span>active items</span> and <span className="abandoned">abandoned items</span>.</p>
        </section>

        <section id={`section-${page}-software`}>
          <h2>Software</h2>
          <h3 className="highlight">Apps</h3>
          {renderAppItems(apps)}
        </section>

        <hr />

        <section id={`section-${page}-write`}>
          <h2>Writing</h2>
          <h3 className="highlight">My Own Blog Site</h3>
          {renderContentItems(blogs)}
        </section>

        <hr />

        <section id={`section-${page}-video`}>
          <h2>Videos</h2>
          <h3 className="highlight">Channel</h3>
          {renderContentItems(videos)}
        </section>
      </div>
    </div>
}
