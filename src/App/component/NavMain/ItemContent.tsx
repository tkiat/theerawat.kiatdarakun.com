import {Link} from '@reach/router'
import React from 'react'

import {ReactComponent as DuckAboutMe} from 'assets/duck/aboutme.svg'
import {ReactComponent as DuckHobby} from 'assets/duck/activity.svg'
import {capitalize} from 'share/general'
import {MainPath} from 'share/path'

type P = {isActive: boolean, left: string, onclick: () => void, path: MainPath,
          to: string}
export const ItemContent = ({isActive, left, onclick, path, to}: P):
  React.ReactElement => {
  const text = capitalize(path)
  return (
    <Link
      className={
        'nav-main nav-main--content' + (isActive ? ' nav-main--active' : '')
      }
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
        }[path]
      }
    </Link>
)}
