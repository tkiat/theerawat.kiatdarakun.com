import React from "react"
import {Updater} from "use-immer"

import {Path, capitalize, getSubpageIndex, pathObject} from "@app/share"
import {ValveTerminator} from "@assets/valve"
import {NodeText} from "./Desktop/NodeText"
import {NodeValve} from "./Desktop/NodeValve"
import {moveNode} from "./Desktop/moveNode"

const stepMs = 500

type P = {path: Path, setPath: Updater<Path>}
export const Desktop = ({path, setPath}: P): React.ReactElement => {
  const initPos = pathObject[path.current].
    findIndex(x => x === path.mapping[path.current])

  return (
    <nav className="nav-tube">
      <ul className="nav-tube__list">
        <ValveTerminator />
        {pathObject[path.current].map((x, i) =>
          <React.Fragment key={x}>
            <li className="nav-tube__item">
              <NodeText
                i={i}
                cur={initPos}
                to={"/" + path.current + "/" + x}
                onclick={() => {
                  const curPos = getSubpageIndex(path.current, path.mapping[path.current])
                  const destPos = getSubpageIndex(path.current, x)
                  setPath(d => {d.mapping[path.current] = x})
                  moveNode(curPos * 2, destPos * 2, stepMs, () => () => {})
                }}
                word={capitalize(x)}
              />
            </li>
            {
              i < pathObject[path.current].length - 1 && (
              <li className="nav-tube__item">
                <NodeValve i={i} cur={initPos} />
              </li>
            )}
          </React.Fragment>
        )}
        <ValveTerminator style={{transform: "scaleX(-1)"}} />
      </ul>
    </nav>
  )
}
