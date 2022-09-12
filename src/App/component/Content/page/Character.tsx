import React from 'react'

import {MyTooltip} from "../share/MyTooltip"

export const Character = (): React.ReactElement => (
  <>
    <h1>Personal Traits</h1>

    <ul>
      <li>
        <span className="bold highlight">Personality Test: </span>

        <a href="https://www.16personalities.com/">
          <MyTooltip text="MBTI">
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
        <a href="https://openpsychometrics.org/">
          <MyTooltip text="Big 5">
            <p>https://openpsychometrics.org/</p>
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
        <span className="bold highlight">Outer Personality: </span>Quiet | Stable | Calm | Dislike Pointless Arguments | Smile Less | Don't Gossip
      </li>
      <li>
        <span className="bold highlight">Interests: </span>(Free and) Open Source Software | Programming | Sustainability | Minimalism | Less Waste Lifestyle | Veganism | Theravada and Zen Buddhism
      </li>
      <li>
        <span className="bold highlight">Preference: </span>
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
        <span className="bold highlight">Other Qualities: </span>Thai | Live in Thailand | Millennials | Straight | Zodiac Sign: Cancer
      </li>
    </ul>

    <h1>Aspirations</h1>

    <ul>
      <li><span className="bold highlight">Life Purpose</span>: To live by the reality and, if time and resources allowed, help others to do the same as well.</li>
      <li><span className="bold highlight">Goals</span>: 1. Examine my life purpose philosophically to ensure its validity 2. Create a framework of how to live by the reality 3. Try to live by the reality and improve myself in the process. Also record some of my activities to ensure my integrity 4. Finish a book and/or a website that describes my philosophy 5. Tell others about it 6. If time and resources allowed, physically extend the scope beyond myself (e.g., open an affordable vegan restaurant).</li>
    </ul>
  </>
)
//     <MyTooltip text="My Personalities, Values, and Purpose">
//       <p>I want to write a book about how my personalities, values, and purpose link together and the process of creating such links.</p>
//       <p>I believe this is a prerequisite for a fulfilled life and I recommend everyone to do it. This cannot be done without an extensive research on basic psychology and philosophy but I would like to take on the challenge. I plan to improve it over time.</p>
//     </MyTooltip>
//     &nbsp;|&nbsp;
//     <MyTooltip text="Low Impact Life">
//       <p>Living without damage to the environment and others is, to me, the best life to live. I would like to experiment and then elaborate on the challenges and trade-offs in a book or a website. There are some contents like this online but I have yet to find much content for Thai localization.</p>
//     </MyTooltip>
//     &nbsp;|&nbsp;
//     <MyTooltip text="Become a Software Craftsman">
//       <p>My appreciation of free and open-source software for enabling freedom leads me to study software. I acknowledge the type checking capability of Typescript and Haskell, the simplified language like Python, all the markup languages that make documentation simpler, and the ubiquity of Javascript. I study the tools that enables reproducibility like Nix and version control like Git, and many more.</p>
//       <p>There are too many things to learn and I am learning them. Together, these tools enable functional, maintainable and scalable programs. I wish to utilize them for my work and the betterment of mankind.</p>
//     </MyTooltip>
// 
//     &nbsp;|&nbsp;
//     <MyTooltip text="Become an Excellent Writer">
//       <p>Life is too short to die alone without anything else to share with others. I believe writing is the best way to convey thoughts because the author can make it as concise as he wants and also the storage size is low. I will keep reading and writing forever :)</p>
//     </MyTooltip>
