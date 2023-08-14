import React from "react"

import {getFaClassName, DisplayListItems} from "../../../share"
import {LitReviewList} from "./LitReview/LitReviewList"

export const LitReview = ({content}: {content: unknown}): React.ReactElement =>
  <>
    <h1>Outline and Literature Review</h1>

    <h2><u>Book #1: Individual Scope</u></h2>

    <ol>
      <li>
        Background
        <ol>
          <li>The Rejection of Nihilism</li>
          <li>Wisdom: the Only Quality That is Always Desirable</li>
          <li>Wisdom and True Meaning</li>
        </ol>
      </li>

      <li>
        The Abstract Examination of True Meaning
        <ol>
          <li>
            Truth
            <LitReviewList>
              <DisplayListItems
                content={content}
                keys={["litreview", "individual", "abstract-exam", "truth"]}
              />
            </LitReviewList>
          </li>

          <li>Meaning</li>

          <li>True Meaning</li>

          <li>Existing Literature Through the Lens of True Meaning</li>
        </ol>
      </li>

      <li>
        The Concrete, Non-Judgmental Examination of True Meaning
        <ol>
          <li>
            Humans
            Nonbelievers
            <ol>
              <li>
                Illusions
                <LitReviewList>
                  <DisplayListItems
                    content={content}
                    keys={["litreview", "individual", "concrete-nonjudg-exam", "illusions"]}
                  />
                </LitReviewList>
              </li>
            </ol>
          </li>

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

    <h2><u>Book #2: Societal Scope</u></h2>

    <p>The outline is yet to be done.</p>

    <ol>
      <li>
        Animal Welfare
        <details>
          <summary className="highlight"><u>Literature Review</u></summary>
          <DisplayListItems
            content={content}
            keys={["litreview", "society", "animal welfare"]}
          />
        </details>
      </li>

      <li>
        Religion
        <details>
          <summary className="highlight"><u>Literature Review</u></summary>
          <DisplayListItems
            content={content}
            keys={["litreview", "society", "religion"]}
          />
        </details>
      </li>
    </ol>
  </>
