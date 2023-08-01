import React from "react"
import * as jsYaml from 'js-yaml'

import {DisplayListItems, PageWithIconsScrollbar} from "../../share"

const source = "/truemeaning.yaml"

export const TrueMeaning = (): React.ReactElement => {
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
      <i className="fa-solid fa-circle-question"></i>,
      <i className="fa-solid fa-book-open-reader"></i>,
      <i className="fa-solid fa-user-pen"></i>,
    ],
    content: {
      sections: [
        <About />,
        <LitReview content={content} />,
        <MyLifeRecord content={content} />,
      ]
    }
  }
  return <PageWithIconsScrollbar data={data} page="activity-digest" />
}

const About = (): React.ReactElement =>
  <section>
    <h2>About</h2>

    <p>A long period of self-introspection has culminated in overcoming <i>long</i> analysis paralysis on what I should do in my life. The aforementioned keyword <i>long</i> here is the key to the realization that I could not be satisifed with any baseless answer until I found truths. My existential question became, how can I base my actions on truths?</p>

    <p>Nothing matters in the universe without any sentient entity, and therefore no entity should do (or should not do) anything. Now let's put a man in such universe. Initially, there is nothing he should do due to the lack of external demands. However, he will eventually become hungry. The experience of the hunger is, to him, true. He can choose not to alleviate his hunger, but that does not follow the truth. Based on this truth, he has to alleviate his pain by eating some non-sentient beings.</p>

    <p>He then realizes many other truths, such as his sensual experiences. Unless these truths can satisfy his needs, there is nothing he should do to follow them. In other words, he should follow only truths that matter to him. I will call such truths “true meaning”.</p>

    <p>Now let's remove all edible beings (except him) and put a fish near him on the ground, along with necessary cooking equipments. He, who now gets hungry again, may choose to cook it without a second thought if he is a total psychopath. However, if the empathy is inherent in him, he has to make a judgment about these two conflicting truths. This will lead to his decision to eat or not to eat that fish.</p>

    <p>In conclusion, what I want to do in my life is realizing true meaning and base my actions on it and, when conflicts happen, use judgments to resolve them. It is now my lifelong persuit to investigate what constitutes true meaning and how to live by it. This philosophy aligns with wisdom as well, because a wise person would not perform a conscious action based on things that is either unimportant or untrue. In other words, he/she also lives by true meaning.</p>

    <p>I split my work into two books of different scopes.</p>

    <ol>
      <li>
        <b>Individual scope</b>. The book focuses on true meaning in at most a single entity such as myself and another being.

        <p><u>Outline (Subject to Change)</u></p>

        <ol>
          <li>
            Introduction
            <ol>
              <li>Background</li>
            </ol>
          </li>

          <li>
            The Abstract Examination of True Meaning
            <ol>
              <li>Truth</li>
              <li>Meaning</li>
              <li>True Meaning</li>
              <li>Existing Literature Through the Lens of True Meaning</li>
            </ol>
          </li>

          <li>
            The Concrete, Non-Judgmental Examination of True Meaning
            <ol>
              <li>Nonbelievers</li>
              <li>Believers</li>
              <li>Nonhumans</li>
            </ol>
          </li>

          <li>
            The Concrete, Judgmental Examination of True Meaning
            <ol>
              <li>Nonbelievers</li>
              <li>Believers</li>
              <li>
                Me
                <ol>
                  <li>My Choices</li>
                  <li>My Records</li>
                </ol>
              </li>
            </ol>
          </li>
        </ol>
      </li>

      <li><p><b>Societal scope</b>. This book investigates the ideal society that enables each member to follow his/her true meaning. I will investigate if I can avoid any compromise in such society and, if not, how to make the best judgment for the best interests of all members. I will determine how the society tackles common issues such as media, consumables, human rights, etc.</p></li>
    </ol>
  </section>

const LitReview = ({content}: {content: unknown}): React.ReactElement =>
  <section>
    <h2>Literature Review</h2>

    <section>
      <h3><u>Individual Scope</u></h3>

      <section>
        <h4 className="highlight">Metaphysics</h4>
        <DisplayListItems
          content={content}
          keys={["litreview", "individual", "metaphysics"]}
        />
      </section>
    </section>

    <section>
      <h3><u>Societal Scope</u></h3>

      <section>
        <h4 className="highlight">Animal Welfare</h4>
        <DisplayListItems
          content={content}
          keys={["litreview", "society", "animal welfare"]}
        />
      </section>

      <section>
        <h4 className="highlight">Religion</h4>
        <DisplayListItems
          content={content}
          keys={["litreview", "society", "religion"]}
        />
      </section>
    </section>
  </section>

const MyLifeRecord = ({content}: {content: unknown}): React.ReactElement =>
  <section>
    <h2>The Record of My Life</h2>

    <p>My judgments and interpretations of true meaning has led to relatively less impactful life in all areas, for example, environment, animal welfare, and minimalism. I would like to record all my decisions and my lifestyle according to them. This will be a part of the first book.</p>

    <section>
      <h3 className="highlight"></h3>
    </section>
  </section>
