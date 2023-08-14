import React from "react"
import {Link} from "@reach/router"
import * as jsYaml from 'js-yaml'

import {getFaClassName, DisplayListItems, PageWithIconsScrollbar, TooltipText} from "../../share"
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
      <i className="fa-solid fa-gamepad"></i>,
      <i className="fa-solid fa-yin-yang"></i>,
      <i className="fa-solid fa-wand-magic-sparkles"></i>,
      <i className="fa-solid fa-person-circle-plus"></i>,
      <i className="fa-solid fa-person-biking"></i>,
      <i className="fa-solid fa-person-running"></i>,
    ],
    content: {
      prelude: <Prelude />,
      sections: [
        <Gaming content={content} />,
        <ConsumingNonfiction content={content} />,
        <ConsumingFiction content={content} />,
        <Creating content={content} />,
        <Cycling />,
        <Running content={content} />,
      ]
    }
  }
  return <PageWithIconsScrollbar data={data} page="personal-bio" />
}

const Prelude = (): React.ReactElement =>
  <>
    <p>This section is about how I spend my leisure time apart from my professional activities and my work on <a href={window.location.origin + "/" + paths[3]}>true meaning</a>. All media here align with my philosophical&nbsp;
    <TooltipText text="ideals">
      1. Available free of charge, DRM-free, or as part of a subscription
      <br />
      2. Available digitally on FOSS operating systems (like Linux)
    </TooltipText>.
    </p>
  </>

const Gaming = ({content}: {content: unknown}): React.ReactElement =>
  <>
    <h1>Gaming</h1>

    <DisplayListItems
      content={content}
      keys={["gaming"]}
    />
  </>

const ConsumingNonfiction = ({content}: {content: unknown}): React.ReactElement =>
  <>
    <h1>Consuming Nonfiction</h1>

    {/*<p>&lt;Finished Date&gt; — &lt;Title&gt; &lt;Audio <i className={getFaClassName("audio")}></i>, Comics <i className={getFaClassName("image")}></i>, Course <i className={getFaClassName("course")}></i>, Text <i className={getFaClassName("text")}></i>, Video <i className={getFaClassName("video")}></i>&gt; — &lt;Length&gt; &lt;Review&gt;</p>*/}
    <p>Audio <i className={getFaClassName("audio")}></i>, Comics <i className={getFaClassName("image")}></i>, Course <i className={getFaClassName("course")}></i>, Text <i className={getFaClassName("text")}></i>, Video <i className={getFaClassName("video")}></i></p>

    <DisplayListItems
      content={content}
      keys={["consuming nonfiction"]}
    />
  </>

const ConsumingFiction = ({content}: {content: unknown}): React.ReactElement =>
  <>
    <h1>Consuming Fiction</h1>

    <p>Audio <i className={getFaClassName("audio")}></i>, Comics <i className={getFaClassName("image")}></i>, Course <i className={getFaClassName("course")}></i>, Text <i className={getFaClassName("text")}></i>, Video <i className={getFaClassName("video")}></i></p>

    <DisplayListItems
      content={content}
      keys={["consuming fiction"]}
    />
  </>

const Creating = ({content}: {content: unknown}): React.ReactElement =>
  <>
    <h1>Creating</h1>

    <h2><u>Freedom in Computing</u></h2>

    <p>The ideal society, to me, offers people choices that satisfy their basic needs such as privacy. For this reason, I strongly advocate free and open-source software for all non-application software since the users often have to stick to it once installed. For application software, I advocate for the availability of FOSS alternatives (to all essential non-entertainment software) and against one-time purchase software with DRM. I created this channel out of the wish to get us closer to that ideal society.</p>

    <h3 className="highlight">Youtube Channel</h3>

    <DisplayListItems
      content={content}
      keys={["creating", "freedom in computing", "youtube channel"]}
    />

    <h2 className="abandoned">A Freedom Blog (Abandoned)</h2>

    <p className="abandoned">This <a href="https://a-freedom-blog.kiatdarakun.com" target="_blank">personal blog</a> is about freedom-friendly stuff of mixed qualities on many topics. I have abandoned it since 2021-12 due to the shift of my persuits.</p>
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
