import React from 'react'

type P = {className: string}
export const NotFound = ({className}: P): React.ReactElement =>
  <div className={className}>
    <div>
      Content not found. But, no worries, we have <a href="/">HOME</a>
    </div>
  </div>
