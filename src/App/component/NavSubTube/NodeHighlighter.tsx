import React from 'react'

type P = {i: number, visible: boolean}
export const Highlighter = ({i, visible}: P): React.ReactElement =>
  <div className="nav-sub__highlighter-wrapper">
    <div
      id={'nav-sub__highlighter-item' + i}
      className={'nav-sub__highlighter-item' +
        (visible ? ' nav-sub__highlighter-item--init' : '')}
    >
    </div>
  </div>
