import React from "react"

import {TooltipText, TooltipTextWithDelay} from "../../../share"

export const Other = (): React.ReactElement =>
  <>
    <h1>Other</h1>

    <h2><u>General</u></h2>

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
      {/*
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
      */}
      )
    </div>

    <h2><u>Skills</u></h2>

    <ul className="more-gap-list">
      <li><b className="highlight">Language</b> — Thai (native), English (professional), German (basic, B1)</li>

      <li>
        <b className="highlight">Computer</b>

        <ul>
          <li>Office: basic office suite, Vim</li>
          <li>Coding: Git, Python/Typescript/React.js/SCSS/Haskell/shell scripting, etc.</li>
          <li>Linux: Debian, Nix/NixOS, QubesOS, etc.</li>
        </ul>
      </li>

      <li><b className="highlight">Soft Skills</b> — I am highly conscientious, calm, direct, and peaceful. Besides, I possess good quantitative and analytical thinking skills and always have thirst for knowledge. I have so far abided by the rules in the workplaces, and I believe I can handle most jobs.</li>
    </ul>

    <h2><u>Hobbies</u></h2>

    <ul className="more-gap-list">
      <li><b className="highlight">Low-Impact Living</b> — I value minimalism and sustainability. It is a lot of fun and creativity boosting to find a way to make my possessions and consumables less impactful to myself, other sentient beings, and the earth. I often need to make a judgment about how much I should trade my time and/or convenience for a low impact option.</li>
      <li><b className="highlight">Increase Awareness</b> — I like to digest information to reinforce my understanding of things that can truly matter. It can be news, documentaries, discoveries, inventions, opinions, etc.</li>
      <li><b className="highlight">Philosophy</b> — Knowledge of philosophy should make my work (about true meaning) more accessible to the general public. I have yet to digest a lot of works but I will do so in my free time.</li>
      <li><b className="highlight">Writing</b> — Writing is a minimalist way to convey thoughts while leaving a lot of room for the imagination.</li>
      <li><b className="highlight">Software</b> — The internet enables me to create and share my thoughts with the whole world, and software allows me to do such wonder usng only a laptop. I advocate free and open source software (FOSS) for all software up until the operating system for the sake of freedom of the user who has to depend on it.</li>
    </ul>
  </>
