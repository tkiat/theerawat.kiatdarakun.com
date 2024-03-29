import React from "react"

import {TooltipTextWithDelay} from "../../../share"
import {paths} from "@app/share"

//     <p>Hi, I am Theerawat <i className="fa-regular fa-face-grin"></i>. I am an introspective person who wishes to complete my work on the philosophy of <a href={window.location.origin + "/" + paths[3]}>true meaning</a> and then consistently espouse it before dying peacefully.</p>
// 
//     <p>Since I am not going to monetize this endeavor, my professional pursuit can be independent of it. I can be a good 9-5 employee or run a 1-person business. With my (communications) engineering and teaching background and good English, computer, and analytical skills, I am determined to be a valuable asset to any organization and client.</p>
export const Intro = (): React.ReactElement =>
  <>
    <p>Hi, I am Theerawat <i className="fa-regular fa-face-grin"></i>. I can be a good 9-5 employee or run a 1-person business. With my communications engineering and teaching background and good English, computer, and analytical skills, I am determined to be a valuable asset to any organization and client.</p>

    <p>Here are&nbsp;
      <TooltipTextWithDelay text="my contact info">
        <span className="notbold">
          <i className="fa-regular fa-envelope"></i> <span style={{unicodeBidi: "bidi-override", direction: "rtl"}}>moc.nukaradtaik@tawareeht</span> <i className="fa-solid fa-key"></i> <a className="contact__link" href="https://raw.githubusercontent.com/tkiat/configs-and-scripts/main/configs/gpg/public.pgp" target="_blank">GPG Public Key</a>
        </span>
      </TooltipTextWithDelay>
      &nbsp;and the&nbsp;
      <TooltipTextWithDelay text="credits">
        <span className="notbold">
          <span className="highlight">[Font]</span> &nbsp;
          <a href="https://fonts.google.com/specimen/Lato" target="_blank">Lato</a>, &nbsp;
          <a href="https://fonts.google.com/specimen/Raleway" target="_blank">Raleway</a>
          &nbsp;—&nbsp;
          <span className="highlight">[Background]</span> &nbsp;
          <a href="https://www.vecteezy.com/vector-art/229917-high-seas-vector-illustration" target="_blank">Ocean</a>, &nbsp;
          <a href="https://www.vecteezy.com/vector-art/192739-stone-gate-in-the-desert-landscape-vector" target="_blank">Desert</a>, &nbsp;
          <a href="https://www.vecteezy.com/vector-art/271238-cherry-blossoms-background-illustration" target="_blank">Cherry Blossoms</a>, &nbsp;
          <a href="https://www.vecteezy.com/vector-art/2395226-snow-mountain-background-vector" target="_blank">Snow</a>
          &nbsp;—&nbsp;
          <span className="highlight">[Duck]</span> &nbsp;
          <a href="https://freesvg.org/duck" target="_blank">Duck</a>, &nbsp;
          <a href="https://freesvg.org/green-party-hat" target="_blank">Party Hat</a>, &nbsp;
          <a href="https://freesvg.org/orange-balloon" target="_blank">Balloon</a>, &nbsp;
          <a href="https://freesvg.org/sunglasses-black-silhouette" target="_blank">Sunglasses</a>, &nbsp;
          <a href="https://freesvg.org/usb-video-camera-symbol-vector-drawing" target="_blank">Camera</a>, &nbsp;
          <a href="https://freesvg.org/vector-drawing-of-cogwheel-gear" target="_blank">Cogwheel</a>
        </span>
      </TooltipTextWithDelay>
      &nbsp;and the&nbsp;
      <TooltipTextWithDelay text="license">
        <span className="notbold">
          This work is licensed under the Creative Commons Attribution-NonCommercial-NoDerivs 3.0 Unported License. To view a copy of this license, visit http://creativecommons.org/licenses/by-nc-nd/3.0/ or send a letter to Creative Commons, PO Box 1866, Mountain View, CA 94042, USA.
        </span>
      </TooltipTextWithDelay>
      &nbsp;for this website.
    </p>
  </>
