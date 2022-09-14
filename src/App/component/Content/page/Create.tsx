import React from "react"

import {MyTooltip} from "../share/MyTooltip"
import {MyTooltipWithDelay} from "../share/MyTooltip"

export const Create = (): React.ReactElement =>
  <>
    <h1>Without End</h1>

    <p>
      <b className="highlight">Active: </b>
      N/A

      &nbsp; — &nbsp;

      <b className="highlight">Dormant: </b>
      <a href="https://a-freedom-blog.vercel.app/">
        <MyTooltip text="A Freedom Blog">
          <b>[Personal Blog]</b> It is oriented toward the freedom-friendly stuff. Currently, it contains articles of mixed qualities on many topics. I am not sure I have time and expertise to separate each topic into a dedicated site.
        </MyTooltip>
      </a>
      &nbsp;|&nbsp;
      <a href="https://www.youtube.com/channel/UCgCypxL_GouQb_kpDrHOIyQ">
        <MyTooltip text="Freedom in Computing">
          <b>[Youtube channel]</b> I intend to add more videos about (free and) open-source software down the road, but there is currently only one SuperTux video available.
        </MyTooltip>
      </a>

      &nbsp; — &nbsp;

      <b className="highlight">Abandoned: </b>
      <a href="https://www.youtube.com/channel/UC89LAwZdhzEAQWOjLFLcbWg">
        <MyTooltip text="Short Games Only">
          <b>[Youtube channel]</b> Just replays of two games (Clash Royale and Cryptark) without commentaries.
        </MyTooltip>
      </a>
    </p>

    <h1>One-Off</h1>

    <p>
      <span className="big-text-inline">[2022] </span>

      <a href="https://github.com/tkiat/pomodoro-bar">
        <MyTooltip text="pomodoro-bar">
          <b>[Software]</b> <b className="highlight">[Haskell]</b> A pausable, configurable Pomodoro clock with integration to xmobar/polybar.
        </MyTooltip>
      </a>
      &nbsp;|&nbsp;
      <a href="https://github.com/tkiat/pomodoro-bar-py">
        <MyTooltip text="pomodoro-bar-py">
          <b>[Software]</b> <b className="highlight">[Python3]</b> A single Python script alternative to pomodoro-bar
        </MyTooltip>
      </a>
      &nbsp;|&nbsp;
      <a href="https://github.com/tkiat/vim-autofmt-gen">
        <MyTooltip text="vim-autofmt-gen">
          <b>[Software]</b> <b className="highlight">[Python3, Jinja 2]</b> A single-script Vim/Neovim autoformatter plugin generator for CLI-based autoformatters (like yapf, brittany, js-beautify).
        </MyTooltip>
      </a>
    </p>

    <p>
      <span className="big-text-inline">[2021] </span>

      <a href="https://github.com/tkiat/tkiat.github.io">
        <MyTooltip text="Personal Website">
          <b>[Software]</b> <b className="highlight">[Typescript, React.js, SCSS, Inkscape]</b> A very customizable personal website. I wrote it from scratch.
        </MyTooltip>
      </a>
      &nbsp;|&nbsp;
      <a href="https://github.com/tkiat/a-freedom-blog">
        <MyTooltip text="A Freedom Blog">
          <b>[Software]</b> <b className="highlight">[Purescript, React.js, SCSS]</b> A blog that I wrote from scratch that promotes freedom.
        </MyTooltip>
      </a>
    </p>

    <p>
      <span className="big-text-inline">[2019] </span>

      <a href="https://github.com/tkiat/task/tree/main/christmas-mardon">
        <MyTooltip text="Christmas Card">
          <b>[Software]</b> <b className="highlight">[HTML, SCSS, JS]</b> I gave it to my Mother's new husband in Norway at Christmas 2019.
        </MyTooltip>
      </a>
    </p>

    <p>
      <span className="big-text-inline">[2018] </span>

      <a href="https://codepen.io/tkiatd/pen/bGBWvza">
        <MyTooltip text="RegEx Emulator">
          <b>[Toy Project]</b> <b className="highlight">[HTML, SCSS, JS]</b> I simulated a regex program by overlaying the highlight layer on top of textbox.
        </MyTooltip>
      </a>
      &nbsp;|&nbsp;
      <a href="https://codepen.io/tkiatd/pen/oNYWdLz">
        <MyTooltip text="Typing Practice">
          <b>[Toy Project]</b> <b className="highlight">[HTML, SCSS, JS]</b> I simulated a typing practice program.
        </MyTooltip>
      </a>
    </p>
  </>
