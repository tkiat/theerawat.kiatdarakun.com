import React from "react"

import {TooltipText, TooltipTextWithDelay} from "../share"

export const Hi = (): React.ReactElement =>
  <div className="no-split">
    <p>Hi, I am Theerawat <i className="fa-regular fa-face-grin"></i>. I live by my judgments and interpretations of <b className="highlight">the true meaning of life</b> and produce works on sustainability, software, and philosophy that reflect them. I possess good English and analytical skills and a background in communications technology. Here are&nbsp;
      <TooltipTextWithDelay text="my contact info">
        <span className="notbold">
          <i className="fa-regular fa-envelope"></i> <span style={{unicodeBidi: "bidi-override", direction: "rtl"}}>moc.nukaradtaik@tawareeht</span> <i className="fa-solid fa-key"></i> <a className="contact__link" href="https://raw.githubusercontent.com/tkiat/configs-and-scripts/main/configs/gpg/public.pgp" target="blank">GPG Public Key</a>
        </span>
      </TooltipTextWithDelay>
      , the&nbsp;
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
      &nbsp;for assets on this website, and the&nbsp;
      <TooltipTextWithDelay text="license">
        <span className="notbold">
          This work is licensed under the Creative Commons Attribution-NonCommercial-NoDerivs 3.0 Unported License. To view a copy of this license, visit http://creativecommons.org/licenses/by-nc-nd/3.0/ or send a letter to Creative Commons, PO Box 1866, Mountain View, CA 94042, USA.
        </span>
      </TooltipTextWithDelay>
      &nbsp;for the content here.
    </p>

    <h3 className="highlight">The True Meaning of Life</h3>

    <p>
      This is the summary of my view on&ensp;
      <TooltipText text="Meaning">
        Meaning is a sense of importance, which requires a <i>conscious</i> inclination toward or against something. It seems only emotions, sensory experiences, and thoughts can create meaning.
      </TooltipText>
      &ensp;-&gt;&ensp;
      <TooltipText text="Meaning of Life">
        Meaning of life is a sense of importance associated with life, which may be perceived by any capable entity (this can be that life itself or one or more other entities). The definitions of life and other entities depend on knowledge and beliefs: some believe in souls; some believe in God; some believe only in their ideas of the physical world; some believe that only their consciousness exists.
      </TooltipText>
      &ensp;-&gt;&ensp;
      <TooltipText text="The True Meaning of Life">
        Imagine I create a unique, blue unicorn named Bob. Even though Bob is fictional, its true color is blue. Painting it using a different color other than blue makes that a quality of it but that quality is not true. The same applies to the true meaning of life, which is the meaning associated with the essence of life itself, no matter if life is fictional or not. Therefore, to me, meaning created by my emotions or my sensory experiences is always true, while meaning created by my thoughts alone is always untrue.
      </TooltipText>
    </p>
  </div>
