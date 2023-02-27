import React from "react"
import * as jsYaml from 'js-yaml'

import {PageWithIconsScrollbar, TooltipFa, TooltipText} from "../share"
import {findObjValRecursive} from "@app/share"

export const Digest = (): React.ReactElement => {
  const [source, setSource] = React.useState<unknown>()

  React.useEffect((): (() => void) => {
    let mounted = true;

    (async () => {
      const res = await fetch("/digest.yaml")

      if (mounted) {
        const t = res.headers.get("content-type");
        if (t && t.indexOf("text/yaml") !== -1) {
          setSource(jsYaml.load(await res.text()))
        }
      }
    })()

    return () => { mounted = false }
  }, [])

  const data = {
    icons: [
      <i className="fa-solid fa-user"></i>,
      <i className="fa-solid fa-users"></i>,
      <i className="fa-solid fa-earth-americas"></i>,
      <i className="fa-solid fa-plus"></i>,
      <i className="fa-solid fa-wand-magic-sparkles"></i>,
    ],
    content: {
      prelude: <Prelude />,
      sections: [
        <Section0 source={source} />,
        <Section1 source={source} />,
        <Section2 source={source} />,
        <Section3 source={source} />,
        <Section4 source={source} />,
      ]
    }
  }
  return <PageWithIconsScrollbar data={data} page="activity-digest" />
}

const Prelude = (): React.ReactElement =>
  <>
    <br />
    Here is the list of pieces of media that align with my&nbsp;
    <TooltipText text="ideals">
      <ul>
        <li>Available digitally</li>
        <li>Available DRM-free or free of charge</li>
        <li>Can be consumed on FOSS operating systems (like Linux)</li>
        <li>For video games, they have to be open-source</li>
      </ul>
    </TooltipText>.
  </>

const Section0 = ({source}: {source: unknown}): React.ReactElement =>
  <>
    <h2>Individual</h2>
    {renderItems(source, ["individual"])}
  </>

const Section1 = ({source}: {source: unknown}): React.ReactElement =>
  <>
    <h2>Human Society</h2>

    <section>
      <h3 className="highlight">Religion</h3>
      {renderItems(source, ["human society", "religion"])}
    </section>
  </>

const Section2 = ({source}: {source: unknown}): React.ReactElement =>
  <>
    <h2>Nonhumans and the Earth</h2>

    {renderItems(source, ["nonhumans and the earth"])}
  </>

const Section3 = ({source}: {source: unknown}): React.ReactElement =>
  <>
    <h2>Other Nonfiction</h2>

    <section>
      <h3 className="highlight">Software</h3>
      {renderItems(source, ["other nonfiction", "software"])}
    </section>
  </>

const Section4 = ({source}: {source: unknown}): React.ReactElement =>
  <>
    <h2>Fiction</h2>

    {renderItems(source, ["fiction"])}
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

const renderItem = (x: Item, i: number = 0) =>
  <p key={i}>
    {x.date} —&nbsp;
    {x.link ? <a href={x.link}>{x.title}</a> : <>{x.title}</>} —&nbsp;
    {getFormatIcon(x.format)}
    {x.length && <>&ensp;{x.length}</>}
    {x.review_short && <>&ensp;<TooltipFa faclass="fa-regular fa-circle-question">{x.review_short}</TooltipFa></>}
    {x.review_ext && <>&ensp;<a href={x.review_ext} target="_blank" rel="noopener noreferrer"><i className="tooltip-fa fa-solid fa-arrow-up-right-from-square"></i></a></>}
  </p>

const renderItems = (source: unknown, keys: string[]) => {
  const arr = findObjValRecursive(source, keys)

  if (arr === undefined) {
    return <p>Loading ...</p>
  } else if (arr === null) {
    const props = keys.reduce((acc, cur) => {
      return acc + "[\"" + cur + "\"]"
    }, "")

    console.error("property " + props + " not found in", source)
    return <p>&lt;Content not found&gt;</p>
  } else {
    if (Array.isArray(arr)) {
      return (
        <>
          {
            arr.map((x, i) => {
              if (isItem(x)) {
                return renderItem(x, i)
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

      console.error("property " + props + " in", source, "must be an array")
      return <p>&lt;Wrong format&gt;</p>
    }
  }
}
