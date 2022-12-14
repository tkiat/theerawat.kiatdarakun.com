import React from 'react'
import {MyTooltip, MyTooltipWithDelay} from "../share/MyTooltip"

export const Character = (): React.ReactElement => (
  <>
    <h1>Character</h1>

    <div>
      <span className="bold highlight">Hard Skills: </span>

      <MyTooltip text="Language">
        <ul>
          <li>English (professional, I used English during the internship and full-time work in Germany at ease)</li>
          <li>German (basic, I could renew documents and shopping using only German)</li>
          <li>Thai (native)</li>
        </ul>
      </MyTooltip>
      ,&nbsp;
      <MyTooltip text="Coding">
        Basic front-end dev, Git, Vim, Haskell/Python/Typescript/React.js/SCSS/shell scripting, server hosting
      </MyTooltip>
      ,&nbsp;
      <MyTooltip text="Computer">
        <ul>
          <li>Basic office software (Microsoft Office, LibreOffice, cloud storage, Graphviz, LaTeX, email hosting, etc.)</li>
          <li>Basic video editing skills</li>
          <li>Linux (Debian, Nix, NixOS, QubesOS, etc.)</li>
          <li>OSS firmware (coreboot/libreboot flashing, WiFi adapter)</li>
          <li>(Desktop) computer assembly</li>
          <li>Typing speed of 60 WPM</li>
        </ul>
      </MyTooltip>
      ,&nbsp;
      <MyTooltip text="Communications">
        Obtain Bachelor and Master's degrees related to Communications technologies.
      </MyTooltip>
      ,&nbsp;
      <MyTooltip text="Cooking">
        <ul>
          <li>Always cook simply for myself like boiled/stir fried vegetables and legumes, brown rice, soy milk, roasted sesame, and smoothie.</li>
          <li>Usually know how to spot non-vegan and fake organic food.</li>
        </ul>
      </MyTooltip>
      ,&nbsp;
      <MyTooltip text="Low-Impact Living">
        <ul>
          <li>Digest a lot of media about low-impact living.</li>
          <li>Know how to save household electrity/water and avoid using unnecessary disposable products.</li>
        </ul>
      </MyTooltip>
    </div>

    <br />

    <div>
      <span className="bold highlight">Soft Skills: </span>I never want to cause unnecessary complications and sufferings to myself and others. Furthermore, I am disciplined and naturally inclined to learn something new. With good quantitative and analytical thinking skills, I believe I can handle most jobs.
    </div>

    <br />

    <div>
      <span className="bold highlight">Appearance: </span>

      <MyTooltip text="Body">
        <ul>
          <li>177 cm</li>
          <li>Ectomorphs</li>
          <li>Brown Skin</li>
          <li>Short Black Hair</li>
          <li>Short Bread and Nails</li>
        </ul>
      </MyTooltip>
      ,&nbsp;
      <MyTooltip text="Clothing and Accessories">
        <ul>
          <li>No Piercings and Tattoos</li>
          <li>Don't Usually Wear Watch</li>
          <li>Wear Prescription Glasses</li>
          <li>Usually Wear Short Pants Without Shirt at Home</li>
        </ul>
      </MyTooltip>
      ,&nbsp;
      <MyTooltipWithDelay text="Others">
        <ul>
          <li>Thai</li>
          <li>Millennials</li>
          <li>Almost Always Calm and not Angry</li>
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
          <li>Sustainability</li>
          <li>Philosophy</li>
          <li>Minimalism</li>
          <li>Less Waste Lifestyle</li>
          <li>Veganism</li>
          <li>Buddhism</li>
          <li>(Free and) Open Source Software</li>
          <li>Programming</li>
        </ul>
      </MyTooltip>
      &nbsp;|&nbsp;
      <MyTooltip text="Behavior">
        <ul>
          <li>Calm and Stable</li>
          <li>No Insults, Pointless Arguments,  and Gossips</li>
          <li>Quiet and Smile Less (Outside of Work)</li>
          <li>Early Bird, Disciplined, and Predictable</li>
        </ul>
      </MyTooltip>

      &nbsp;| Preferences for&nbsp;
      <MyTooltip text="Food & Drinks">
        <ul>
          <li>Least Processed</li>
          <li>Cook Myself</li>
          <li>Stored in Glass Container</li>
          <li>Non-Chilled Water</li>
          <li>Loose Leaf Tea Over Teabags</li>
        </ul>
      </MyTooltip>
      ,&nbsp;
      <MyTooltip text="Belongings">
        <ul>
          <li>Always Have Bicycle</li>
          <li>Prefer Small Form Factor (like 12-14 inch laptop)</li>
          <li>Have Less Stuff and Clean Weekly</li>
          <li>Get Rid of All Physical Books in Favor of Ebooks.</li>
        </ul>
      </MyTooltip>
      ,&nbsp;
      <MyTooltip text="Companion">
        <ul>
          <li>No Pet Except Adoption</li>
          <li>Value Solitude (Outside of Work)</li>
          <li>Prefer to Grow Edible Plants</li>
          <li>Prefer Being Single</li>
        </ul>
      </MyTooltip>

      &nbsp;| Attitudes Toward&nbsp;
      <MyTooltip text="Thought">
        <ul>
          <li>Pleasure is temporary. Don't trade it with something more valuable (like my body).</li>
          <li>Let awareness, not mind, lead my life.</li>
          <li>It doesn't make sense in any circumstance to be sad, angry, or attached to something/somebody.</li>
        </ul>
      </MyTooltip>
      ,&nbsp;
      <MyTooltip text="Computing">
        <ul>
          <li>DRM in a single-purchased product, unless effective, only punishes customers. DRMs in subscription services, though imperfect, have some merits as it makes products more accessible to poor users.</li>
          <li>All operating systems and at least one collection of firmware in all computers should be FOSS because people deserve freedom-friendly choices.</li>
        </ul>
      </MyTooltip>
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
