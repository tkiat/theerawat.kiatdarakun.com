import React from 'react'
import {Updater, useImmer} from 'use-immer'

import {Theme, genWaveColors, getPlaceHS, placeList} from 'src/App/share/theme'
import {capitalize} from 'src/App/share/general'
import {appId} from 'src/App/share/elementId'

type P = {initPlace: string, waveConfigs: React.MutableRefObject<WaveConfigs>}
export const ThemePickers = ({initPlace, waveConfigs}: P): React.ReactElement => {
  const [curPlace, setCurPlace] = React.useState(initPlace)
  return (
    <>
      {placeList.map(x =>
        <div className="grid__item grid__item--6em" key={x}>
          <Picker
            place={x}
            curPlace={curPlace}
            setCurPlace={setCurPlace}
            waveConfigs={waveConfigs}
          />
        </div>
      )}
    </>
  )}

type P = {
  curPlace: string,
  setCurPlace: Updater<string>,
  place: Theme,
  waveConfigs: React.MutableRefObject<WaveConfigs>
}
const Picker = ({curPlace, place, setCurPlace, waveConfigs}: P): React.ReactElement => {
  const title = capitalize(place)
  return (
    <button
      className={'theme-picker' + (place === curPlace ? ' theme-picker--active' : '')}
      onClick={() => {
        document.getElementById(appId).dataset.themeBase = place
        setCurPlace(place)
        waveConfigs.current.colors = genWaveColors(place)
      }}
      data-theme-base={place}
    >
    {
      //@ts-ignore
      <div className="theme-picker__nav-tube" overlay={title}>{title}</div>
    }
      <div className="theme-picker__header">Header</div>
      <div className="theme-picker__text">Sample text</div>
      <div className="theme-picker__nav-main theme-picker__nav-main--l"></div>
      <div className="theme-picker__nav-main theme-picker__nav-main--r"></div>
      <div className="theme-picker__wave theme-picker__wave" style={{
        background: genWaveColors(place)[0]
      }}></div>
    </button>
  )
}
