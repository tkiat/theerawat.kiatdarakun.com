import React from "react"

import {TooltipText, TooltipTextWithDelay} from "../../../share"

export const About = (): React.ReactElement =>
  <>
    <h1><u>About</u></h1>

    <section>
      <h2>General</h2>

      <div>
        Thai (Ethnicity and Nationality), Millennials, Personality Tests (
        <TooltipTextWithDelay text="Big 5">
          <p>Taken on 31 Mar 2021 <a href="https://openpsychometrics.org/tests/IPIP-BFFM/">here</a></p>
          <ul>
            <li>Extroversion: 11 (percentile)</li>
            <li>Emotional Stability: 57</li>
            <li>Agreeableness: 7</li>
            <li>Conscientiousness: 95</li>
            <li>Intellect/Imagination: 46</li>
          </ul>
        </TooltipTextWithDelay>
        ,&nbsp;
        <TooltipTextWithDelay text="Four Temperaments">
          <p>Taken on 31 Mar 2021 <a href="http://openpsychometrics.org/tests/O4TS/">here</a></p>
          <ul>
            <li>Choleric: 12</li>
            <li>Melancholic: 12</li>
            <li>Sanguine: 5</li>
            <li>Phlegmatic: 22</li>
          </ul>
        </TooltipTextWithDelay>
        )
      </div>
    </section>

    <section>
      <h2>Skills</h2>

      <ul className="more-gap-list">
        <li><b className="highlight">Language</b> — Thai (native), English (professional), German (basic)</li>

        <li>
          <b className="highlight">Computer</b>

          <ul>
            <li>Office: basic office suite, Vim, 60 WPM typing speed</li>
            <li>Coding: Git, Python/Typescript/React.js/SCSS/Haskell/shell scripting, etc.</li>
            <li>Linux: Debian, Nix/NixOS, QubesOS, etc.</li>
          </ul>
        </li>

        <li><b className="highlight">Soft Skills</b> — I am highly conscientious, calm, direct, and peaceful. Besides, I possess good quantitative and analytical thinking skills and always have thirst for knowledge. I have so far abided by the rules in the workplaces, and I believe I can handle most jobs.</li>
      </ul>
    </section>
  </>
