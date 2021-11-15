import React from 'react'

type P = {i: number, visible: boolean}
export const NodeHighlighter = ({i, visible}: P): React.ReactElement =>
  <div className="tube-highlighter">
    <div
      id={'tube-highlighter' + i}
      className={'tube-highlighter__inner' +
        (visible ? ' tube-highlighter__inner--init' : '')}
    >
    </div>
  </div>
