import {Coordinate, Dimension, Line} from "@types-basic"
import {Wave, WavePhysics} from "./wave"

let didRenderOnStart = false
let c: (string | null)[]

export const drawWaves = (
  ctx: CanvasRenderingContext2D,
  waves: Wave[],
  physics: WavePhysics,
  colors: (string | null)[],
) => {
  if (didRenderOnStart && (physics.speed === 0 && physics.shakiness === 0)) {
    // redraw waves only when theme changes
    if (c.every((x, i) => x === colors[i])) return
  }
  c = colors

  const {width, height} = ctx.canvas
  ctx.clearRect(0, 0, width, height)
  const canvasDim = {w: width, h: height}
  waves.map((w, i) => {
    const {curves, lines} = getTrajectory(w, physics, canvasDim)
    drawWave(ctx, colors[colors.length - 1 - i], curves, lines)
  })
  didRenderOnStart = true
}

export const getTrajectory = (wave: Wave,
                       {height, speed, shakiness}: WavePhysics,
                       {h, w}: Dimension) => {
  let curves: Line[] = []
  let lines = []

  wave.points[0].oscillate(height, speed, shakiness)

  let prevX = wave.points[0].x
  let prevY = wave.points[0].getY()
  let cx, cy

  wave.points.slice(1).map(point => {
    point.oscillate(height, speed, shakiness)

    cx = (prevX + point.x) / 2
    cy = (prevY + point.getY()) / 2
    curves.push({from: {x: prevX, y: prevY}, to: {x: cx, y: cy}})

    prevX = point.x
    prevY = point.getY()
  })

  lines.push({x: prevX, y: prevY})
  lines.push({x: w, y: h})
  lines.push({x: wave.points[0].x, y: h})

  return {curves, lines}
}

const drawWave = (
  ctx: CanvasRenderingContext2D,
  color: string | null,
  curves: Line[],
  lines: Coordinate[]) => {
  ctx.beginPath()
  if (color) {
    ctx.fillStyle = color
  }
  ctx.moveTo(curves[0].from.x, curves[0].from.y)

  curves.map(curve =>
    ctx.quadraticCurveTo(curve.from.x, curve.from.y, curve.to.x, curve.to.y))
  lines.map(line => ctx.lineTo(line.x, line.y))

  ctx.fill()
  ctx.closePath()
}
