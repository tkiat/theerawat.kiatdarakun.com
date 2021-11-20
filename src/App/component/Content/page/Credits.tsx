import React from 'react'

import {MyTooltipWithDelay} from "../share/MyTooltip"

export const Credits = (): React.ReactElement =>
  <>
    <h2>Credits</h2>
    <ul>
      <li>
        <span className="bold highlight">Google Fonts: </span>
        <MyTooltipWithDelay text="Lato">
          By Lukasz Dziedzic
        </MyTooltipWithDelay>

        &nbsp;|&nbsp;
        <MyTooltipWithDelay text="Raleway">
          By Matt McInerney, Pablo Impallari, Rodrigo Fuenzalida
        </MyTooltipWithDelay>
      </li>
      <li>
        <span className="bold highlight">
          SVG Backgrounds From&nbsp;
          <a href="https://www.vecteezy.com/free-vector/nature">Vecteezy</a>:
        </span>
        &nbsp;
        <a href="https://www.vecteezy.com/vector-art/229917-high-seas-vector-illustration">Ocean</a>&nbsp;|&nbsp;
        <a href="https://www.vecteezy.com/vector-art/192739-stone-gate-in-the-desert-landscape-vector">Desert</a>&nbsp;|&nbsp;
        <a href="https://www.vecteezy.com/vector-art/271238-cherry-blossoms-background-illustration">Cherry Blossoms</a>&nbsp;|&nbsp;
        <a href="https://www.vecteezy.com/vector-art/2395226-snow-mountain-background-vector">Snow</a>
      </li>
      <li>
        <span className="bold highlight">Duck: </span>
        <a href="https://freesvg.org/duck">Duck</a>&nbsp;|&nbsp;
        <a href="https://freesvg.org/green-party-hat">Party Hat</a>&nbsp;|&nbsp;
        <a href="https://freesvg.org/necktie">Neck Tie</a>&nbsp;|&nbsp;
        <a href="https://freesvg.org/orange-balloon">Balloon</a>&nbsp;|&nbsp;
        <a href="https://freesvg.org/raemi-stop-sign">Stop Sign</a>&nbsp;|&nbsp;
        <a href="https://freesvg.org/sunglasses-black-silhouette">Sunglasses</a>&nbsp;|&nbsp;
        <a href="https://freesvg.org/usb-video-camera-symbol-vector-drawing">Camera</a>&nbsp;|&nbsp;
        <a href="https://freesvg.org/vector-drawing-of-cogwheel-gear">Cogwheel</a>&nbsp;|&nbsp;
        <a href="https://freesvg.org/vector-clip-art-of-man-geek-warning-road-sign">Geek sign</a>
      </li>
    </ul>
  </>
