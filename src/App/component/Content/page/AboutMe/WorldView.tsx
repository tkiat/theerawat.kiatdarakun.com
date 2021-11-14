import React from 'react'

import {MyReactTooltip} from "../../share/MyReactTooltip"

export const WorldView = (): React.ReactElement =>
  <>
    <ul>
      <li>
        <span className="bold highlight">Ethics: </span>
        <MyReactTooltip id="tt-wv-software" text="Software" place="bottom">
          <p>In my opinion, ethical software should satisfy the followings</p>
          <ol>
            <li>Critical software like operating systems and bootloaders are indispensable. No one should have the right to revoke the right of users or else everybody will be screwed up. They should be FOSS so that at least someone can fork it and continue the glory.</li>
            <li>Non-critical software like image editor installed on a client computer should be at least open-source. They shouldn't be closed-source to ensure that they don't violate others' license or user privacy. They don't have to be FOSS because it is easier to create the alternatives.</li>
            <li>The server-side software can be closed source because even they release the source code they cannot prove anyway that they actually use it. You should not mistaken this as malicious Javascripts which should satisfy the second rule.</li>
          </ol>
          <p>Even though I do think the software that violates the second or third rule is unethical. It is not unethical to distribute them. At the end, only the availability of the free and open-source software matters, just make sure they exist as alternatives. The distribution like Debian does the most right thing in this regard.</p>
        </MyReactTooltip>

        <MyReactTooltip id="tt-wv-drm" text="DRM" place="bottom">
          <p>The ineffective DRM is not only unable to prevent the piracy, but also punishes the paying customers. Think of recordable media such as ebooks and movies, any DRM cannot prevent anyone from recording it while restricting the users in some way e.g. within an app.</p>
          <p>To my knowledge, the only effective DRM is the one that serves critical bits from the server like what online games do but that will make users depend on the server. This is unethical because some users might pay a lot of money for nothing.</p>
          <p>However, the subscription-based DRM is different as it, being cheaper, caters to users with lower income. Merely having access right can be compared to the most bottom section in the Maslow's hierarchy of need (having food). Sure, a user is still subject to mass surveillance and dependent to a proprietary platform/product but they can at least get more access. This is the only scenario where DRM and ethics overlap.
          </p>
        </MyReactTooltip>

        &nbsp;|&nbsp;
        <span className="tooltip-front" data-tip data-for='tt-wv-food'>Ethical Food</span>&nbsp;|&nbsp;
        <span className="tooltip-front" data-tip data-for='tt-wv-abortion'>abortion</span>&nbsp;|&nbsp;
        <span className="tooltip-front" data-tip data-for='tt-wv-abortion'>Online Privacy</span>&nbsp;|&nbsp;
        <span className="tooltip-front" data-tip data-for='tt-wv-abortion'>Porn</span>&nbsp;|&nbsp;
        <span className="tooltip-front" data-tip data-for='tt-wv-abortion'>Violence in Media</span>&nbsp;|&nbsp;
      </li>
      <li>
        <span className="bold highlight">Society: </span>
      </li>
      <li>
        <span className="bold highlight">Economy: </span>
        <span className="tooltip-front" data-tip data-for='tt-wv-equality'>Equality</span>&nbsp;|&nbsp;
      </li>
      <li>
        <span className="bold highlight">Lifestyle: </span>
        <span className="tooltip-front" data-tip data-for='tt-wv-'>Food</span>&nbsp;|&nbsp;
        <span className="tooltip-front" data-tip data-for='tt-wv-'>Meaning of Life</span>&nbsp;|&nbsp;
        <span className="tooltip-front" data-tip data-for='tt-wv-'>The Best Possible Life</span>&nbsp;|&nbsp;
      </li>

    </ul>
  </>
