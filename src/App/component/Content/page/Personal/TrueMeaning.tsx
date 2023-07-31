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
      <i className="fa-solid fa-1"></i>,
      <i className="fa-solid fa-2"></i>,
      <i className="fa-solid fa-user-pen"></i>,
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
    <p>One and a half year of self-introspection, after 31 years of my existence, has culminated in my limited realization of truth. On the one hand, I am certain about some truths, such as logical truth (like deduction) or existential truth (like my experience of the object of my awareness). On the other hand, I still don't know about the nature of the reality itself. I may discover more truths in the future, but my knowledge of truths are currently limited.</p>

    <p>Unlike truths, I can be certain that all mismatches are illusions. This includes the view that I need something that I don't truly need (attachment), the assertion that a false statement is true, and mistaking belief as knowledge. The most fundamental mismatch of all is the view that something matters but in fact it cannot truly matter, for this is the underlying force behind our illusory, conscious decisions.</p>

    <p>The most fundamental thing

    I find it the wisest to focus on the most fundamental thing, and this leads to my life persuits of true meaning.</p>


    <div>The passage of time forced me to either commit suicide or live (and optionally decide how to live), and my subjective self inspired me to live by true meaning. Based on the definitions of&nbsp;
      <TooltipText text="meaning">
        Meaning is a sense of importance, which requires a <i>conscious</i> inclination toward or against something. To my knowledge, only instinctual emotions, sensory perceptions, and thoughts can create meaning.
      </TooltipText>
      &nbsp;and&nbsp;
      <TooltipText text="the meaning of life">
        The meaning of life is a sense of importance that emerges from life, and any capable entity may perceive it. The definition of such an entity depends on knowledge and beliefs. Some believe in souls and/or God; some believe only in their ideas of the physical world; some believe that only their consciousness exists.
      </TooltipText>
      , I wish to produce works about&nbsp;
      <TooltipText text="the true meaning of life">
        <div>Having five legs is a true property of a five-leg unicorn, even though it is fictional. Likewise, the true meaning of life is a sense of importance emerging from the inherent properties of life (whether or not life is fictional), and any capable entity may perceive it.</div>

        <br />

        <div>To my knowledge, only instinctual emotions, sensory experiences, and thoughts can create meaning, out of which only the first two are the inherent qualities of life since thoughts alone are arbitrary. Based on emotions and sensory perceptions, one may use memories and thoughts to align actions and possessions with meanings emerging from them. Such action, though probably imperfect, is always a manifestation of one's pursuit of true meaning.</div>
      </TooltipText>
      &nbsp;on both individual and societal scales. These works are still in progress.
    </div>

    <h3 className="highlight">The True Meaning of Life</h3>

    <div>
      This work has four main goals: to determine the abstract definition of the true meaning of life, explore concretely a few different pursuits of true meaning, examine existing literature through the lens of true meaning, and provide some records that reflect my pursuit of true meaning.&nbsp;
      <TooltipText text="Outline">
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
              <li>
                Truth
                <ol>
                  <li>The Extension of Truth</li>
                </ol>
              </li>
              <li>
                Meaning
                <ol>
                  <li>The Extension of Meaning</li>
                </ol>
              </li>
              <li>True Meaning</li>
              <li>Existing Literature Through the Lens of True Meaning</li>
            </ol>
          </li>

          <li>
            The Concrete, Non-Judgmental Examination of True Meaning
            <ol>
              <li>
                True Meaning of Both Non-Believers and Believers
                <ol>
                  <li>Meaning from Sensory Perceptions</li>
                  <li>Meaning from Instinctual Emotions</li>
                </ol>
              </li>

              <li>
                True Meaning of Only Believers
                <ol>
                  <li>Christianity</li>
                  <li>...</li>
                </ol>
              </li>

              <li>
                True Meaning of Nonhumans
                <ol>
                  <li>Sentient Beings</li>
                  <li>Non-Sentient Beings</li>
                </ol>
              </li>
            </ol>
          </li>

          <li>
            The Concrete, Judgmental Examination of True Meaning
            <ol>
              <li>
                Humanity
                <ol>
                  <li>Judgments of a Psychopath</li>
                  <li>Judgments of a Non-Psychopath</li>
                </ol>
              </li>

              <li>
                Nonhuman Sentient Beings
                <ol>
                  <li>Judgments of a Tiger</li>
                </ol>
              </li>

              <li>
                Myself
                <ol>
                  <li>My Choices</li>
                  <li>My Records</li>
                </ol>
              </li>
            </ol>
          </li>
        </ol>
      </TooltipText>
    </div>

    <h3 className="highlight">Society That Truly Serves Members</h3>

    <p>Such society conforms to the true meaning of life (from the earlier work) that may vary among its members. This work has three main goals: examine the qualities of such society, determine how it abstractly satisfies its members, and then determine how it concretely tackles common issues such as media, consumables, human rights, etc.</p>
  </section>

const Book1LitReview = ({content}: {content: unknown}): React.ReactElement =>
  <section>
    <h2>Book #1: Literature Review</h2>

    <section>
      <h3><u>Literature Review</u></h3>

      <section>
        <h4 className="highlight"></h4>
      </section>
    </section>
  </section>

const Book1MyLifeRecord = ({content}: {content: unknown}): React.ReactElement =>
  <section>
    <h2>The Record of My Life</h2>

    <p>My judgments and interpretations of true meaning has led to relatively less impactful life in all areas, for example, environment, animal welfare, and minimalism. I would like to record all my decisions and my lifestyle according to them. This will be a part of the first book.</p>

    <section>
      <h3 className="highlight"></h3>
    </section>
  </section>

const Book2LitReview = ({content}: {content: unknown}): React.ReactElement =>
  <section>
    <h2>Book #2: Literature Review</h2>

    <section>
      <h3><u>Literature Review</u></h3>

      <section>
        <h4 className="highlight"></h4>
      </section>
    </section>
  </section>
