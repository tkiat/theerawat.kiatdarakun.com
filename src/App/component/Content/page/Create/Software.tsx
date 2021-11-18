import React from "react"

import {MyTooltipWithDelay} from "../../share/MyTooltip"
import desktopProjects from "./Software/desktop-project.json"
import desktopPersonal from "./Software/desktop-personal.json"
import webProjects from "./Software/web-project.json"
import webTasks from "./Software/web-task.json"
import webToys from "./Software/web-toy.json"

// TODO any
const ProjectEntry = (p: any): React.ReactElement => {
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

const ProjectEntries = ({list}: {list: any}): React.ReactElement => {
  return (
    <>
    {list.map((x, i) =>
      <>
        {!x.hidden && <ProjectEntry {...x} />}
        {list[i + 1] && !list[i + 1].hidden && " | "}
      </>
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
        <ProjectEntries list={webProjects} />
      </li>
      <li>
        <span className="bold highlight">Task: </span>
        <ProjectEntries list={webTasks} />
      </li>
      <li>
        <span className="bold highlight">Toy: </span>
        <ProjectEntries list={webToys} />
      </li>
    </ul>
    <h2>Desktop</h2>
    <ul>
      <li>
        <span className="bold highlight">Project: </span>
        <ProjectEntries list={desktopProjects} />
      </li>
      <li>
        <span className="bold highlight">Personal: </span>
        <ProjectEntries list={desktopPersonal} />
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
