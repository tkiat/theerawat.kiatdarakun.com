import React from 'react'

import {ThemeObject, wavesKey} from 'src/App/share/theme'
import {WaveConfigs, drawWaves, moveItemsAlongWave} from './wave'

type P = {theme: ThemeObject, waveConfigs: React.MutableRefObject<WaveConfigs>}
export const DrawCanvas = ({theme, waveConfigs}: P):
  React.Ref<HTMLCanvasElement> | undefined => {
  const ref = React.useRef<HTMLCanvasElement>(null)

  const waveColors = React.useRef<string[]>(theme.getArr(wavesKey))
  waveColors.current = theme.getArr(wavesKey)

  React.useEffect(() => {
    if (!ref.current) return
    const canvas = ref.current

    const context = canvas.getContext('2d')
    if (!context) return

    const itemsOnWave =
      document.body.querySelectorAll('.nav-main') as NodeListOf<HTMLElement>
    const itemOffset = 20
    let animationFrameId: number

    const render = () => {
      const waves = waveConfigs.current.waves
      const physics = waveConfigs.current.physics

      drawWaves(context, waves, physics, waveColors.current)
      moveItemsAlongWave(itemsOnWave, waves[waves.length - 1], itemOffset)
      animationFrameId = window.requestAnimationFrame(render)
    }
    window.requestAnimationFrame(render)

    return () => {
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return ref
}
