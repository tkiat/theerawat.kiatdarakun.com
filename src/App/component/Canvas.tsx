import {Dimension} from '@types-basic'
import React from 'react'

import {DrawCanvas} from './Canvas/DrawCanvas'
import {WaveConfigs} from './Canvas/wave'

type P = {
  dimension: Dimension
  waveConfigs: React.MutableRefObject<WaveConfigs>
}
export const Canvas = ({dimension: {w, h}, waveConfigs}: P):
  React.ReactElement =>
  <canvas
    className="canvas" width={w} height={h} role="img"
    ref={DrawCanvas({waveConfigs})} aria-label="Background Wave"
  />
