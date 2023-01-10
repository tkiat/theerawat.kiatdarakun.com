import React from "react"

import {FaTooltip, MyTooltip, MyTooltipWithDelay} from "../share/MyTooltip"

export const Create = (): React.ReactElement =>
  <>
    <h2>Software</h2>

    <p>
      <b className="highlight">Projects</b>
      &nbsp;—&nbsp;
      <span>[2022]</span>&nbsp;
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

      &nbsp;—&nbsp;
      <span>[2021]</span>&nbsp;
      <MyTooltipWithDelay text="Personal Website">
        <a href="https://github.com/tkiat/tkiat.github.io">Link</a> — <b className="highlight">[Typescript, React.js, SCSS, Inkscape]</b> — It's this website. I wrote it from scratch.
      </MyTooltipWithDelay>
      &ensp;
      <MyTooltipWithDelay text="A Freedom Blog">
        <a href="https://github.com/tkiat/a-freedom-blog">Link</a> — <b className="highlight">[Purescript, React.js, SCSS]</b> —A blog that I wrote from scratch that promotes freedom.
      </MyTooltipWithDelay>

      &nbsp;—&nbsp;
      <span>[2019]</span>&nbsp;
      <MyTooltipWithDelay text="Christmas Card">
        <a href="https://github.com/tkiat/task/tree/main/christmas-mardon">Link</a> — <b className="highlight">[HTML, SCSS, JS]</b> — I gave it to my Mother's new husband in Norway at Christmas 2019.
      </MyTooltipWithDelay>
    </p>

    <p>
      <b className="highlight">Toy Projects</b>
      &nbsp;—&nbsp;
      <span>[2018]</span>&nbsp;
      <MyTooltipWithDelay text="RegEx Emulator">
        <a href="https://codepen.io/tkiatd/pen/bGBWvza">Link</a> — <b className="highlight">[HTML, SCSS, JS]</b> — I simulated a regex program by overlaying the highlight layer on top of textbox.
      </MyTooltipWithDelay>
      &ensp;
      <MyTooltipWithDelay text="Typing Practice">
        <a href="https://codepen.io/tkiatd/pen/oNYWdLz">Link</a> — <b className="highlight">[HTML, SCSS, JS]</b> — I simulated a typing practice program.
      </MyTooltipWithDelay>
    </p>

    <hr />

    <h2>Content</h2>

    <p>
      <b className="highlight">Personal Blog</b>
      &nbsp;—&nbsp;
      <s>A Freedom Blog</s> &nbsp;
      <FaTooltip faclass="fa-solid fa-circle-info">
        [<b className="highlight">Abandoned in 2021</b>] <a href="https://a-freedom-blog.kiatdarakun.com">Link</a> — This personal blog is oriented toward the freedom-friendly stuff of mixed qualities on many topics. I abandoned it in favor of a newer blog based on awareness. I should be able to migrate a lot of content from here.
      </FaTooltip>
    </p>

    <p><b className="highlight">Video Channel</b></p>

    <ul>
      <li>
        <p>
          <b className="highlight"></b>Freedom in Computing &nbsp;
          <FaTooltip faclass="fa-solid fa-circle-info">
            I advocate FOSS operating systems (since they are very fundamental), the availability of FOSS application software alternatives (for accessibility to the poor), and OSS for entertainment softeware like video games (for the sake of transparency). I create this channel out of the wish to enhance freedom in the world of computing. I plan to add more videos down the road.
          </FaTooltip>
        </p>
        <ul>
          <li><a href="https://www.youtube.com/watch?v=1XVm_dLN5Zo">2021-02-06</a> — SuperTux All Secrets (World 1-2)</li>
        </ul>
      </li>

      <li>
        <p>
          <s>Short Games Only</s> &nbsp;
          <FaTooltip faclass="fa-solid fa-circle-info">
            [<b className="highlight">Abandoned</b>] It contains just replays of two games without commentaries. I abandoned them in favor of DRM-free and open source software.
          </FaTooltip>
        </p>
        <ul>
          <li><a href="https://youtu.be/NemKpZkV8yY">2020-06-01</a> — [Clash Royale] I Use only Small Skeletons to Finish Prince Challenge!</li>
          <li><a href="https://youtu.be/S5aLLY3Cn7I">2020-05-30</a> — [Clash Royale] Road to 5000 Trophies as Level 1</li>
          <li><a href="https://youtu.be/j3CXU1Z3FB0">2020-05-20</a> — [Clash Royale] Sudden Death Challenge with Elixir Golem Cycle Deck</li>
          <li><a href="https://youtu.be/1f9Pt9xYI-4">2019-11-13</a> — [Cryptark] Final Mission - All Systems Destroyed</li>
          <li><a href="https://www.youtube.com/watch?v=yo89TlBl33E">2019-11-13</a> — [Cryptark] Final Mission in Rogue Mode</li>
        </ul>
      </li>
    </ul>
  </>
