import React from 'react'

import {MyTooltip} from "../share/MyTooltip"

export const Character = (): React.ReactElement => (
  <>
    <h1>Personal Traits</h1>

    <ul>
      <li>
        <span className="bold highlight">Personality: </span>

        <a href="https://www.16personalities.com/">
          <MyTooltip text="MBTI Test">
            <p>https://www.16personalities.com/</p>
            <p>Taken on 31 Mar 2021</p>
            <ul>
              <li>(I)ntroverted (79%) - (E)xtraverted</li>
              <li>I(N)tuitive (52%) - Ob(S)ervant</li>
              <li>(T)hinking (51%) - (F)eeling</li>
              <li>(J)udging(58%) - (P)rospecting</li>
              <li>(A)ssertive (65%) - (T)erbulent</li>
            </ul>
          </MyTooltip>
        </a>
        &nbsp;|&nbsp;
        <a href="https://openpsychometrics.org/tests/IPIP-BFFM/">
          <MyTooltip text="Big 5 Test">
            <p>https://openpsychometrics.org/tests/IPIP-BFFM/</p>
            <p>Taken on 31 Mar 2021</p>
            <ul>
              <li>Extroversion: 11 (percentile)</li>
              <li>Emotional Stability: 57</li>
              <li>Agreeableness: 7</li>
              <li>Conscientiousness: 95</li>
              <li>Intellect/Imagination: 46</li>
            </ul>
          </MyTooltip>
        </a>
        &nbsp;|&nbsp;
        <a href="http://openpsychometrics.org/tests/O4TS/">
          <MyTooltip text="Four Temperaments Test">
            <p>http://openpsychometrics.org/tests/O4TS/</p>
            <p>Taken on 31 Mar 2021</p>
            <ul>
              <li>Choleric: 12</li>
              <li>Melancholic: 12</li>
              <li>Sanguine: 5</li>
              <li>Phlegmatic: 22</li>
            </ul>
          </MyTooltip>
        </a>
        &nbsp;|&nbsp;
        <MyTooltip text="Outer Personality">
          <ul>
            <li>Quiet</li>
            <li>Calm and Stable</li>
            <li>Dislike Pointless Arguments</li>
            <li>Smile Less</li>
            <li>Don't Gossip</li>
          </ul>
        </MyTooltip>
        &nbsp;|&nbsp;
        <MyTooltip text="Interests">
          <ul>
            <li>(Free and) Open Source Software</li>
            <li>Programming</li>
            <li>Philosophy</li>
            <li>Sustainability</li>
            <li>Minimalism</li>
            <li>Less Waste Lifestyle</li>
            <li>Veganism</li>
            <li>Theravada and Zen Buddhism</li>
          </ul>
        </MyTooltip>
      </li>
      <li>
        <span className="bold highlight">Appearance: </span>
        <MyTooltip text="Body">
          <ul>
            <li>177 cm</li>
            <li>57 kg</li>
            <li>Ectomorphs</li>
            <li>Brown Skin</li>
          </ul>
        </MyTooltip>
        &nbsp;|&nbsp;
        <MyTooltip text="Hair">
          <ul>
            <li>Black</li>
            <li>Short</li>
            <li>Don't Grow Long Bread</li>
          </ul>
        </MyTooltip>
        &nbsp;|&nbsp;
        <MyTooltip text="Accessory">
          <ul>
            <li>No Piercings and Tattoos</li>
            <li>Don't Usually Wear Watch</li>
            <li>Wear Prescription Glasses</li>
          </ul>
        </MyTooltip>
      </li>
      <li>
        <span className="bold highlight">Preferences: </span>
        <MyTooltip text="Food & Drinks">
          <ul>
            <li>Least Processed</li>
            <li>Self-Cooked</li>
            <li>Stored in Glass Container</li>
            <li>Warm Water</li>
            <li>Loose Leaf Tea Over Teabags</li>
          </ul>
        </MyTooltip>
        &nbsp;|&nbsp;
        <MyTooltip text="Companion">
          <ul>
            <li>No Pet Except Adoption</li>
            <li>Prefer Being Single Unless We Share Life Purposes</li>
            <li>Value Solitude</li>
            <li>Prefer to Grow Edible Over Decorative Plants</li>
          </ul>
        </MyTooltip>
        &nbsp;|&nbsp;
        <MyTooltip text="Belongings">
          <ul>
            <li>Always Have Bicycle</li>
            <li>Prefer Small Form Factor (e.g., 12.5 inch Thinkpad X260)</li>
            <li>Have Less Stuff and Clean Often</li>
          </ul>
        </MyTooltip>
        &nbsp;|&nbsp;
        <MyTooltip text="Schedule">
          <ul>
            <li>Rise Early</li>
            <li>Disciplined and Predictable</li>
          </ul>
        </MyTooltip>
      </li>
      <li>
        <span className="bold highlight">Other Qualities: </span>Thai | Being Raised in Thailand | Millennials | Straight | Zodiac Sign: Cancer
      </li>
    </ul>

    <h1>Aspirations</h1>

    <ul>
      <li><span className="bold highlight">Life Purpose</span>: To live by the reality and, if time and resources allowed, help others to do the same as well.</li>
      <li><span className="bold highlight">Goals</span>: Examine my life purpose philosophically to ensure its validity -> Create a framework of how to live by the reality -> Try to live by the reality and improve myself in the process. Also record some of my activities to ensure my integrity -> Finish a book and/or a website that describes my philosophy and share them -> If time and resources allowed, make a direct impact to the outside world (e.g., open an affordable vegan restaurant).</li>
    </ul>
  </>
)
