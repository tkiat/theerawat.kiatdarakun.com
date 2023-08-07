import React from "react"
import {Link} from "@reach/router"
import * as jsYaml from 'js-yaml'

import {DisplayListItems, PageWithIconsScrollbar} from "../../share"
import {paths} from "@app/share"

const source = "/page/personal/hobby.yaml"

export const Hobby = (): React.ReactElement => {
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
      <i className="fa-solid fa-person-circle-plus"></i>,
      <i className="fa-solid fa-book-open-reader"></i>,
      <i className="fa-solid fa-user-graduate"></i>,
      <i className="fa-solid fa-gamepad"></i>,
      <i className="fa-solid fa-circle-play"></i>,
      <i className="fa-solid fa-person-biking"></i>,
      <i className="fa-solid fa-person-running"></i>,
    ],
    content: {
      prelude: <Prelude />,
      sections: [
        <Creating content={content} />,
        <Reading content={content} />,
        <TakingCourses content={content} />,
        <Gaming content={content} />,
        <Watching content={content} />,
        <Cycling />,
        <Running content={content} />,
      ]
    }
  }
  return <PageWithIconsScrollbar data={data} page="personal-bio" />
}

const Prelude = (): React.ReactElement =>
  <>
    <p>This section is about how I spend my leisure time apart from my professional activities and my work on <a href={window.location.origin + "/" + paths[3]}>true meaning</a>. All media here align with my philosophical ideals:</p>

    <ol>
      <li>Available free of charge, DRM-free, or as part of a subscription</li>
      <li>Available digitally on FOSS operating systems (like Linux)</li>
    </ol>
  </>

const Creating = ({content}: {content: unknown}): React.ReactElement =>
  <>
    <h1>Creating</h1>

    <h2><u>Freedom in Computing</u></h2>

    <p>I advocate free and open source software (FOSS) for all software up until the operating system and against one-time purchase digital products with DRM for the sake of user's freedom. This work promotes software that supports this cause. That being said, I currently have only one low-budget gaming video <i className="fa-regular fa-face-grin-tears"></i>.</p>

    <h3 className="highlight">Youtube Channel</h3>

    <DisplayListItems
      content={content}
      keys={["creating", "freedom in computing", "youtube channel"]}
    />

    <h2 className="abandoned">A Freedom Blog (Abandoned)</h2>

    <p className="abandoned">This <a href="https://a-freedom-blog.kiatdarakun.com">personal blog</a> is about freedom-friendly stuff of mixed qualities on many topics. I have abandoned it since 2021-12 due to the shift of my persuits.</p>
  </>

const Reading = ({content}: {content: unknown}): React.ReactElement =>
  <>
    <h1>Reading</h1>

    <h2><u>Nonfiction</u></h2>

    <DisplayListItems
      content={content}
      keys={["reading", "nonfiction"]}
    />

    <h2><u>Fiction</u></h2>

    <DisplayListItems
      content={content}
      keys={["reading", "fiction"]}
    />
  </>

const TakingCourses = ({content}: {content: unknown}): React.ReactElement =>
  <>
    <h1>Taking Courses</h1>

    <DisplayListItems
      content={content}
      keys={["taking courses", "mooc"]}
    />
  </>

const Gaming = ({content}: {content: unknown}): React.ReactElement =>
  <>
    <h1>Gaming</h1>

    <DisplayListItems
      content={content}
      keys={["gaming"]}
    />
  </>

const Watching = ({content}: {content: unknown}): React.ReactElement =>
  <>
    <h1>Watching</h1>

    <h2><u>Nonfiction</u></h2>

    <DisplayListItems
      content={content}
      keys={["watching", "nonfiction"]}
    />

    <h2><u>Fiction</u></h2>

    <DisplayListItems
      content={content}
      keys={["watching", "fiction"]}
    />
  </>

const Cycling = (): React.ReactElement =>
  <>
    <h1>Cycling</h1>

    <p>I usually cycle around where I live to get to know the community around there to get more info beyond that map applications can provide. This hobby does not only make my stay more enjoyable but also improve my quality of life.</p>

    <h2><u>Specific Trips</u></h2>

    <p>Cycling improves both my physical and mental health. It is also environmental friendly and a great way to spend time with somebody else along the trip. However, I do not want to cycle on the main road in Thailand for safety reasons.</p>

    <ul className="ul-more-space">
      <li>2017 — <u>Berlin -&gt; Potsdam (33 km)</u> — Potsdam is an attracive city at the south of Berlin. It has a beautiful palace and a lot of shops.</li>
      <li>2015-2017 — <u>Aachen -&gt; Maastricht (37 km)</u> — Maastricht is my favourite destination during my study in Aachen. One reason is that bike lanes in the Netherlands is one of the best in the world. Another reason is the destination itself. It has ports, shopping centers, good view, and fresh air. I have been there more than fifteen times.</li>
      <li>2015, 2016 — <u>Aachen -&gt; Monschau (33 km)</u> — Monschau is a small town nearby Aachen with the beautiful river and a glasswork shop. With the castle and old-style buildings, I felt like I stepped back in time. The road to Monschau is quite uphill but there are some restaurants to take a rest. I have been there two times.</li>
    </ul>
  </>

const Running = ({content}: {content: unknown}): React.ReactElement =>
  <>
    <h1>Running</h1>

    <h2><u>10 km</u></h2>

    <DisplayListItems
      content={content}
      keys={["running", "10km"]}
    />
  </>
