import React from "react"

import {WaveConfigs, drawWaves, moveItemsAlongWave} from "./wave"

const itemOffset = 20
const approxFps = 10, frameInterval = Math.round(1000 / approxFps)

type P = {waveConfigs: React.MutableRefObject<WaveConfigs>}
export const DrawCanvas = ({waveConfigs}: P):
  React.Ref<HTMLCanvasElement> | undefined => {
  const ref = React.useRef<HTMLCanvasElement>(null)

  React.useEffect(() => {
    if (!ref.current) return
    const canvas = ref.current

    const context = canvas.getContext("2d")
    if (!context) return

    const itemsOnWave =
      document.body.querySelectorAll(".nav-main") as NodeListOf<HTMLElement>
    let animationFrameId: number

    const physics = waveConfigs.current.physics

    const updateCanvas = () => {
      const waves = waveConfigs.current.waves
      drawWaves(context, waves, physics, waveConfigs.current.colors)
      moveItemsAlongWave(itemsOnWave, waves[waves.length - 1], itemOffset)
    }

    let then = 0
    const render = () => {
      if (Date.now() > then + frameInterval &&
          document.visibilityState === "visible" ) {
        updateCanvas()
        then = Date.now()
      }
      animationFrameId = window.requestAnimationFrame(render)
    }
    window.requestAnimationFrame(render)

    return () => {
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return ref
}
