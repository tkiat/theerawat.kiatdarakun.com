import React from "react"

import {TooltipText, TooltipTextWithDelay} from "../share"

export const Hi = (): React.ReactElement => (
  <div className="no-split">
    <p>
      Hi, I am Theerawat <i className="fa-regular fa-face-grin"></i>. I am living my life and producing works by, or at least not in the opposite of, <b className="highlight">what truly matters</b>. This website serves as an outlet for who I am and my activities. Here are&nbsp;
      <TooltipTextWithDelay text="my contact info">
        <span className="notbold">
          <i className="fa-regular fa-envelope"></i> theerawat@kiatdarakun.com <i className="fa-solid fa-key"></i> <a className="contact__link" href="https://raw.githubusercontent.com/tkiat/configs-and-scripts/main/configs/gpg/public.pgp" target="blank">GPG Public Key</a>
        </span>
      </TooltipTextWithDelay>
      &nbsp;and the&nbsp;
      <TooltipTextWithDelay text="credits">
        <span className="notbold">
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
        </span>
      </TooltipTextWithDelay>
      &nbsp;for this website.
    </p>

    <h2 className="highlight">What Truly Matters</h2>

    <div className="stanzas">
      <div>Been here for long<br />
      Never know the why<br />
      Water flows and birds fly<br />
      But what desirable I find none</div>

      <div>Look! No matter slave or duchess<br />
      Be filled with difficulties<br />
      On the sphere of pointlessness<br />
      Any step is for the silly</div>

      <div>One day I realize the only<br />
      Always ignored but truly sensible<br />
      Like fish just sees water<br />
      Bird just sees the air<br /></div>

      <div>Without any being<br />
      Saturn curshes Mars into pieces<br />
      The debris falls into earth's terrain<br />
      Who who who is gonna complain</div>

      <div>On the path of no belief<br />
      The only thing that can matter<br />
      Can be found in the flow<br />
      Inside sentient beings</div>

      <div>May this website be light<br />
      Reflected from my path<br />
      On a small string of sensible<br />
      To remind myself what truly matter</div>
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
