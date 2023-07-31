import React from "react"
import * as jsYaml from 'js-yaml'

import {DisplayListItems, PageWithIconsScrollbar, TooltipText} from "../../share"

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
      <i className="fa-solid fa-users"></i>,
      <i className="fa-solid fa-user-pen"></i>,
      <i className="fa-solid fa-mountain-city"></i>,
    ],
    content: {
      sections: [
        <About content={content} />,
        <Book1LitReview content={content} />,
        <Book1MyLifeRecord content={content} />,
        <Book2LitReview content={content} />,
      ]
    }
  }
  return <PageWithIconsScrollbar data={data} page="activity-digest" />
}

const About = (): React.ReactElement =>
  <section>
    <p>A long period of self-introspection has culminated in overcoming long analysis paralysis on what I should do in my life. The key here is the word <i>long</i> as it implied that I could not be satisfied with any baseless answer unless I found truth. In other words, what I should do is what I should truly do. The question is, what should I truly do?</p>

    <p>Nothing matters in the universe without any sentient being, for it lacks a being with enough faculties to consider anything of importance. In this scenario, no entity should do (or should not do) anything. Now let's put a single healthy adult man on the earth. Still, there is nothing he should do; there is no any external thing to accomplish as he is the only sentient being.</p>

    <p>However, some time passes and he begins to feels hungry. The experience of the feeling itself is, to him, true. He can choose not to alleviate his hunger, but that does not follow the truth. What he should <i>truly</i> do is therefore to alleviate his pain by eating some non-sentient beings.</p>

    <p>He then realizes many other truths, like his visual experience of what we would call a flowing water or his auditory experience of it. Unless he is thristy, there is nothing he should do to follow these truths. In other words, what he should truly do is to follow truths that matter to him. I shall call it “true meaning”.</p>

    <p>Now let's remove all edible beings (except him) and put a fish near him on the ground, along with necessary cooking equipments. He, now hungry again, may choose to cook it without a second thought if he is a total psychopath. However, if the empathy is inherent in him, what he should truly do becomes tricky because of the conflict. For this reason, he may or may not choose to eat the fish.</p>

    <p>In conclusion, what I should truly do is to follow true meaning and use judgments in the case of the conflict. It is now my lifelong persuit to investigate what constitutes true meaning. This philosophy should be able to significantly benefit the seekers of wisdom as well. A wise person, who possess the ability to make good judgments, would not perform a conscious action based on things that do not matter or is not true. In other words, he/she also lives by true meaning.</p>

    <p>I split my work into two books of different scopes.</p>

    <ol>
      <li>
        <b>Individual level</b>. The book focuses on true meaning in at most a single entity such as myself and another being.

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

      <li><p><b>Societal level</b>. This book investigates the ideal society that enables each member to follow his/her true meaning. I will investigate if I can avoid any compromise in such society and, if not, how to make the best judgment for the best interests of all members. I will determine how the society tackles common issues such as media, consumables, human rights, etc.</p></li>
    </ol>
  </section>

const Book1LitReview = ({content}: {content: unknown}): React.ReactElement =>
  <section>
    <h2>Individual Scope: Literature Review</h2>

    <section>
      <h3><u>Literature Review</u></h3>

      <section>
        <h4 className="highlight"></h4>
      </section>
    </section>
  </section>

const Book1MyLifeRecord = ({content}: {content: unknown}): React.ReactElement =>
  <section>
    <h2>Individual Scope: The Record of My Life</h2>

    <p>My judgments and interpretations of true meaning has led to relatively less impactful life in all areas, for example, environment, animal welfare, and minimalism. I would like to record all my decisions and my lifestyle according to them. This will be a part of the first book.</p>

    <section>
      <h3 className="highlight"></h3>
    </section>
  </section>

const Book2LitReview = ({content}: {content: unknown}): React.ReactElement =>
  <section>
    <h2>Societal Scope: Literature Review</h2>

    <section>
      <h3><u>Literature Review</u></h3>

      <section>
        <h4 className="highlight"></h4>
      </section>
    </section>
  </section>
