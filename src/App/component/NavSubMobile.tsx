import {Link} from '@reach/router'
import React from 'react'
import {Updater} from 'use-immer'

import {capitalize} from 'src/App/share/general'
import {Path, pathObject} from 'src/App/share/path'

import {ReactComponent as DuckHamburger} from './NavSubMobile/duck-hamburger.svg'

const navPress = () => {
  const navGeneric = document.getElementById('nav-sub-mobile')
  navGeneric && navGeneric.classList.toggle('nav-sub--pressed')
}

type P = {path: Path, setPath: Updater<Path>}
export const NavSubMobile = ({path, setPath}: P): React.ReactElement =>
  <nav className="nav-sub nav-sub--mobile" id="nav-sub-mobile"
       onClick={navPress}>
    <ul className="nav-sub__list">
      <li className="nav-sub__item nav-sub__item--button"
          aria-label="hamburger-menu">
        <DuckHamburger />
      </li>
    {pathObject[path.current].map(x => (
      <li key={x} className="nav-sub__item">
        <Link
          className={'nav-sub__link' + (x === path.mapping[path.current] ?
            ' nav-sub__link--active' : '')}
          to={'/' + path.current + '/' + x}
          onClick={() => {setPath(d => {d.mapping[path.current] = x})}}
        >
          {capitalize(x)}
        </Link>
      </li>
    ))}
    </ul>
  </nav>
