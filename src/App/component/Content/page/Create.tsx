import React from "react"
import * as jsYaml from 'js-yaml'

import {PageWithIconsScrollbar} from "../share"
import {findObjValRecursive} from "@app/share"
import {WhatCanTrulyMatter} from "./Create/WhatCanTrulyMatter"

const source = "/create.yaml"

export const Create = (): React.ReactElement => {
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
      <i className="fa-solid fa-flag"></i>,
//       <i className="fa-solid fa-star"></i>,
      <i className="fa-solid fa-code"></i>,
      <i className="fa-solid fa-ellipsis-vertical"></i>,
    ],
    content: {
      prelude: <Prelude />,
      sections: [
        <WhatCanTrulyMatter />,
        <Software content={content} />,
        <Misc content={content}/>,
      ]
    }
  }
  return <PageWithIconsScrollbar data={data} page="activity-create" />
}

const Prelude = (): React.ReactElement =>
  <p>I list both <span>active items</span> and <span className="abandoned">abandoned items</span>.</p>

const Software = ({content}: {content: unknown}): React.ReactElement =>
  <>
    <h2>Software</h2>

    <section>
      <h3 className="highlight">App</h3>

      <section>
        <h4>&gt; a Month</h4>
        {renderItems(content, ["software", "app", "> month"])}
      </section>

      <section>
        <h4>&gt; a Week</h4>
        {renderItems(content, ["software", "app", "> week"])}
      </section>

      <section>
        <h4>&gt; a Day</h4>
        {renderItems(content, ["software", "app", "> day"])}
      </section>

      <section>
        <h4>&lt; a Day</h4>
        {renderItems(content, ["software", "app", "< day"])}
      </section>
    </section>

    <section>
      <h3 className="highlight">Content</h3>

      <section>
        <h4>Channel: Freedom in Computing</h4>

        <p>The ideal society, to me, offers people choices and awareness. For this reason, I strongly advocate free and open source software (FOSS) for all software lower than application software since they cannot be easily replaced by a user once installed. For local, application software, I advocate at least open source software and the availability of FOSS alternatives for all non-entertainment software (like content creation).</p>

        <p>I created this channel out of the wish to get us closer to that ideal society. Yeah, I know I now only have only one upload but I plan to add more videos down the road.</p>

        {renderItems(content, ["software", "video", "freedom-in-computing"])}
      </section>
    </section>
  </>

const Misc = ({content}: {content: unknown}): React.ReactElement =>
  <>
    <h2>Misc.</h2>

    <section>
      <h3 className="highlight">Academic Publication</h3>

      <p>I have published two papers in communication technology around the end of my undergraduate studies.</p>

      {renderItems(content, ["misc", "academic-publication"])}
    </section>

    <section>
      <h3 className="highlight">Video Games</h3>

      <section className="abandoned">
        <h4>Short Games Only</h4>

        <p>This video games <a href="https://www.youtube.com/@shortgamesonly3856">channel</a> contains just five videos showing replays of two games (Clash Royale and Cryptark) without commentaries. I have abandoned it since 2020-06-01 in favor of open-source video games.</p>
      </section>
    </section>

    <section>
      <h3 className="highlight">Other</h3>

      <section className="abandoned">
        <h4>A Freedom Blog</h4>

        <p>This <a href="https://a-freedom-blog.kiatdarakun.com">personal blog</a> is oriented toward the freedom-friendly stuff of mixed qualities on many topics. I abandoned it since 2021-12-02 to focus my lifelong efforts on the philosophical work of what can truly matter.</p>
      </section>
    </section>
  </>

type AppItem = {
  date: string,
  title: string,
  link: string,
  dscp: string,
  type: string,
  stack: string,
  abandoned?: boolean,
}
type ContentItem = {
  date: string,
  title: string,
  link: string,
}

const isContentItem = (x: unknown): x is ContentItem =>
  typeof x === "object" && x !== null &&
  "date" in x && typeof x.date === "string" &&
  "title" in x && typeof x.title  === "string" &&
  "link" in x && typeof x.link === "string" &&
  !("stack" in x)

const isAppItem = (x: unknown): x is AppItem =>
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

const renderItems = (content: unknown, keys: string[]) => {
  const arr = findObjValRecursive(content, keys)

  if (arr === undefined) {
    return <p>Loading ...</p>
  } else if (arr === null) {
    const props = keys.reduce((acc, cur) => {
      return acc + "[\"" + cur + "\"]"
    }, "")

    console.error("property " + props + " not found in", content)
    return <p>&lt;Content not found&gt;</p>
  } else {
    if (Array.isArray(arr)) {
      return (
        <ul className="ul-more-space">
          {
            arr.map((x, i) => {
              let content

              if (isContentItem(x)) {
                content = <>{x.date} — <a href={x.link}>{x.title}</a></>
              } else if (isAppItem(x)) {
                content = <>{x.date} — <a href={x.link}>{x.title}</a>&ensp;<i className={x.type === "web" ? "fa-solid fa-globe" : "fa-solid fa-display"}></i> — {x.dscp} — <span className="highlight">{x.stack}</span></>
              } else {
                console.error("wrong format", x)
                content = <>&lt;wrong format&gt;</>
              }
              return <li key={i} className={x.abandoned ? "abandoned" : ""} aria-hidden={x.abandoned}>{content}</li>
            })
          }
        </ul>
      )
    } else {
      const props = keys.reduce((acc, cur) => {
        return acc + "[\"" + cur + "\"]"
      }, "")

      console.error("property " + props + " in", content, "must be an array")
      return <p>&lt;wrong format&gt;</p>
    }
  }
}
