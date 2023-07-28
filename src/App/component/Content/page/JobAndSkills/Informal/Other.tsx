import React from "react"

import {TooltipText, TooltipTextWithDelay} from "../../../share"

export const Other = (): React.ReactElement =>
  <section>
    <h2>Other</h2>

    <ul className="more-gap-list">
      <li>
        <b className="highlight">Hard Skills</b>
        &nbsp;—&nbsp;
        <TooltipText text="Language">
          <ul>
            <li>Thai (native)</li>
            <li>English (professional)</li>
            <li>German (basic)</li>
          </ul>
        </TooltipText>
        ,&ensp;
        <TooltipText text="Computer">
          <ul>
            <li>Basic office suite, Vim</li>
            <li>Basic coding: Git, Haskell/Python/Typescript/React.js/SCSS/shell scripting, etc.</li>
            <li>Basic Linux: Debian, Nix/NixOS, QubesOS, etc.</li>
            <li>Typing speed of 60 WPM</li>
          </ul>
        </TooltipText>
      </li>

      <li>
        <b className="highlight">Soft Skills</b>
        &nbsp;—&nbsp;
        <TooltipText text="Workplace">
          <ul>
            <li><b className="highlight">Performance</b>: I am naturally inclined to learn something new, and I possess good quantitative and analytical thinking skills. I believe I can handle most jobs.</li>
            <li><b className="highlight">Teamwork</b>: As a highly conscientious person, I tend to be disciplined. I have so far abided by the rules in the workplaces.</li>
            <li><b className="highlight">Social</b>: I am a direct and friendly person and I dislike gossip. However, I have a social withdrawal tendency (outside work).</li>
          </ul>
        </TooltipText>
        ,&ensp;
        <TooltipText text="Personal">
          <ul>
            <li><b className="highlight">Self-Awareness</b>: A long self-reflection period of mine proved fruitful. I now know what truly matters to me and align my life to it.</li>
            <li><b className="highlight">Low-Impact Living</b>: I know how to save household electrity/water, eat simply, not disturb others, and frequently avoid creating unnecessary wastes.</li>
          </ul>
        </TooltipText>
      </li>

      <li>
        <b className="highlight">Trait</b>

        &nbsp;—&nbsp;
        Thai (Ethnicity and Nationality),&ensp;Millennials
      </li>
    </ul>
  </section>
