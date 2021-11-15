type FlowDirection = 'left' | 'right'
type FlowMode = 'drain' | 'pass' | 'stuck'
type Node = 'text' | 'valve'

const id = 'tube-highlighter'

export const moveWater = (from: number, to: number, stepMs: number):
  number => {
  const direction = to > from ? 'right' : 'left'
  const step = to > from ? 2 : -2
  const transitionSteps =
    Array.from(new Array((to - from) / step + 1), (_, i) => from + i * step)

  const cleanupDelay = transitionSteps.reduce((delay, x) => {
    const mode = x === from ? 'drain' : (x === to ? 'stuck' : 'pass')
    const d = stepMs * getDurationMultiplier(mode, direction)

    const options = {...sharedOptions, duration: d, delay: delay}

    const kt = getKeyframes(mode, direction, 'text')
    document.getElementById(id + x)?.animate(kt, options)

    const kv = getKeyframes(mode, direction, 'valve')
    document.getElementById(id + (x + 1))?.animate(kv, options)

    return delay + stepMs * getDelayMultiplier(mode, direction)
  }, 0)
  return cleanupDelay
}

const sharedOptions = {
  iterations: 1,
  iterationStart: 0,
  delay: 0,
  endDelay: 0,
  direction: 'normal',
  fill: 'forwards',
  easing: 'linear',
} as KeyframeAnimationOptions

const getDelayMultiplier = (m: FlowMode, d: FlowDirection) => {
  if (m === 'drain') {
    return d === 'left' ? 1.16 * 20 / 116 : 1 * 4 / 100
  } else if (m === 'pass') {
    return 2.16 * 120 / 216
  } else {
    return 1
  }
}

const getDurationMultiplier = (m: FlowMode, d: FlowDirection) => {
  if (m === 'drain' && d === 'left') {
    return 1.16
  } else if (m === 'pass') {
    return 2.16
  } else {
    return 1
  }
}

const getKeyframes = (m: FlowMode, d: FlowDirection, n: Node) => {
  if(m === 'drain' && d === 'left' && n === 'text') {
    return [
      {transform: 'translateY(20%)', offset: 0},
      {transform: 'translateY(-100%)', offset: 1},
    ]
  } else if(m === 'drain' && d === 'left' && n === 'valve') {
    return [
      {transform: 'translateY(20%)', offset: 0},
      {transform: 'translateY(100%)', offset: 0.1379},
      {transform: 'translateY(100%)', offset: 1},
    ]
  } else if(m === 'drain' && d === 'right' && n === 'text') {
    return [
      {transform: 'translateY(20%)', offset: 0},
      {transform: 'translateY(100%)', offset: 0.8},
      {transform: 'translateY(100%)', offset: 1},
    ]
  } else if(m === 'drain' && d === 'right' && n === 'valve') {
    return [
      {transform: 'translateY(20%)', offset: 0},
      {transform: 'translateY(0)', offset: 0.04},
      {transform: 'translateY(0)', offset: 0.8},
      {transform: 'translateY(-100%)', offset: 1},
    ]
  } else if(m === 'stuck' && d === 'left' && n === 'text') {
    return [
      {transform: 'translateY(100%)', offset: 0},
      {transform: 'translateY(100%)', offset: 0.2},
      {transform: 'translateY(20%)', offset: 1},
    ]
  } else if(m === 'stuck' && d === 'left' && n === 'valve') {
    return [
      {transform: 'translateY(-100%)', offset: 0},
      {transform: 'translateY(0)', offset: 0.2},
      {transform: 'translateY(0)', offset: 0.96},
      {transform: 'translateY(20%)', offset: 1},
    ]
  } else if(m === 'stuck' && d === 'right' && n === 'text') {
    return [
      {transform: 'translateY(-100%)', offset: 0},
      {transform: 'translateY(20%)', offset: 1},
    ]
  } else if(m === 'stuck' && d === 'right' && n === 'valve') {
    return [
      {transform: 'translateY(100%)', offset: 0},
      {transform: 'translateY(100%)', offset: 0.8276},
      {transform: 'translateY(20%)', offset: 1},
    ]
  } else if(m === 'pass' && d === 'left' && n === 'text') {
    return [
      {transform: 'translateY(100%)', offset: 0},
      {transform: 'translateY(100%)', offset: 0.0926},
      {transform: 'translateY(-100%)', offset: 1},
    ]
  } else if(m === 'pass' && d === 'left' && n === 'valve') {
    return [
      {transform: 'translateY(-100%)', offset: 0},
      {transform: 'translateY(0)', offset: 0.0926},
      {transform: 'translateY(0)', offset: 0.4444},
      {transform: 'translateY(100%)', offset: 0.537},
      {transform: 'translateY(100%)', offset: 1},
    ]
  } else if(m === 'pass' && d === 'right' && n === 'text') {
    return [
      {transform: 'translateY(-100%)', offset: 0},
      {transform: 'translateY(100%)', offset: 0.9074},
      {transform: 'translateY(100%)', offset: 1},
    ]
//   } else if(m === 'pass' && d === 'right' && n === 'valve') {
  } else {
    return [
      {transform: 'translateY(100%)', offset: 0},
      {transform: 'translateY(100%)', offset: 0.463},
      {transform: 'translateY(0)', offset: 0.5556},
      {transform: 'translateY(0)', offset: 0.9074},
      {transform: 'translateY(-100%)', offset: 1},
    ]
  }
}
