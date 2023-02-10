import React from "react"

import {TooltipText, TooltipTextWithDelay} from "../share"

export const Hi = (): React.ReactElement => (
  <div className="no-split">
    <p>
      Hi, I am Theerawat <i className="fa-regular fa-face-grin"></i>. I am living my life and producing works by, or at least not in the opposite of, <b className="highlight">what can truly matter</b>. This website serves as an outlet for who I am and my activities. Here are&nbsp;
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

    <h2 className="highlight">What Can Truly Matter</h2>

    <div className="stanzas">
      <div>Been here for long while<br />
      Never know the why<br />
      I know what it means<br />
      but no sense it seems.</div>

      <div>Look! No matter slave or duchess<br />
      On the sphere of pointlessness<br />
      Be filled with difficulties<br />
      Any step is illusory.</div>

      <div>One day the epiphany<br />
      struck me with undeniability.<br />
      Obscured but true like<br />
      water to fish; air to flies.</div>

      <div>Without all these beings<br />
      Senseless stones falling<br />
      Thud! Bang! Crack! Here debris<br />
      Complaint? Who is it?</div>

      <div>On the path of no belief,<br />
      what truly matter indeed<br />
      can only be the flow<br />
      of those who may feel low.</div>

      <div>May this website be light<br />
      reflected from my flight.<br />
      Everyday. Day and night<br />
      Along the souls of the wise</div>
    </div>
  </div>
)
