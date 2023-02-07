import React from 'react'

import {WaveConfigs, WavePhysics} from 'component/Canvas/wave'

type M = {[key in keyof WavePhysics]: {min: number, max: number, step: number}}
const mapping: M = {
  'height': {min: 10, max: 70, step: 10 },
  'speed': {min: 0, max: 0.3, step: 0.05 },
  'shakiness': {min: 0, max: 6, step: 1.5 },
}

type P = {waveConfigs: React.MutableRefObject<WaveConfigs>}
export const WavePhysicsSliders = ({waveConfigs}: P): React.ReactElement => {
  const [, triggerReRender] = React.useState({})
  return (
    <>
    {(Object.keys(mapping) as (keyof WavePhysics)[]).map((prop, i) =>
      <WavePhysicsSlider
        key={i}
        prop={prop}
        value={waveConfigs.current.physics[prop]}
        onChange={e => {
          waveConfigs.current.physics[prop] = parseFloat(e.target.value)
          triggerReRender({})
        }}
      />
    )}
    </>
  )
}

type SliderP = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  prop: keyof WavePhysics,
  value: number
}
const WavePhysicsSlider = ({onChange, prop, value}: SliderP):
  React.ReactElement => {
  const title = prop[0].toUpperCase() + prop.slice(1)
  return (
    <div className="sidebar__wave-physics">
      <label htmlFor={title}>{title}</label>
      <div>
        <input
          name={title}
          type="range"
          min={mapping[prop].min}
          max={mapping[prop].max}
          step={mapping[prop].step}
          value={value}
          onChange={onChange}
          aria-label={'set wave ' + prop}
        />
      </div>
    </div>
  )
}
