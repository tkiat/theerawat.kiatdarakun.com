import {Dimension} from '@types-basic'
import React from 'react'

import {ThemeObject} from 'src/App/share/theme'

import {DrawCanvas} from './Canvas/DrawCanvas'
import {WaveConfigs} from './Canvas/wave'

type P = {
  dimension: Dimension
  theme: ThemeObject
  waveConfigs: React.MutableRefObject<WaveConfigs>
}
export const Canvas = ({dimension: {w, h}, theme, waveConfigs}: P):
  React.ReactElement =>
  <canvas
    className="canvas" width={w} height={h} role="img"
    ref={DrawCanvas({theme, waveConfigs})} aria-label="Background Wave"
  />
