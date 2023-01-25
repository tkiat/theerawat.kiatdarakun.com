import React from "react"

import {TooltipFa, TooltipFaWithDelay, TooltipText, TooltipTextWithDelay} from "../share/Tooltip"

export const Create = (): React.ReactElement => {

  const [softwareProjs, setSoftwareProjs] = React.useState()
  const [softwareToys, setSoftwareToys] = React.useState()

  React.useEffect(
    async () => {
//       const sProjRaw = await fetch("/software-project.json")
//       setSoftwareProjs(await sProjRaw.json())

      const [sProjRaw, sToyRaw] = await Promise.all([
        fetch("/software-project.json"),
        fetch("/software-toy.json"),
      ]);

      setSoftwareProjs(await sProjRaw.json())
      setSoftwareToys(await sToyRaw.json())
    }
  , []);

  return softwareProjs === undefined || softwareToys === undefined ?
    <>Loading ...</> :
    <div className="page-create">
      <p>Abandoned projects are blurred.</p>

      <hr />

      <h2>Software</h2>

      <h3>Apps</h3>

      <ul>
        {softwareProjs.map(({name, date, link, dscp, type, stack, active}, i) =>
          <li className={active === "no" ? "abandoned" : ""} aria-hidden={active === "no"} key={i}>
            <a href={link}>{date}</a> — {name}&ensp;<i className={type === "web" ? "fa-solid fa-globe" : "fa-solid fa-display"}></i> — {dscp} — <span className="highlight">{stack}</span>
          </li>
        )}
      </ul>

      <h3>Less-Than-a-Day Apps</h3>

      <ul>
        {softwareToys.map(({name, date, link, dscp, type, stack, active}, i) =>
          <li className={active === "no" ? "abandoned" : ""} aria-hidden={active === "no"} key={i}>
            <a href={link}>{date}</a> — {name}&ensp;<i className={type === "web" ? "fa-solid fa-globe" : "fa-solid fa-display"}></i> — {dscp} — <span className="highlight">{stack}</span>
          </li>
        )}
      </ul>

      <hr />

      <h2>Blog</h2>

      <ul>
        <li>
          <b className="highlight">My Own Website</b>

          <ul>
            <li>
              <s className="abandoned">A Freedom Blog</s> &nbsp;
              <TooltipFaWithDelay faclass="fa-solid fa-blog">
                <a href="https://a-freedom-blog.kiatdarakun.com">Link</a> — Abandoned in 2021 — This personal blog is oriented toward the freedom-friendly stuff of mixed qualities on many topics. I abandoned it to focus my lifelong efforts on the philosophical work of life guided by awareness. I should be able to migrate some content from here.
              </TooltipFaWithDelay>
            </li>
          </ul>
        </li>
      </ul>

      <hr />

      <h2>Video Channel</h2>

      <ul>
        <li>
          <b className="highlight">Freedom in Computing</b> &nbsp;
          <TooltipFa faclass="fa-brands fa-youtube">
            I advocate FOSS operating systems (since they are very fundamental), the availability of FOSS application software alternatives (for accessibility to the poor), and OSS for entertainment softeware like video games (for the sake of transparency). I create this channel out of the wish to enhance freedom in the world of computing. I plan to add more videos down the road.
          </TooltipFa>
          <ul>
            <li><a href="https://www.youtube.com/watch?v=1XVm_dLN5Zo">2021-02-06</a> — SuperTux All Secrets (World 1-2)</li>
          </ul>
        </li>

        <li>
          <s className="abandoned highlight">Short Games Only</s> &nbsp;
          <TooltipFa faclass="fa-brands fa-youtube">
            Abandoned in 2020 — The channel contains just replays of two games without commentaries. I abandoned it in favor of open-source video games.
          </TooltipFa>

          <ul className="abandoned">
            <li><a href="https://youtu.be/NemKpZkV8yY">2020-06-01</a> — [Clash Royale] I Use only Small Skeletons to Finish Prince Challenge!</li>
            <li><a href="https://youtu.be/S5aLLY3Cn7I">2020-05-30</a> — [Clash Royale] Road to 5000 Trophies as Level 1</li>
            <li><a href="https://youtu.be/j3CXU1Z3FB0">2020-05-20</a> — [Clash Royale] Sudden Death Challenge with Elixir Golem Cycle Deck</li>
            <li><a href="https://youtu.be/1f9Pt9xYI-4">2019-11-13</a> — [Cryptark] Final Mission - All Systems Destroyed</li>
            <li><a href="https://www.youtube.com/watch?v=yo89TlBl33E">2019-11-13</a> — [Cryptark] Final Mission in Rogue Mode</li>
          </ul>
        </li>
      </ul>
    </div>
}
