import React from 'react'
import marked from 'marked'
import DOMPurify from 'dompurify'

type P = {content: string}
export const Markdown = ({content}: P): React.ReactElement =>
  <div
    dangerouslySetInnerHTML={{
    __html: DOMPurify.sanitize(marked(content), {USE_PROFILES: {html: true}}),
    }}
  ></div>
