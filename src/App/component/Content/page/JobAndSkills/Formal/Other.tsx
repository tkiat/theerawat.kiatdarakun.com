import React from "react"

import {TooltipText, TooltipTextWithDelay} from "../../../share"

export const Other = (): React.ReactElement =>
  <section>
    <h2>Other</h2>

    <h3><u>About</u></h3>

    <p>Thai (Ethnicity and Nationality), Millennials</p>

    <h3><u>Skills</u></h3>

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
