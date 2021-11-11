import React from 'react'

import {mapping} from './TextMap'

export const TextSvg = ({word}: {word: string}): React.ReactElement =>
  <>
    {Array.from(word).map((letter, i) =>
      <div key={i} className="letter">
        {mapping.border[letter]}{mapping.mask[letter]}
      </div>
    )}
  </>
