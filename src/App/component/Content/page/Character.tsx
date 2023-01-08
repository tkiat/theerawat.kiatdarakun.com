import React from 'react'
import {MyTooltip, MyTooltipWithDelay} from "../share/MyTooltip"

export const Character = (): React.ReactElement => (
  <>
    <br />

    <div>
      <b className="highlight">Inclination</b>

      &nbsp;—&nbsp;[Personality Test]&ensp;
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
      &ensp;
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
      &ensp;
      <MyTooltipWithDelay text="Four Temperaments">
        <p>Taken on 31 Mar 2021 from <a href="http://openpsychometrics.org/tests/O4TS/">here</a></p>
        <ul>
          <li>Choleric: 12</li>
          <li>Melancholic: 12</li>
          <li>Sanguine: 5</li>
          <li>Phlegmatic: 22</li>
        </ul>
      </MyTooltipWithDelay>

      &ensp;[Preferences]&ensp;
      <MyTooltip text="Behavior">
        <ul>
          <li>Calm and Stable</li>
          <li>No Insults, Pointless Arguments,  and Gossips</li>
          <li>Quiet and Smile Less (Outside of Work)</li>
          <li>Early Bird (Except in Winter), Disciplined, and Predictable</li>
        </ul>
      </MyTooltip>
      &ensp;
      <MyTooltip text="Food & Drinks">
        <ul>
          <li>Least Processed</li>
          <li>Cook Myself</li>
          <li>Stored in Glass Container</li>
          <li>Chilled Water Only to Preserve It</li>
          <li>Loose Leaf Tea Over Teabags</li>
        </ul>
      </MyTooltip>
      &ensp;
      <MyTooltip text="Belongings">
        <ul>
          <li>Love Bicycle</li>
          <li>Prefer Small Form Factor (like 12-14 inch laptop)</li>
          <li>Have Less Stuff and Clean Weekly</li>
          <li>Prefer to Have Only Ebooks</li>
        </ul>
      </MyTooltip>
      &ensp;
      <MyTooltip text="Companion">
        <ul>
          <li>No Pet Except Adoption</li>
          <li>Value Solitude (Outside of Work)</li>
          <li>Prefer to Grow Edible Plants Rather Than Decorative Ones</li>
          <li>Prefer Being Single</li>
        </ul>
      </MyTooltip>
    </div>

    <br />

    <div>
      <span className="bold highlight"></span>
      <b className="highlight">Hobbies</b>

      &nbsp;—&nbsp;
      <MyTooltip text="(Free and) Open Source Software">
        I advocate FOSS operating systems (since they are very fundamental), the availability of FOSS application software alternatives (for accessibility to the poor), and OSS for entertainment softeware like video games (for the sake of transparency). As a result, I personally use them. I like to config my operating system and write some desktop software and scripts by my own that I find it useful and share to the world. I also write some programs for the web like this website.
      </MyTooltip>
      &ensp;
      <MyTooltip text="Philosophy">
        Philosophy is crucial for my lifelong goal (ideal personal life and society based on awareness) since it broadens my horizon. I have yet to read a lot of works but I will deinitely do so in free time.
      </MyTooltip>
      &ensp;
      <MyTooltip text="Low-Impact Living">
        My ideal life based on awareness is the one free of greediness, and thus I value minimalism and sustainability (that includes veganism). It is a lot of fun and creativity boosting to find a way to make my items (like table, lamp, detergents, food, etc.) less impactful to myself, other beings, and the earth. Oftentimes I need to trade my time and convenience for it. How much should I trade? Hmm.
      </MyTooltip>
    </div>

    <br />

    <div>
      <span className="bold highlight"></span>
      <b className="highlight">Life Purpose</b>

      &nbsp;— Because of the realization of&nbsp;
      <MyTooltip text="the point of my existence">
        <p>There is no point of my existence since, without any sentient being from the universe, “goodness”, “badness”, and any purpose don't exist. However, this realization cannot be applied to low-level creatures fully, for it cannot reason. Since I share many instincts with those creatures, it cannot be fully applied to me as well. Therefore, my only hope is my subjective self.</p>
      </MyTooltip>
      &nbsp;and then my&nbsp;
      <MyTooltip text="value">
        <p>Every goal is not desirable. A prime minister faces a prime minister's problems; a civil servant faces a civil servant's problems. As a result, I tried to do nothing. However, I had to breathe after a few seconds and that was the first wisdom I attained. I knew that living by awareness was the only thing that could satisfy me, for it was the truest experience.</p>
      </MyTooltip>
      , I want to create the work that describes the ideal personal life and society based on my own awareness, and create my own exemplary record about this way of life. If time and resources allowed, I will help others to do the same as well by, e.g., opening an affordable vegan restaurant.
    </div>

    <br />

    <div>
      <b className="highlight">Hard Skills</b>

      &nbsp;—&nbsp;
      <MyTooltip text="Language">
        <ul>
          <li>English (professional, I used English during the internship and full-time work in Germany at ease)</li>
          <li>German (basic, I could renew documents and shopping using only German)</li>
          <li>Thai (native)</li>
        </ul>
      </MyTooltip>
      &ensp;
      <MyTooltip text="Coding">
        Basic front-end dev, Git, Vim, Haskell/Python/Typescript/React.js/SCSS/shell scripting, etc.
      </MyTooltip>
      &ensp;
      <MyTooltip text="Computer">
        <ul>
          <li>Basic office software (Microsoft Office, LibreOffice, cloud storage, Graphviz, LaTeX, email hosting, etc.)</li>
          <li>Linux (Debian, Nix, NixOS, QubesOS, etc.)</li>
          <li>Typing speed of 60 WPM</li>
          <li>Desktop computer assembly</li>
        </ul>
      </MyTooltip>
      &ensp;
      <MyTooltip text="Communications">
        Obtain Bachelor and Master's degrees related to Communications technologies.
      </MyTooltip>
      &ensp;
      <MyTooltip text="Low-Impact Living">
        <ul>
          <li>Know how to save household electrity/water and avoid using unnecessary disposable products.</li>
          <li>Always cook simply for myself like boiled/stir fried vegetables and legumes, brown rice, soy milk, roasted sesame, and smoothie. I usually know how to spot non-vegan and fake organic food.</li>
        </ul>
      </MyTooltip>
    </div>

    <br />

    <div>
      <b className="highlight">Soft Skills</b>

      &nbsp;— I never want to cause unnecessary complications and sufferings to myself and others. Furthermore, I am disciplined and naturally inclined to learn something new. With good quantitative and analytical thinking skills, I believe I can handle most jobs.
    </div>

    <br />

    <div>
      <b className="highlight">Appearance</b>

      &nbsp;—&nbsp;
      <MyTooltip text="Body">
        <ul>
          <li>177 cm</li>
          <li>Ectomorphs</li>
          <li>Brown Skin</li>
          <li>Short Black Hair</li>
          <li>Short Bread and Nails</li>
        </ul>
      </MyTooltip>
      &ensp;
      <MyTooltip text="Clothing and Accessories">
        <ul>
          <li>No Piercings and Tattoos</li>
          <li>Don't Usually Wear Watch</li>
          <li>Wear Prescription Glasses</li>
          <li>Usually Wear Short Pants Without Shirt at Home</li>
        </ul>
      </MyTooltip>
      &ensp;
      <MyTooltipWithDelay text="Others">
        <ul>
          <li>Thai</li>
          <li>Millennials</li>
          <li>Almost Always Calm and not Angry</li>
        </ul>
      </MyTooltipWithDelay>
    </div>
  </>
)
//       &ensp;[Attitudes Toward]&ensp;
//       <MyTooltip text="Thought">
//         <ul>
//           <li>Pleasure is temporary. Don't trade it with something more valuable (like my body).</li>
//           <li>Let awareness, not mind, lead my life.</li>
//           <li>It doesn't make sense in any circumstance to be sad, angry, or attached to something/somebody.</li>
//         </ul>
//       </MyTooltip>
//       &ensp;
//       <MyTooltip text="Computing">
//         <ul>
//           <li>DRM in a single-purchased product, unless effective, only punishes customers. DRMs in subscription services, though imperfect, have some merits as it makes products more accessible to poor users.</li>
//           <li>All operating systems and at least one collection of firmware in all computers should be FOSS because people deserve freedom-friendly choices.</li>
//         </ul>
//       </MyTooltip>
