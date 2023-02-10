import React from "react"

import {TooltipText, TooltipTextWithDelay} from "../share"

const ContactAndCredits = (): React.ReactElement =>
  <>
  </>

export const Hi = (): React.ReactElement => (
  <div className="no-split">
    <h1 className="highlight">What Truly Matters</h1>

    <div className="stanzas">

      <p>
        <b className="highlight">
          <TooltipTextWithDelay text="Contact">
            <i className="fa-regular fa-envelope"></i> theerawat@kiatdarakun.com &nbsp;
            <i className="fa-solid fa-key"></i> <a className="contact__link" href="https://raw.githubusercontent.com/tkiat/configs-and-scripts/main/configs/gpg/public.pgp" target="blank">GPG Public Key</a>
          </TooltipTextWithDelay>
        </b>
        &ensp;/&ensp;
        <b className="highlight">
          <TooltipTextWithDelay text="Credits">
            <span className="highlight">[Font]</span> &nbsp;
            <a href="https://fonts.google.com/specimen/Lato">Lato</a>, &nbsp;
            <a href="https://fonts.google.com/specimen/Raleway">Raleway</a>
            &nbsp;—&nbsp;
            <span className="highlight">[Background]</span> &nbsp;
            <a href="https://www.vecteezy.com/vector-art/229917-high-seas-vector-illustration">Ocean</a>, &nbsp;
            <a href="https://www.vecteezy.com/vector-art/192739-stone-gate-in-the-desert-landscape-vector">Desert</a>, &nbsp;
            <a href="https://www.vecteezy.com/vector-art/271238-cherry-blossoms-background-illustration">Cherry Blossoms</a>, &nbsp;
            <a href="https://www.vecteezy.com/vector-art/2395226-snow-mountain-background-vector">Snow</a>
            &nbsp;—&nbsp;
            <span className="highlight">[Duck]</span> &nbsp;
            <a href="https://freesvg.org/duck">Duck</a>, &nbsp;
            <a href="https://freesvg.org/green-party-hat">Party Hat</a>, &nbsp;
            <a href="https://freesvg.org/orange-balloon">Balloon</a>, &nbsp;
            <a href="https://freesvg.org/sunglasses-black-silhouette">Sunglasses</a>, &nbsp;
            <a href="https://freesvg.org/usb-video-camera-symbol-vector-drawing">Camera</a>, &nbsp;
            <a href="https://freesvg.org/vector-drawing-of-cogwheel-gear">Cogwheel</a>
          </TooltipTextWithDelay>
        </b>
      </p>
    </div>
  </div>
)
//     <p className="big-text">
//       <b className="highlight">Hi, I am Theerawat <i className="fa-regular fa-face-grin"></i></b>. I made a compatible lifestyle and relevant (written) works on both personal and societal scales based on my interpretations of this basic&nbsp;
//       <TooltipText text="realization">
//         The only things that <i>can</i> truly matter, to any sentient being, lie within the flows inherent in all sentient beings.
//       </TooltipText>
//       &nbsp;my lifelong pursuits. However, I am not planning to monetize them.
//     </p>
// 
//     <p className="big-text">I plan to sustain myself primarily by working full-time in Thailand. Before this, I have been an intern/employee in Germany, a teaching and research assistant in Thailand, and a tutor in some places. I have good knowledge of English, basic (web) programming/Linux, telecommunications, and wholesome lifestyles. My soft skills include quantitative/analytical skills, discipline, self-introspection, and minimalism.
//     </p>
