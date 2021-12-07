import {Link} from '@reach/router'
import React from 'react'
import {Updater} from 'use-immer'

import {ReactComponent as DuckHamburger} from 'assets/duck/duck-hamburger.svg'
import {capitalize} from 'src/App/share/general'
import {Path, pathObject} from 'src/App/share/path'

const navPress = () => document.getElementById('nav-mobile')?.
  classList.toggle('nav-mobile--pressed')

type P = {path: Path, setPath: Updater<Path>}
export const NavSubMobile = ({path, setPath}: P): React.ReactElement =>
  <nav className="nav-mobile" id="nav-mobile" onClick={navPress}>
    <button className="nav-mobile__button" aria-label="hamburger-menu">
      <DuckHamburger />
    </button>
    <ul className="nav-mobile__list">
    {pathObject[path.current].map(x => (
      <li key={x} className="nav-mobile__item">
        <Link
          className={'nav-mobile__link' + (x === path.mapping[path.current] ?
            ' nav-mobile__link--active' : '')}
          to={'/' + path.current + '/' + x}
          onClick={() => {setPath(d => {d.mapping[path.current] = x})}}
        >
          {capitalize(x)}
        </Link>
      </li>
    ))}
    </ul>
  </nav>
