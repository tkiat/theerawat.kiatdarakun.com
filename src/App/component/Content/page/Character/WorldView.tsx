import React from 'react'

import {MyTooltip} from "../../share/MyTooltip"

export const WorldView = (): React.ReactElement =>
  <>
    <ul>
      <li>
        <span className="bold highlight">Tech: </span>
        <MyTooltip text="Ethical Software" place="bottom">
          <p>In my opinion, ethical software should satisfy the followings</p>
          <ol>
            <li>Critical software like operating systems and bootloaders are indispensable. No one should have the right to revoke the right of users or else everybody will be screwed up. They should be FOSS so that at least someone can fork it and continue the glory.</li>
            <li>Non-critical software like image editor installed on a client computer should be at least open-source. They shouldn't be closed-source to ensure that they don't violate others' license or user's privacy. They don't have to be FOSS because it is very possible to create the alternatives.</li>
            <li>The server-side software can be closed source because even they release the source code they cannot prove anyway that they actually use it. You should not mistaken this as malicious Javascripts which should satisfy the second rule.</li>
          </ol>
          <p>It is not unethical to distribute unethical software given a clear warning and the availability of the free and open-source software. The distribution like Debian does the most right thing in this regard.</p>
        </MyTooltip>

        &nbsp;|&nbsp;
        <MyTooltip text="Ethical DRM" place="bottom">
          <p>The ineffective single-purchased DRM is unethical because it cannot at all prevent the piracy while punishing the paying customers e.g. restricting them within an app. The examples include DRMs on recordable media such as ebooks and movies.</p>
          <p>To my knowledge, the only effective DRM is the one that serves critical bits from the server like what online games do but that will make users dependent on the server. This can be unethical because some users might pay a lot of money for nothing.</p>
          <p>However, the subscription-based media, being cheaper, can grant low-income users more access despite being subjected to mass surveillance and dependency to the proprietary platform/product. This can be compared to the most bottom section in the Maslow's hierarchy of need (having food). DRM enables the subscription-based media so it has a merit in this regard. It is not perfect but at least a midway towards a better society.</p>
        </MyTooltip>

        &nbsp;|&nbsp;
        <MyTooltip text="Online Privacy" place="bottom">
          <p>Privacy is simply a basic human right but we have no right for it as long as we rely on other's work and effort. It is not ethical to ad-block Youtube because that is how they support the platform and you just steal their bandwidth. There are privacy-friendly Youtube alternatives but without the way to make money like personalized ads you cannot get too many things at zero cost. This means you might have to host videos yourself. You will find most popular videos hosted on the platform that give them money directly i.e. Youtube not MediaGoblin.</p>
          <p>It is a trade-off and because of this I tend to be neutral about the online privacy issue. The only thing I wish is the privacy-friendly alternative for each mainstream service/application for the sake of human rights.</p>
        </MyTooltip>

        &nbsp;|&nbsp;
        <MyTooltip text="Proprietary Store" place="bottom">
          <p>It is understandable that Google Play and App Store restrict the users to their platform when he purchases an app because it is platform-specific. But, there is no need to tie something like a single-purchased movie to the iTunes app. It makes sense from a business prespective to do this but I find it disturbing. It gives a user a false notion of possession but in reality he just has the access right.</p>
          <p>I deleted my Apple account (with around 30 movies) because of this. The subscriptions like Netflix and Apple Music, on the other hand, give the user clear information about the duration and I find that more acceptable.</p>
        </MyTooltip>
      </li>
      <li>
        <span className="bold highlight">Media: </span>
        <MyTooltip text="Violence in Video Games">
          The violence in media seems acceptable if it is a kind of fantasy e.g. alien or middle-age fights. It can be problematic when it is close to real-life scenario like GTA (Grand Theft Auto) video game that can influence immature person negatively. I would suggest restricting those real-life violence to 20+ year-old audience while keeping fantasy violence at 13+ or so.
        </MyTooltip>

        &nbsp;|&nbsp;
        <MyTooltip text="Ethical Porn" place="bottom">
          <p>The only ethical porn, in my opinion, is the porn with consent. Even if you buy porn, some actress might change her mind and feel shameful afterwards and you have no way to know it. Instead, focus on the live performance or active genuine channels/profiles.</p>
          <p>However, the bigger scope of consideration is whether or not porns waste your time too much. It is unethical to watch porn if it prevents you from doing something necessary.</p>
        </MyTooltip>
      </li>
      <li>
        <span className="bold highlight">Society: </span>
        <MyTooltip text="Abortion">
          In my opinion, the only ethical abortion is the one from any kind of involuntary sex given that she does the abortion as early as possible to prevent the child from feeling the pain.
        </MyTooltip>
      </li>
      <li>
        <span className="bold highlight">Economy: </span>
        <MyTooltip text="Equality">
          <p>Instead of the zero-sum thinking, the only sensible thing we should focus on is to define what is "good enough life" and try to improve the poorest to such condition. Inequality perhaps helps accelerate that goal.</p>
        </MyTooltip>
      </li>
      <li>
        <span className="bold highlight">Lifestyle: </span>
        <MyTooltip text="Ethical Food">
          <p>The most ethical food is not about being organic or even clean. It is not about 100% natural, non-GMO, or not ultra-processed. It is about respecting everyone's freedom including animals i.e. vegan and transparent. I find the product whose ingredients don't add up to 100% not acceptable (but I sometimes cannot avoid it).</p>
        </MyTooltip>

        &nbsp;|&nbsp;
        <MyTooltip text="Meaning of Life">
          Imaging having all sentient beings from the universe (including god) and the I ask: what is the purpose? None. The star floats around for what? None. There is no purpose whatsoever. So the purpose depends on being sentient. Try your best to know thyself and create purpose from what you value.
        </MyTooltip>

        &nbsp;|&nbsp;
        <MyTooltip text="Travelling">
          The best travelling is not about price, beauty, people, or selfie images on Instagram but it is about the experience. And the experience will be unfortunately limited without prior knowledge or research. Many people, unlike some architects or historians, can appreciate only the outer beauty of the Eiffel tower.
        </MyTooltip>

        &nbsp;|&nbsp;
        <MyTooltip text="Party">
          It is a waste of time unless you know your life's purpose and partying can help get you to that point. It is also sometimes worth it if you are an extrovert.
        </MyTooltip>
      </li>
    </ul>
  </>
