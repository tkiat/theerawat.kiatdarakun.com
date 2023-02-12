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

const renderContentItems = (items: ContentProps) => items &&
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

const resources = [
  "/create/apps.json",
  "/create/blog.json",
  "/create/videos.json",
] as const
// Object.keys(itemsInit)

const itemsInit = {
  [resources[0]]: undefined,
  [resources[1]]: undefined,
  [resources[2]]: undefined,
}

type Items = {
  "/create/apps.json": AppProps | undefined,
  "/create/blog.json": ContentProps | undefined,
  "/create/videos.json": ContentProps | undefined,
}

// type Resources = (typeof resources)[number]

// type Items = {
//   [x in Resources]?: string
// }

// type Items = {
//   [a: resources[0]]: AppProps | undefined,
// } & {
//   [resources[1]]: ContentProps | undefined,
// }

// type Items = {
//   [resources[0]]: AppProps | undefined,
//   [resources[1]]: ContentProps | undefined,
//   [resources[2]]: ContentProps | undefined,
// }

export const Create = (): React.ReactElement => {

  const [items, setItems] = React.useState<Items>(itemsInit
//     resources.reduce<Items>((acc, x) => ({...acc, [x]: undefined}), {})
  )

  React.useEffect((): (() => void) => {
    let mounted = true;

    (async () => {
      const res = await Promise.all(resources.map(x => fetch(x)))

      if (mounted) {
        for (const i of [0, 1, 2]) {
          const type = res[i].headers.get("content-type")
          if (type && type.indexOf("application/json") !== -1) {
            const c = await res[i].json()
            setItems(prev => ({ ...prev, [resources[i]]: c }));
          }
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
        <Section0 items={items[resources[0]]} />,
        <Section1 items={items[resources[1]]}/>,
        <Section2 items={items[resources[2]]}/>,
      ]
    }
  }

  return <SplitContent data={data} page="activity-create" />
}

type P = {
  data: {
    icons: React.ReactElement[],
    content: {
      prelude: React.ReactElement,
      sections: React.ReactElement[],
    }
  },
  page: string,
}

const SplitContent = ({data, page}: P): React.ReactElement => {
  let observer: IntersectionObserver, sectionElems: NodeListOf<Element>

  React.useEffect((): (() => void) => {
    (async () => {
      initInPageNavButtons(document.querySelectorAll(`[id^="btn-${page}"]`))
      sectionElems = document.querySelectorAll(`[id^="section-${page}"]`)
      observer = initIntObserver(sectionElems)
    })()

    return () => {
      sectionElems?.forEach(section => { observer.unobserve(section) })
    }
  }, [])

  return (
    <div className="split-status">
      <div className="split-status__status">
        {
          data.icons.map((x, i) =>
            <button key={i} className="split-status__icon" id={`btn-${page}-${i}`}>
              {x}
            </button>
          )
        }
      </div>

      <div className="split-status__content">
        <section>
          {data.content.prelude}
        </section>

        {
          data.content.sections.map((x, i) =>
            <React.Fragment key={i}>
              <hr />
              <section id={`section-${page}-${i}`}>
                {x}
              </section>
            </React.Fragment>
          )
        }
      </div>
    </div>
  )
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
    {items === undefined ? <p>Loading ...</p> : renderContentItems(items)}
  </>

const Section2 = ({items}: {items: ContentProps | undefined}): React.ReactElement =>
  <>
    <h2>Videos</h2>
    <h3 className="highlight">Channel</h3>
    {items === undefined ? <p>Loading ...</p> : renderContentItems(items)}
  </>
