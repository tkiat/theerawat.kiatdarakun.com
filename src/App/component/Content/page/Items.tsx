import React from "react"

import {CardsMarkdown, Markdown, TabsContent} from "../share"
import {gadgets, hygiene, intro, software} from "./Items/data"

export const Items = (): React.ReactElement =>
  <TabsContent
    items={[
      {
        title: "Intro",
        content: <Markdown content={intro} />,
      },
      {
        title: "Physical",
      },
      {
        title: "Gadgets",
        content: <CardsMarkdown mdArray={gadgets} />,
      },
      {
        title: "Hygiene",
        content: <Markdown content={hygiene} />,
      },
      {
        title: "Tools",
        content: <Markdown content={hygiene} />,
      },
      {
        title: "Cloths",
        content: <Markdown content={hygiene} />,
      },
      {
        title: "Kitchenware",
        content: <Markdown content={hygiene} />,
      },
      {
        title: "Nonphysical",
      },
      {
        title: "Software",
        content: <CardsMarkdown mdArray={software} />,
      },
      {
        title: "Media",
        content: <CardsMarkdown mdArray={software} />,
      },
    ]}
    localKey="tab-index-about-items"
  />
