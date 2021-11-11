import {Link} from '@reach/router'
import React from 'react'

import {TextSvg} from './TextSvg'

type P = {
  i: number
  cur: number
  to: string
  word: string
  onclick: React.MouseEventHandler<HTMLAnchorElement>
}
export const NodeText = (props: P) =>
  <Link className={'nav-sub__link'} to={props.to} onClick={props.onclick}
        draggable="false">
    <TextSvg word={props.word} />

    <div className="nav-sub__highlighter-wrapper">
      <div
        id={'nav-sub__highlighter-item' + props.i * 2}
        className={'nav-sub__highlighter-item' +
          (props.i === props.cur ? ' nav-sub__highlighter-item--init' : '')}
      >
      </div>
    </div>
  </Link>
