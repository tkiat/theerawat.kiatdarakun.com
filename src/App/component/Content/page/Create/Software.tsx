import React from "react"

import {MyTooltipWithDelay} from "../../share/MyTooltip"
import desktopPersonal from "./Software/desktop-personal.json"
import desktopProjects from "./Software/desktop-project.json"
import webProjects from "./Software/web-project.json"
import webTasks from "./Software/web-task.json"
import webToys from "./Software/web-toy.json"

type Project={
  desc: string,
  hidden?: boolean,
  keyword: string,
  live?: string,
  src?: string,
  title: string,
}
const ProjectEntry = (p: Project): React.ReactElement => {
  const src = p.src && <span><a href={p.src}>Source</a> - </span>
  const live = p.live && <span><a href={p.live}>Live</a> - </span>
  return (
    <MyTooltipWithDelay text={p.title}>
      {live}
      {src}
      {p.desc} -&nbsp;
      <span style={{color: 'var(--highlight-color)'}}>
        {p.keyword}
      </span>
    </MyTooltipWithDelay>
  )
}

const ProjectEntries = ({list}: {list: Project[]}): React.ReactElement => {
  return (
    <>
    {list.map((x, i) =>
      <span key={i}>
        {!x.hidden && <ProjectEntry {...x} />}
        {list[i + 1] && !list[i + 1].hidden && " | "}
      </span>
    )}
    </>
  )
}

export const Software = (): React.ReactElement =>
  <>
    <h2>Web</h2>
    <ul>
      <li>
        <span className="bold highlight">Project: </span>
        <ProjectEntries list={webProjects as Project[]} />
      </li>
      <li>
        <span className="bold highlight">Task: </span>
        <ProjectEntries list={webTasks as Project[]} />
      </li>
      <li>
        <span className="bold highlight">Toy: </span>
        <ProjectEntries list={webToys as Project[]} />
      </li>
    </ul>
    <h2>Desktop</h2>
    <ul>
      <li>
        <span className="bold highlight">Project: </span>
        <ProjectEntries list={desktopProjects as Project[]} />
      </li>
      <li>
        <span className="bold highlight">Personal: </span>
        <ProjectEntries list={desktopPersonal as Project[]} />
      </li>
    </ul>
    <h2>Contributions</h2>
    <ul>
      <li>
        <span className="bold highlight">Others' Repositories: </span>
        <a href="https://github.com/tkiat">GitHub</a>
        &nbsp;|&nbsp;
        <a href="https://notabug.org/tkiat?tab=activity">NotABug</a>
      </li>
      <li>
        <span className="bold highlight">Q&A/Forum: </span>
        <a href="https://stackoverflow.com/users/14722688/theerawat-kiatdarakun">Stack Overflow</a>
      </li>
    </ul>
  </>
