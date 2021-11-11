import React from 'react'

import {ReactComponent as ValveBorder} from './NodeValve/border.svg'
import {ReactComponent as ValveMask} from './NodeValve/mask.svg'

type P = {i: number, cur: number}
export const NodeValve = (props: P) =>
  <>
    <div className="valve">
      <ValveBorder />
      <ValveMask />
    </div>

    <div className="nav-sub__highlighter-wrapper">
      <div
        id={'nav-sub__highlighter-item' + (props.i * 2 + 1)}
        className={'nav-sub__highlighter-item' +
          (props.i === props.cur ? ' nav-sub__highlighter-item--init' : '')}
      >
      </div>
    </div>
  </>
