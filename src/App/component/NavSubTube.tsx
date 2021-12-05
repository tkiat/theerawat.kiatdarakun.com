import React from 'react'
import {Updater} from 'use-immer'

import {ReactComponent as Terminator} from "assets/valve/valve-terminator.svg"
import {capitalize} from 'src/App/share/general'
import {Path, pathObject} from 'src/App/share/path'

import {NodeText} from './NavSubTube/NodeText'
import {NodeValve} from './NavSubTube/NodeValve'
import {moveCurrentNode} from './NavSubTube/moveCurrentNode'

const stepMs = 500

type P = {path: Path, setPath: Updater<Path>}
export const NavSubTube = ({path, setPath}: P): React.ReactElement => {
  const callback = (to: number) => () =>
    setPath(d => {d.mapping[d.current] = pathObject[d.current][to]})
  return (
    <nav className="nav-tube">
      <ul className="nav-tube__list">
        <Terminator />
        {pathObject[path.current].map((x, i) => {
          const cur = pathObject[path.current].
            findIndex(x => x === path.mapping[path.current])
          return (
          <React.Fragment key={x}>
            <li className="nav-tube__item">
              <NodeText
                i={i}
                cur={cur}
                to={'/' + path.current + '/' + x}
                onclick={() =>
                  moveCurrentNode(cur * 2, i * 2, stepMs, callback(i))
                }
                word={capitalize(x)}
              />
            </li>
          {i < pathObject[path.current].length - 1 && (
            <li className="nav-tube__item">
              <NodeValve i={i} cur={cur} />
            </li>
          )}
          </React.Fragment>
        )})}
        <Terminator style={{transform: "scaleX(-1)"}} />
      </ul>
    </nav>
  )
}
