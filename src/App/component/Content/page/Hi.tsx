import React from 'react'

export const Hi = (): React.ReactElement => (
  <div className="page-hi">
    <h1>
      <span role="img" aria-hidden="true">{'\u{1F600}'}</span>
      Hi! I am Theerawat.
    </h1>
    <p>
      I have an engineering background who become interested in simple living with less impact. My hobby usually involves Web, coding, and Linux because they enables the freedom in presentation and computing.
    </p>
    <p>And transparency as well.</p>
    <p>
      I would rate my English skill as <i>Full Professional proficiency</i>. I communicate with non-Thais at ease while working in Germany. I like to read.
    </p>
    <p className="sleep">
      I also love to sleep.{' '}
      <span role="img" aria-hidden="true">{'\u{1F634}'}</span>
    </p>
  </div>
)
