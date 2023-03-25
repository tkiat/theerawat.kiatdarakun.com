import React from "react"
import * as jsYaml from 'js-yaml'

import {PageWithIconsScrollbar, TooltipFa, TooltipText} from "../share"
import {findObjValRecursive} from "@app/share"

const source = "/digest.yaml"

export const Digest = (): React.ReactElement => {
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
      <i className="fa-solid fa-user"></i>,
      <i className="fa-solid fa-mountain-sun"></i>,
      <i className="fa-solid fa-wand-magic-sparkles"></i>,
    ],
    content: {
      prelude: <Prelude />,
      sections: [
        <Section0 content={content} />,
        <Section1 content={content} />,
        <Section2 content={content} />,
      ]
    }
  }
  return <PageWithIconsScrollbar data={data} page="activity-digest" />
}

const Prelude = (): React.ReactElement =>
  <>
    <br />
    I can retain memory better by writing a (very concise) summary of any piece of media. I divide all pieces of media into three parts: the ones relevant to the true meaning and everything else (further divided into nonfiction and fiction). All items here align with my&nbsp;
    <TooltipText text="ideals">
      <ul>
        <li>Available free of charge, DRM-free, or as part of an affordable subscription</li>
        <li>Available digitally and can be consumed on FOSS operating systems (like Linux)</li>
        <li>Open-source (for video games only)</li>
      </ul>
    </TooltipText>.
  </>

const Section0 = ({content}: {content: unknown}): React.ReactElement =>
  <>
    <h2>True Meaning</h2>

    <section>
      <h3 className="highlight">Myself</h3>
      {renderItems(content, ["true meaning", "being", "myself"])}
    </section>

    <section>
      <h3 className="highlight">Human</h3>
      {renderItems(content, ["true meaning", "being", "human"])}
    </section>

    <section>
      <h3 className="highlight">Nonhuman</h3>
      {renderItems(content, ["true meaning", "being", "nonhuman"])}
    </section>

    <section>
      <h3 className="highlight">Society</h3>

      <section>
        <h4>Religion</h4>
        {renderItems(content, ["true meaning", "society", "religion"])}
      </section>
    </section>
  </>

const Section1 = ({content}: {content: unknown}): React.ReactElement =>
  <>
    <h2>Nonfiction</h2>

    <section>
      <h3 className="highlight">Software</h3>
      {renderItems(content, ["unrelated", "nonfiction", "software"])}
    </section>
  </>

const Section2 = ({content}: {content: unknown}): React.ReactElement =>
  <>
    <h2>Fiction</h2>

    <section>
      <h3 className="highlight">Comics</h3>
      {renderItems(content, ["unrelated", "fiction", "comics"])}
    </section>
  </>

const getFormatIcon = (f: string) => {
  switch(f) {
    case "book":
      return <i className="fa-solid fa-book"></i>
    case "video":
      return <i className="fa-solid fa-film"></i>
    case "course":
      return <i className="fa-solid fa-graduation-cap"></i>
    case "image":
      return <i className="fa-regular fa-image"></i>
    default:
      return <></>
  }
}

type Item = {
  date: string,
  title: string,
  format: string,
  length: string,
  link: string,
  review_short?: string,
  review_ext?: string,
}

const isItem = (x: unknown): x is Item =>
  typeof x === "object" && x !== null &&
  "date" in x && typeof x.date ==="string" &&
  "title" in x && typeof x.title  ==="string" &&
  "format" in x && typeof x.format ==="string" &&
  "length" in x && typeof x.length ==="string" &&
  "link" in x && typeof x.link ==="string" && (
    "review_short" in x && typeof x.review_short === "string" ||
    "review_ext" in x && typeof x.review_ext ==="string"
  )

const renderItem = (x: Item) =>
  <>
    {x.date} —&nbsp;
    {x.link ? <a href={x.link}>{x.title}</a> : <>{x.title}</>} —&nbsp;
    {getFormatIcon(x.format)}
    {x.length && <>&ensp;{x.length}</>}
    {x.review_short && <>&ensp;<TooltipFa faclass="fa-regular fa-circle-question">{x.review_short}</TooltipFa></>}
    {x.review_ext && <>&ensp;<a href={x.review_ext} target="_blank" rel="noopener noreferrer"><i className="tooltip-fa fa-solid fa-arrow-up-right-from-square"></i></a></>}
  </>

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
        <>
          {
            arr.map((x, i) => {
              if (isItem(x)) {
                return <p key={i}>{renderItem(x)}</p>
              } else {
                console.error("wrong format", x)
                return <p key={i}>&lt;wrong format&gt;</p>
              }
            })
          }
        </>
      )
    } else {
      const props = keys.reduce((acc, cur) => {
        return acc + "[\"" + cur + "\"]"
      }, "")

      console.error("property " + props + " in", content, "must be an array")
      return <p>&lt;Wrong format&gt;</p>
    }
  }
}
