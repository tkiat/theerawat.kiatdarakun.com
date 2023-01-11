import React from "react"

import {TooltipFa, TooltipFaWithDelay, TooltipText, TooltipTextWithDelay} from "../share/Tooltip"

export const Create = (): React.ReactElement =>
  <div className="page-create">
    <h2>Software</h2>

    <ul>
      <li>
        <b className="highlight">Projects</b>

        &ensp;—&ensp;
        <span className="highlight">2022</span> |&nbsp;
        pomodoro-bar&nbsp;
        <TooltipFaWithDelay faclass="fa-solid fa-globe">
        <a href="https://github.com/tkiat/pomodoro-bar">Link</a> — Haskell — A pausable, configurable Pomodoro clock with integration to xmobar/polybar. I could finish it in a day using Python, but my limited understanding of Haskell made this project longer than a month. It taught me a lot about how to manage side effects and signals in Haskell.
        </TooltipFaWithDelay>
        , pomodoro-bar-py&nbsp;
        <TooltipFaWithDelay faclass="fa-solid fa-display">
          <a href="https://github.com/tkiat/pomodoro-bar-py">Link</a> — Python3 — A single Python script alternative to pomodoro-bar
        </TooltipFaWithDelay>
        , vim-autofmt-gen&nbsp;
        <TooltipFaWithDelay faclass="fa-solid fa-display">
          <a href="https://github.com/tkiat/vim-autofmt-gen">Link</a> — Python3, Jinja 2, Vimscript — A single-script Vim/Neovim autoformatter plugin generator for CLI-based autoformatters (like yapf, brittany, js-beautify).
        </TooltipFaWithDelay>

        &ensp;—&ensp;
        <span className="highlight">2021</span> |&nbsp;
        Personal Website&nbsp;
        <TooltipFaWithDelay faclass="fa-solid fa-globe">
          <a href="https://github.com/tkiat/tkiat.github.io">Link</a> — Typescript, React.js, SCSS, Inkscape — It's this website. I wrote it from scratch.
        </TooltipFaWithDelay>
        , A Freedom Blog&nbsp;
        <TooltipFaWithDelay faclass="fa-solid fa-globe">
          <a href="https://github.com/tkiat/a-freedom-blog">Link</a> — Purescript, React.js, SCSS — A blog that I wrote from scratch that promotes freedom.
        </TooltipFaWithDelay>

        &ensp;—&ensp;
        <span className="highlight">2020</span> |&nbsp;
        <s>Personal Website</s>&nbsp;
        <TooltipFaWithDelay faclass="fa-solid fa-globe">
          Abandoned — HTML, CSS, JS, Terraform, AWS — An old version of my personal website. As a part of learning, I rented server on Digitalocean and bought a domain for it. I made the whole things (including blog in my personal webite) using vanilla Javascript. Next, I move from Digitalocean to AWS and learned Terraform in the process. I later found that this is too much of a hassle and move to SPA with managed hosting somewhere else instead.
        </TooltipFaWithDelay>
      </li>

      <li>
        <b className="highlight">Toy Projects</b>

        &ensp;—&ensp;
        <span className="highlight">2019</span> |&nbsp;
        Christmas Card&nbsp;
        <TooltipFaWithDelay faclass="fa-solid fa-globe">
          <a href="https://github.com/tkiat/task/tree/main/christmas-mardon">Link</a> — HTML, SCSS, JS — I gave it to my Mother's new husband in Norway at Christmas 2019.
        </TooltipFaWithDelay>

        &ensp;—&ensp;
        <span className="highlight">2018</span> |&nbsp;
        RegEx Emulator&nbsp;
        <TooltipFaWithDelay faclass="fa-solid fa-globe">
          <a href="https://codepen.io/tkiatd/pen/bGBWvza">Link</a> — HTML, SCSS, JS — I simulated a regex program by overlaying the highlight layer on top of textbox.
        </TooltipFaWithDelay>
        , Typing Practice&nbsp;
        <TooltipFaWithDelay faclass="fa-solid fa-globe">
          <a href="https://codepen.io/tkiatd/pen/oNYWdLz">Link</a> — HTML, SCSS, JS — I simulated a typing practice program.
        </TooltipFaWithDelay>
      </li>
    </ul>

    <hr />

    <h2>Content</h2>

    <ul>
      <li>
        <b className="highlight">Blog</b>
        <ul>
          <li>
            <b className="highlight">Personal Blog</b>

            &nbsp;—&nbsp;
            <s>A Freedom Blog</s> &nbsp;
            <TooltipFaWithDelay faclass="fa-solid fa-blog">
              <a href="https://a-freedom-blog.kiatdarakun.com">Link</a> — Abandoned in 2021 —This personal blog is oriented toward the freedom-friendly stuff of mixed qualities on many topics. I abandoned it in favor of a newer blog based on awareness. I should be able to migrate a lot of content from here.
            </TooltipFaWithDelay>
          </li>
        </ul>
      </li>

      <li>
        <b className="highlight">Video Channel</b>
        <ul>
          <li>
            <b className="highlight">Freedom in Computing</b> &nbsp;
            <TooltipFa faclass="fa-brands fa-youtube">
              I advocate FOSS operating systems (since they are very fundamental), the availability of FOSS application software alternatives (for accessibility to the poor), and OSS for entertainment softeware like video games (for the sake of transparency). I create this channel out of the wish to enhance freedom in the world of computing. I plan to add more videos down the road.
            </TooltipFa>
            <ul>
              <li><a href="https://www.youtube.com/watch?v=1XVm_dLN5Zo">2021-02-06</a> — SuperTux All Secrets (World 1-2)</li>
            </ul>
          </li>

          <li>
            <s className="highlight">Short Games Only</s> &nbsp;
            <TooltipFa faclass="fa-brands fa-youtube">
              Abandoned in 2020 — It contains just replays of two games without commentaries. I abandoned them in favor of DRM-free and open source software.
            </TooltipFa>

            <ul>
              <li><a href="https://youtu.be/NemKpZkV8yY">2020-06-01</a> — [Clash Royale] I Use only Small Skeletons to Finish Prince Challenge!</li>
              <li><a href="https://youtu.be/S5aLLY3Cn7I">2020-05-30</a> — [Clash Royale] Road to 5000 Trophies as Level 1</li>
              <li><a href="https://youtu.be/j3CXU1Z3FB0">2020-05-20</a> — [Clash Royale] Sudden Death Challenge with Elixir Golem Cycle Deck</li>
              <li><a href="https://youtu.be/1f9Pt9xYI-4">2019-11-13</a> — [Cryptark] Final Mission - All Systems Destroyed</li>
              <li><a href="https://www.youtube.com/watch?v=yo89TlBl33E">2019-11-13</a> — [Cryptark] Final Mission in Rogue Mode</li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </div>
