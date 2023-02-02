import React from "react"

import {initInPageNavButtons, initIntObserver} from 'src/App/share/general'

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

const page = "activity-create"

const renderAppItems = (items: AppProps) => items.map((x, i) =>
  <section key={i}>
    <h3>{x.group_name}</h3>

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
    <h3>{x.link ? <a href={x.link}>{x.group_name}</a> : <>{x.group_name}</>}</h3>

    <p>{x.group_dscp}</p>

    {x.items &&
      <ul className="ul-more-space">
        {x.items.map((y, j) => <li key={j}>{y.date} — <a href={y.link}>{y.title}</a></li>)}
      </ul>
    }
  </section>
)

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

  React.useEffect(() => {

  }, [])

  React.useEffect(() => {
  }, [])


  return (apps === undefined || blogs === undefined || videos === undefined) ?
    <>Loading ...</> :
    <div className="vsplit">
      <div className="vsplit__left">
        <button className="vsplit__icon" id={`btn-${page}-apps`}>
          <i className="fa-solid fa-globe"></i>
        </button>

        <button className="vsplit__icon" id={`btn-${page}-write`}>
          <i className="fa-solid fa-pen"></i>
        </button>

        <button className="vsplit__icon" id={`btn-${page}-video`}>
          <i className="fa-solid fa-display"></i>
        </button>
      </div>

      <div className="vsplit__right vsplit__right--border">
        <section>
          <p>I display both <span>active items</span> and <span className="abandoned">abandoned items</span>.</p>
        </section>

        <hr />

        <section id={`section-${page}-apps`}>
          <h2>Apps</h2>
          {renderAppItems(apps)}
        </section>

        <hr />

        <section id={`section-activity-create-write`}>
          <h2>Blog</h2>
          {renderContentItems(blogs)}
        </section>

        <hr />

        <section id={`section-${page}-video`}>
          <h2>Videos</h2>
          {renderContentItems(videos)}
        </section>
      </div>
    </div>
}
