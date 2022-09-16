import React from 'react'
import {MyTooltip, MyTooltipWithDelay} from "../share/MyTooltip"

export const Character = (): React.ReactElement => (
  <>
    <h1>Personal Traits</h1>

    <div>
      <span className="bold highlight">Personality: </span>

      <MyTooltipWithDelay text="MBTI Test">
        <p>Taken on 31 Mar 2021 from <a href="https://www.16personalities.com/">here</a></p>
        <ul>
          <li>(I)ntroverted (79%) - (E)xtraverted</li>
          <li>I(N)tuitive (52%) - Ob(S)ervant</li>
          <li>(T)hinking (51%) - (F)eeling</li>
          <li>(J)udging(58%) - (P)rospecting</li>
          <li>(A)ssertive (65%) - (T)erbulent</li>
        </ul>
      </MyTooltipWithDelay>
      &nbsp;|&nbsp;
      <MyTooltipWithDelay text="Big 5 Test">
        <p>Taken on 31 Mar 2021 from <a href="https://openpsychometrics.org/tests/IPIP-BFFM/">here</a></p>
        <ul>
          <li>Extroversion: 11 (percentile)</li>
          <li>Emotional Stability: 57</li>
          <li>Agreeableness: 7</li>
          <li>Conscientiousness: 95</li>
          <li>Intellect/Imagination: 46</li>
        </ul>
      </MyTooltipWithDelay>
      &nbsp;|&nbsp;
      <MyTooltipWithDelay text="Four Temperaments Test">
        <p>Taken on 31 Mar 2021 from <a href="http://openpsychometrics.org/tests/O4TS/">here</a></p>
        <ul>
          <li>Choleric: 12</li>
          <li>Melancholic: 12</li>
          <li>Sanguine: 5</li>
          <li>Phlegmatic: 22</li>
        </ul>
      </MyTooltipWithDelay>
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
    </div>
    <br />
    <div>
      <span className="bold highlight">Preferences: </span>
      <MyTooltip text="Food & Drinks">
        <ul>
          <li>Least Processed</li>
          <li>Self-Cooked</li>
          <li>Stored in Glass Container</li>
          <li>Non-Chilled Water</li>
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
    </div>
    <br />
    <div>
      <span className="bold highlight">Other Traits: </span>

      <MyTooltip text="Body">
        <ul>
          <li>177 cm</li>
          <li>57 kg</li>
          <li>Ectomorphs</li>
          <li>Brown Skin</li>
          <li>Black and Short Hair</li>
          <li>Don't Grow Long Bread</li>
        </ul>
      </MyTooltip>
      &nbsp;|&nbsp;
      <MyTooltip text="Clothing and Accessories">
        <ul>
          <li>No Piercings and Tattoos</li>
          <li>Don't Usually Wear Watch</li>
          <li>Wear Prescription Glasses</li>
          <li>Usually Wear Short Pants Without Shirt at Home</li>
        </ul>
      </MyTooltip>
      &nbsp;| Thai | Millennials | Straight | Zodiac Sign: Cancer
    </div>

    <h1>Aspirations</h1>

    <p><span className="bold highlight">Life Purpose</span>: To live by the reality and, if time and resources allowed, help others to do the same as well.</p>

    <p><span className="bold highlight">Goals</span>: Create a framework of how to live by the reality -&gt; Follow that lifestyle and record some of my activities to ensure my integrity -&gt; Share this way of life and my record to the outside world -&gt; Extend the scope beyond myself in the physical world (e.g., open an affordable vegan restaurant) if time and resources allowed.</p>
  </>
)
