import React from 'react'
import {MyTooltip, MyTooltipWithDelay} from "../share/MyTooltip"

export const Character = (): React.ReactElement => (
  <>
    <br />

    <div>
      <span className="bold highlight">Skills: </span>

      <span>Hard Skills: </span>
      &nbsp;|&nbsp;
      <span>Soft Skills: </span>
    </div>

    <br />

    <div>
      <span className="bold highlight">Appearance: </span>

      <MyTooltipWithDelay text="Others">
        <ul>
          <li>Thai</li>
          <li>Millennials</li>
        </ul>
      </MyTooltipWithDelay>
    </div>

    <br />

    <div>
      <span className="bold highlight">Personality Test: </span>

      <MyTooltipWithDelay text="MBTI">
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
      <MyTooltipWithDelay text="Big 5">
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
      <MyTooltipWithDelay text="Four Temperaments">
        <p>Taken on 31 Mar 2021 from <a href="http://openpsychometrics.org/tests/O4TS/">here</a></p>
        <ul>
          <li>Choleric: 12</li>
          <li>Melancholic: 12</li>
          <li>Sanguine: 5</li>
          <li>Phlegmatic: 22</li>
        </ul>
      </MyTooltipWithDelay>
    </div>

    <br />

    <div>
      <span className="bold highlight">Inclination: </span>

      <MyTooltip text="Interests">
        <ul>
          <li>(Free and) Open Source Software</li>
          <li>Programming</li>
          <li>Philosophy</li>
          <li>Sustainability</li>
          <li>Minimalism</li>
          <li>Less Waste Lifestyle</li>
          <li>Veganism</li>
          <li>Buddhism</li>
        </ul>
      </MyTooltip>
      &nbsp;|&nbsp;
      <MyTooltip text="Behavior">
        <ul>
          <li>Rise Early</li>
          <li>Disciplined and Predictable</li>
        </ul>
      </MyTooltip>

      &nbsp;| Preference for&nbsp;
      <MyTooltip text="Belongings">
        <ul>
          <li>Always Have Bicycle</li>
          <li>Prefer Small Form Factor (e.g., 12.5 inch Thinkpad X260)</li>
          <li>Have Less Stuff and Clean Often</li>
          <li>Get rid of all physical books in favor of ebooks.</li>
        </ul>
      </MyTooltip>
      ,&nbsp;
      <MyTooltip text="Companion">
        <ul>
          <li>No Pet Except Adoption</li>
          <li>Value Solitude (Outside of Work)</li>
          <li>Prefer to Grow Edible Plants</li>
        </ul>
      </MyTooltip>
      ,&nbsp;
      <MyTooltip text="Management">
        <ul>
          <li>Simplicity and discipline are the top priorities.</li>
        </ul>
      </MyTooltip>

      &nbsp;| Attitude Toward&nbsp;
      <MyTooltip text="Thought">
        <ul>
          <li>Pleasure is temporary. Don't trade it with something more valuable (like my body).</li>
          <li>Let awareness, not mind, lead my life.</li>
          <li>It doesn't make sense in any circumstance to be sad, angry, or attached to something/somebody.</li>
        </ul>
      </MyTooltip>
      ,&nbsp;
    </div>

    <br />

    <div>
      <span className="bold highlight">Life Purpose</span>: Because of the realization of my&nbsp;
      <MyTooltip text="existence">
        <p>It took almost one year of constant comtemplation about the point of life and I finally found it. Without any sentient being from the universe, “goodness” and “badness” don't exist—who is gonna complain if the earth is shattered in million halves right? Since the the objective point of life doens't exist, I was depressed for quite a while. However, that realization cannot be applied to low-level creatures fully, for it cannot reason. Since I share many instincts with those creatures, it cannot be fully applied to me as well. Therefore, my only hope is my subjective self.</p>
      </MyTooltip>
      &nbsp;and then my&nbsp;
      <MyTooltip text="value">
        <p>What should be my personal values? Almost every quality is not desirable. Being very rich is subject to being exploited; being too white is subject to being disliked by anti-white people; being a businessman is subject to a businessman's problems. The exception is being wise: better judgment is always desirable. In addition, as I have searched for meaning for so long, I know I subjectively want wisdom. I shall live my life toward this direction.</p>

        <p>Wisdom is about the ability to judge. In courts, good judges consider only the evidence, not beliefs. Likewise, the wisest way of life is based on awareness, for many things in the mind is made up. The awareness can be expanded by memory and logic as well since they are pure, i.e. depending on only inputs.
        </p>
      </MyTooltip>
      , I want to live by awareness, memory, and logic, record my own exemplary record about this way of life, and write a book about it. If time and resources allowed, I will help others to do the same as well by, e.g., opening an affordable vegan restaurant.
    </div>
  </>
)
// 
//     <br />
// 
//     <div>
//       <span className="bold highlight">Outer Traits: </span>
// 
//       <MyTooltip text="Behavior">
//         <ul>
//           <li>Calm and Stable</li>
//           <li>Dislike Pointless Arguments</li>
//           <li>Quiet and Smile Less (Outside of Work)</li>
//           <li>Don't Gossip</li>
//         </ul>
//       </MyTooltip>
//       &nbsp;|&nbsp;
//       <MyTooltip text="Body">
//         <ul>
//           <li>177 cm</li>
//           <li>Ectomorphs</li>
//           <li>Brown Skin</li>
//           <li>Black and Short Hair</li>
//           <li>Don't Grow Long Bread</li>
//         </ul>
//       </MyTooltip>
//       &nbsp;|&nbsp;
//       <MyTooltip text="Clothing and Accessories">
//         <ul>
//           <li>No Piercings and Tattoos</li>
//           <li>Don't Usually Wear Watch</li>
//           <li>Wear Prescription Glasses</li>
//           <li>Usually Wear Short Pants Without Shirt at Home</li>
//         </ul>
//       </MyTooltip>
//       &nbsp;|&nbsp;
//       <MyTooltip text="Food & Drinks">
//         <ul>
//           <li>Least Processed</li>
//           <li>Cook Myself</li>
//           <li>Stored in Glass Container</li>
//           <li>Non-Chilled Water</li>
//           <li>Loose Leaf Tea Over Teabags</li>
//         </ul>
//       </MyTooltip>
//       &nbsp;|&nbsp;
//     </div>
