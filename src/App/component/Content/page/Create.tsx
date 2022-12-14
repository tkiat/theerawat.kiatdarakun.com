import React from "react"

import {MyTooltip, MyTooltipWithDelay} from "../share/MyTooltip"

export const Create = (): React.ReactElement =>
  <>
    <p>
      <b className="highlight">Blog</b>

      &nbsp;—&nbsp;
      <span className="highlight">Dormant: </span>

      <MyTooltipWithDelay text="A Freedom Blog">
        <a href="https://a-freedom-blog.vercel.app/">Link</a> — This blog is oriented toward the freedom-friendly stuff. Currently, it contains articles of mixed qualities on many topics. I should revise them sometime.
      </MyTooltipWithDelay>
    </p>

    <p>
      <b className="highlight">Software</b>

      &nbsp;—&nbsp;
      <span>[2022]</span>&ensp;
      <MyTooltipWithDelay text="pomodoro-bar">
        <a href="https://github.com/tkiat/pomodoro-bar">Link</a> — <b className="highlight">[Haskell]</b> — A pausable, configurable Pomodoro clock with integration to xmobar/polybar. I could finish it in a day using Python, but my limited understanding of Haskell made this project longer than a month. It taught me a lot about how to manage side effects and signals in Haskell.
      </MyTooltipWithDelay>
      &ensp;
      <MyTooltipWithDelay text="pomodoro-bar-py">
        <a href="https://github.com/tkiat/pomodoro-bar-py">Link</a> — <b className="highlight">[Python3]</b> — A single Python script alternative to pomodoro-bar
      </MyTooltipWithDelay>
      &ensp;
      <MyTooltipWithDelay text="vim-autofmt-gen">
        <a href="https://github.com/tkiat/vim-autofmt-gen">Link</a> — <b className="highlight">[Python3, Jinja 2]</b> — A single-script Vim/Neovim autoformatter plugin generator for CLI-based autoformatters (like yapf, brittany, js-beautify).
      </MyTooltipWithDelay>

      &ensp;<span>[2021]</span>&ensp;
      <MyTooltipWithDelay text="Personal Website">
        <a href="https://github.com/tkiat/tkiat.github.io">Link</a> — <b className="highlight">[Typescript, React.js, SCSS, Inkscape]</b> — It's this website. I wrote it from scratch.
      </MyTooltipWithDelay>
      &ensp;
      <MyTooltipWithDelay text="A Freedom Blog">
        <a href="https://github.com/tkiat/a-freedom-blog">Link</a> — <b className="highlight">[Purescript, React.js, SCSS]</b> —A blog that I wrote from scratch that promotes freedom.
      </MyTooltipWithDelay>

      &ensp;<span>[2019]</span>&ensp;
      <MyTooltipWithDelay text="Christmas Card">
        <a href="https://github.com/tkiat/task/tree/main/christmas-mardon">Link</a> — <b className="highlight">[HTML, SCSS, JS]</b> — I gave it to my Mother's new husband in Norway at Christmas 2019.
      </MyTooltipWithDelay>
    </p>

    <p>
      <b className="highlight">Software (fun)</b>

      &nbsp;—&nbsp;
      <span>[2018]</span>&ensp;
      <MyTooltipWithDelay text="RegEx Emulator">
        <a href="https://codepen.io/tkiatd/pen/bGBWvza">Link</a> — <b className="highlight">[HTML, SCSS, JS]</b> — I simulated a regex program by overlaying the highlight layer on top of textbox.
      </MyTooltipWithDelay>
      &ensp;
      <MyTooltipWithDelay text="Typing Practice">
        <a href="https://codepen.io/tkiatd/pen/oNYWdLz">Link</a> — <b className="highlight">[HTML, SCSS, JS]</b> — I simulated a typing practice program.
      </MyTooltipWithDelay>
    </p>

    <p>
      <b className="highlight">Video Channel</b>

      &nbsp;—&nbsp;
      <span className="highlight">Dormant: </span>
      <MyTooltipWithDelay text="Freedom in Computing">
        <a href="https://www.youtube.com/channel/UCgCypxL_GouQb_kpDrHOIyQ">Link</a> — I intend to add more videos about (free and) open-source software down the road, but there is currently only one SuperTux video available.
      </MyTooltipWithDelay>

      &nbsp;—&nbsp;
      <span className="highlight">Abandoned: </span>
      <span>[2020]</span>&ensp;
      <MyTooltipWithDelay text="Short Games Only">
        <a href="https://www.youtube.com/channel/UC89LAwZdhzEAQWOjLFLcbWg">Link</a> — It contains just replays of two games (Clash Royale and Cryptark) without commentaries. I abandoned them in favor of DRM-free and/or open source software.
      </MyTooltipWithDelay>
    </p>
  </>
