import React from "react"

import {TooltipText, TooltipTextWithDelay} from "../share"

export const Hi = (): React.ReactElement =>
  <div className="no-split">
    <p>Hi, I am Theerawat <i className="fa-regular fa-face-grin"></i>. I live by my judgments and interpretations of <b className="highlight">the true meaning</b>. I am producing works on sustainability, software, and philosophy that reflect it. I possess good English and analytical skills and a background in communications technology. Here are&nbsp;
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
      &nbsp;for content here.
    </p>

    <h3 className="highlight">The True Meaning</h3>

    <div>
      I aspire to live by the true meaning, and I don't know any absolute truth. Therefore, I can only live the least illusory path where I minimize certainly illusory things, i.e., made-up things without any basis. True meaning requires truths and meaning, and both of them are in the eye of the beholder. However, the least illusory path requires these&nbsp;
      <TooltipText text="definitions">
        <ul>
          <li><b className="highlight">Truths</b>. Truths are everything that is not made up. A theist who has Christian faith may regard the bible as a source of truth, while some atheists may regard it as made-up texts, hence not a source of truth. Common sources of truth that many people hold include sensory perception and widely-accepted scientific research.</li>
          <li><b className="highlight">Meaning (i.e., importance)</b>. Important things are everything that is neither made up nor without any basis, and only subjective consciousness that can arise on its own can satisfy these criteria.</li>
        </ul>
      </TooltipText>.
    </div>

    <p>One may extend truths through pure transformations (like denotation and logic) and meaning by discovering what can support or oppose important things. The true meaning of life cannot go beyond such extensions.</p>
  </div>
