import React from 'react'

import {MyReactTooltip} from "../../share/MyReactTooltip"

export const WorldView = (): React.ReactElement =>
  <>
    <ul>
      <li>
        <span className="bold highlight">Tech: </span>
        <MyReactTooltip id="tt-wv-software" text="Ethical Software" place="bottom">
          <p>In my opinion, ethical software should satisfy the followings</p>
          <ol>
            <li>Critical software like operating systems and bootloaders are indispensable. No one should have the right to revoke the right of users or else everybody will be screwed up. They should be FOSS so that at least someone can fork it and continue the glory.</li>
            <li>Non-critical software like image editor installed on a client computer should be at least open-source. They shouldn't be closed-source to ensure that they don't violate others' license or user privacy. They don't have to be FOSS because it is possible to create the alternatives.</li>
            <li>The server-side software can be closed source because even they release the source code they cannot prove anyway that they actually use it. You should not mistaken this as malicious Javascripts which should satisfy the second rule.</li>
          </ol>
          <p>To me, it is not unethical to distribute unethical software given a clear warning. At the end, only the availability of the free and open-source software matters, the community should just make sure they exist. The distribution like Debian does the most right thing in this regard.</p>
        </MyReactTooltip>

        &nbsp;|&nbsp;
        <MyReactTooltip id="tt-wv-drm" text="Ethical DRM" place="bottom">
          <p>The ineffective single-purchased DRM is unethical because it cannot at all prevent the piracy while punishing the paying customers e.g. restricting them within an app. The examples include DRMs on recordable media such as ebooks and movies.</p>
          <p>To my knowledge, the only effective DRM is the one that serves critical bits from the server like what online games do but that will make users dependent on the server. This can be unethical because some users might pay a lot of money for nothing.</p>
          <p>However, the subscription-based media, being cheaper, can grant low-income users more access despite being subjected to mass surveillance and dependency to the proprietary platform/product. This can be compared to the most bottom section in the Maslow's hierarchy of need (having food). DRM enables the subscription-based media so it has a merit in this regard. It is not perfect but at least a midway towards a better society.</p>
        </MyReactTooltip>

        &nbsp;|&nbsp;
        <MyReactTooltip id="tt-wv-privacy" text="Online Privacy">
          <p>Privacy is simply a basic human right but we have no right for it as long as we rely on other's work and effort. It is not ethical to ad-block Youtube because that is how they support the platform and you just steal their bandwidth. There are privacy-friendly Youtube alternatives but without the way to make money like personalized ads you cannot get too many things at zero cost. This means you might have to host videos yourself. As a consumer, you will find most popular videos hosted on the platform that give them money i.e. Youtube not MediaGoblin.</p>
          <p>It is a trade-off and because of this I tend to be neutral about the online privacy issue. The only thing I wish is the existing privacy-friendly solution to everything for the sake of human rights.</p>
        </MyReactTooltip>

        &nbsp;|&nbsp;
        <MyReactTooltip id="tt-wv-apple" text="Apple">
//         TODO not world view change to proprietary tech tell good at answer customer needs unlike linux
          <p>The hardware quality is respectable but their closed ecosystem sucks. I bought around 30 movies (only finished half of them) from iTunes and then promptly deleted my account after realizing how suck DRM and their proprietary platform are.</p>
          <p>But their products are excellent for a non-technical person as it is idiot-proof. An old person might find a single big button easier to use than any other Android phone. They have many environmental campaigns but they shouldn't forget to improve the cable life also.</p>
        </MyReactTooltip>
      </li>
      <li>
        <span className="bold highlight">Media: </span>
        <MyReactTooltip id="tt-wv-violence" text="Violence in Video Games">
          The violence in media seems acceptable if it is a kind of fantasy e.g. alien or middle-age fights. It can be problematic when it is close to real-life scenario like GTA (Grand Theft Auto) video game that can influence immature person negatively. I would suggest restricting those real-life violence to 20+ year-old audience while keeping fantasy violence at 13+ or so.
        </MyReactTooltip>

        &nbsp;|&nbsp;
        <MyReactTooltip id="tt-wv-porn" text="Ethical Porn" place="bottom">
          <p>The only ethical porn, in my opinion, is the porn with consent. Even if you buy porn, some actress might change her mind and feel shameful afterwards and you have no way to know it. Instead, focus on the live performance or active genuine channels/profiles.</p>
          <p>The bigger scope of consideration is whether or not porns waste your time too much. It is unethical to watch porn if it prevents you from doing something ethical. The sweet spot is where it saves your time as compared to being distracted by a genuine sexual urge which is perhaps not applicable to most people.</p>
        </MyReactTooltip>
      </li>
      <li>
        <span className="bold highlight">Society: </span>
        <MyReactTooltip id="tt-wv-abortion" text="Abortion">
          In my opinion, the only ethical abortion is the one from any kind of involuntary sex given that she does the abortion as early as possible to prevent the child from feeling the pain.
        </MyReactTooltip>

//         TODO free vs paid education
//         TODO social media
      </li>
      <li>
        <span className="bold highlight">Economy: </span>
        <MyReactTooltip id="tt-wv-equality" text="Equality">
          <p>Instead of the zero-sum thinking, the only sensible thing we should focus on is to define what is "good enough life" and try to improve the poorest to such condition. Sometimes, inequality helps accelerate that goal.</p>
        </MyReactTooltip>
      </li>
      <li>
        <span className="bold highlight">Lifestyle: </span>
        <MyReactTooltip id="tt-wv-food" text="Ethical Food">
          <p>Ethical food is not about being organic or even clean. It is not about 100% natural, non-GMO, or not ultra-processed. It is about respecting everyone's freedom including animals i.e. vegan and transparent (i.e. include all information). I find the product whose ingredients don't add up to 100% not acceptable (but I sometimes cannot avoid it).</p>
        </MyReactTooltip>

        &nbsp;|&nbsp;
        <MyReactTooltip id="tt-wv-lifemeaning" text="Meaning of Life">
          <p>Imaging having all sentient beings from the universe (including god) and the I ask: what is the purpose? None. The star floats around for what? None. There is no purpose whatsoever.</p>
          <p>So the purpose depends on being sentient. Try your best to know thyself and create purpose from what you value.</p>
        </MyReactTooltip>

        &nbsp;|&nbsp;
        <MyReactTooltip id="tt-wv-party" text="Party">
          It is a waste of time unless you know your life's purpose and partying can help get you to that point.
        </MyReactTooltip>
      </li>
    </ul>
  </>
