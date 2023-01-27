import {Link} from '@reach/router'
import React from 'react'

import {ReactComponent as DuckAboutMe} from 'assets/duck/duck-aboutme.svg'
import {ReactComponent as DuckHobby} from 'assets/duck/duck-activity.svg'
// import {ReactComponent as DuckResume} from 'assets/duck/duck-resume.svg'
import {capitalize} from 'src/App/share/general'
import {MainPath} from 'src/App/share/path'

type P = {isActive: boolean, left: string, onclick: () => void, path: MainPath,
          to: string}
export const ItemContent = ({isActive, left, onclick, path, to}: P):
  React.ReactElement => {
  const text = capitalize(path)
  return (
    <Link
      className={'nav-main' + (isActive ? ' nav-main--active' : '')}
      to={to}
      style={{left: left, textDecoration: "none"}}
      onClick={onclick}
      aria-label={text}
      draggable="false"
    >
      <div className="nav-main__text">{text}</div>
      {
        {
          'about': <DuckAboutMe className={'nav-main__svg'} />,
          'activity': <DuckHobby className={'nav-main__svg'} />,
//           'resume': <DuckResume className={'nav-main__svg'} />,
        }[path]
      }
    </Link>
)}
