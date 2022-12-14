import React from 'react'

import {MyTooltipWithDelay} from "../share/MyTooltip"

export const Hi = (): React.ReactElement => (
  <div className="page-hi">
    <p className="big">
      <b className="highlight">Hi, I am Theerawat <span role="img" aria-hidden="true">{'\u{1F600}'}</span></b>
      &nbsp;—&nbsp;
      My lifelong pursuit is working on moral philosophical works based on awareness, memory, and logic. With an analytical mindset, I dissect my actions to determine if they align with reality. It is not surprising that I follow minimalist and low-impact lifestyles. I am not planning to monetize this pursuit.
    </p>

    <p className="big">I plan to sustain myself primarily by working full-time in Thailand. Relevant skills and knowledge include English, (web) programming, Linux, an engineering background in telecommunications, basic German, and high school Math/Physics. Previously, I have been a student and then an employee in Germany, a teaching and research assistant in Thailand, and a tutor in some places.</p>

    <p className="big">This website serves as an outlet for what I want to tell the world about myself: character, story, and activities. As I love to make records, the creation of this website brings me joy.</p>

    <hr />
    <p className="small">
      <b className="highlight">Contact</b>
      &nbsp;—&nbsp;
      <span role="img" aria-hidden="true">{'\u{2709}'}</span>&ensp;theerawat@kiatdarakun.com&ensp;
      <span role="img" aria-hidden="true">{'\u{260E}'}</span>&ensp;(+66)646468180&ensp;
      <span role="img" aria-hidden="true">{'\u{26BF}'}</span>&ensp;<a className="contact__link" href="https://raw.githubusercontent.com/tkiat/configs-and-scripts/main/configs/gpg/public.pgp" target="blank">GPG Public Key</a>
    </p>

    <p className="small">
      <b className="highlight">Credits</b>
      &nbsp;—&nbsp;
      <span>[Google Fonts]</span>&ensp;
      <MyTooltipWithDelay text="Lato">
        By Lukasz Dziedzic
      </MyTooltipWithDelay>
      &ensp;
      <MyTooltipWithDelay text="Raleway">
        By Matt McInerney, Pablo Impallari, Rodrigo Fuenzalida
      </MyTooltipWithDelay>
      &ensp;<span>[SVG Backgrounds]</span>&ensp;
      <a href="https://www.vecteezy.com/vector-art/229917-high-seas-vector-illustration">Ocean</a>&ensp;
      <a href="https://www.vecteezy.com/vector-art/192739-stone-gate-in-the-desert-landscape-vector">Desert</a>&ensp;
      <a href="https://www.vecteezy.com/vector-art/271238-cherry-blossoms-background-illustration">Cherry Blossoms</a>&ensp;
      <a href="https://www.vecteezy.com/vector-art/2395226-snow-mountain-background-vector">Snow</a>
      &ensp;<span>[SVG]</span>&ensp;
      <a href="https://freesvg.org/duck">Duck</a>&ensp;
      <a href="https://freesvg.org/green-party-hat">Party Hat</a>&ensp;
      <a href="https://freesvg.org/necktie">Neck Tie</a>&ensp;
      <a href="https://freesvg.org/orange-balloon">Balloon</a>&ensp;
      <a href="https://freesvg.org/raemi-stop-sign">Stop Sign</a>&ensp;
      <a href="https://freesvg.org/sunglasses-black-silhouette">Sunglasses</a>&ensp;
      <a href="https://freesvg.org/usb-video-camera-symbol-vector-drawing">Camera</a>&ensp;
      <a href="https://freesvg.org/vector-drawing-of-cogwheel-gear">Cogwheel</a>&ensp;
      <a href="https://freesvg.org/vector-clip-art-of-man-geek-warning-road-sign">Geek sign</a>
    </p>
  </div>
)
