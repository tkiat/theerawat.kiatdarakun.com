import React from "react"
import * as jsYaml from 'js-yaml'

import {PageWithIconsScrollbar} from "../../share"

export const Hobby = (): React.ReactElement => {
  const data = {
    icons: [
      <i className="fa-solid fa-book"></i>,
      <i className="fa-solid fa-gamepad"></i>,
      <i className="fa-solid fa-image"></i>,
      <i className="fa-solid fa-film"></i>,
    ],
    content: {
      sections: [
        <>TODO</>,
        <>TODO</>,
        <>TODO</>,
        <>TODO</>,
      ]
    }
  }
  return <PageWithIconsScrollbar data={data} page="activity-create" />
}

const Software = (): React.ReactElement =>
  <>
    <h2>Software</h2>

    <section>
      <h3 className="highlight">Content</h3>

      <section>
        <h4>Channel: Freedom in Computing</h4>

        <p>The ideal society, to me, offers people choices and awareness. For this reason, I strongly advocate free and open source software (FOSS) for all software lower than application software since they cannot be easily replaced by a user once installed. For local, application software, I advocate at least open-source software and the availability of FOSS alternatives for all non-entertainment software (like content creation).</p>

        <p>I created this channel out of the wish to get us closer to that ideal society. Yeah, I know I now have only one upload but I plan to add more videos down the road.</p>

        {/*renderItems(content, ["software", "video", "freedom-in-computing"])*/}
      </section>
    </section>
  </>

const Misc = (): React.ReactElement =>
  <>
    <h2>Misc.</h2>

    <section>
      <h3 className="highlight">Video Games</h3>

      <section className="abandoned">
        <h4>Short Games Only</h4>

        <p>This video games <a href="https://www.youtube.com/@shortgamesonly3856">channel</a> contains five videos showing replays of two games (Clash Royale and Cryptark) without commentaries. I have abandoned it since 2020-06-01 in favor of DRM-free ones available on Linux.</p>
      </section>
    </section>
  </>
