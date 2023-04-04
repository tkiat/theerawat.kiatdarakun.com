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
      Based on the broadest definition of&nbsp;
      <TooltipText text="meaning">
        Only subjective consciousness may have meaning (i.e., a sense of importance) <i>on its own</i> as the universe without such cannot have any meaning. Therefore, in the broadest sense, only subjective consciousness, together with things that can support or oppose it, may have meaning.
      </TooltipText>
      , one's judgments and interpretations of&nbsp;
      <TooltipText text="true meaning">
        <div>True meaning is meaning bounded by truths. In the broadest sense, only subjective consciousness that reflects truths, together with things that can support or oppose it, may have true meaning.</div>
        <br />
        <div>What are truths? I can only be certain of the existence of my conscious experience, not the truth of the object of such experience. Therefore, the only false thing I know is equating two different conscious experiences, e.g., imagination as a physical quality, memory as feeling, and sensory perception plus thought as another sensory perception (like jealousy).</div>
      </TooltipText>
      &nbsp;constitute one's true meaning of life.
    </p>
  </div>
