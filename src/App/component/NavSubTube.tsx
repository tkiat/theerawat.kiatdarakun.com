import React from 'react'
import {Updater} from 'use-immer'

import {ReactComponent as Terminator} from "assets/valve/valve-terminator.svg"
import {capitalize} from 'src/App/share/general'
import {Path, getSubpageIndex, pathObject} from 'src/App/share/path'

import {NodeText} from './NavSubTube/NodeText'
import {NodeValve} from './NavSubTube/NodeValve'
import {moveNode} from './NavSubTube/moveNode'

const stepMs = 500

type P = {path: Path, setPath: Updater<Path>}
export const NavSubTube = ({path, setPath}: P): React.ReactElement => {
  const curPage = path.current
  const initPos = pathObject[curPage].
    findIndex(x => x === path.mapping[curPage])
  return (
    <nav className="nav-tube">
      <ul className="nav-tube__list">
        <Terminator />
        {pathObject[curPage].map((x, i) =>
          <React.Fragment key={x}>
            <li className="nav-tube__item">
              <NodeText
                i={i}
                cur={initPos}
                to={'/' + curPage + '/' + x}
                onclick={() => {
                  const [curSubpage] =
                    window.location.pathname.split("/").slice(-1)
                  const curPos = getSubpageIndex(curPage, curSubpage)
                  const destPos = getSubpageIndex(curPage, x)
                  moveNode(curPos * 2, destPos * 2, stepMs, () => () => {})
                }}
                word={capitalize(x)}
              />
            </li>
            {
              i < pathObject[curPage].length - 1 && (
              <li className="nav-tube__item">
                <NodeValve i={i} cur={initPos} />
              </li>
            )}
          </React.Fragment>
        )}
        <Terminator style={{transform: "scaleX(-1)"}} />
      </ul>
    </nav>
  )
}
