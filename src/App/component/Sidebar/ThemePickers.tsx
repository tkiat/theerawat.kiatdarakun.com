import React from "react"
import {Updater, useImmer} from "use-immer"

import {Place, appId, capitalize, genWaveColors, placeList, updateFavicon} from "@app/share"

import {WaveConfigs, numWave} from "../Canvas/wave"

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

type Q = {
  curPlace: string,
  setCurPlace: React.Dispatch<React.SetStateAction<string>>,
  place: Place,
  waveConfigs: React.MutableRefObject<WaveConfigs>
}
const Picker = ({curPlace, place, setCurPlace, waveConfigs}: Q): React.ReactElement => {
  const title = capitalize(place)
  const wc = genWaveColors(place, numWave)
  return (
    <button
      className={"theme-picker" + (place === curPlace ? " theme-picker--active" : "")}
      onClick={() => {
        if (place === curPlace) return

        const app = document.getElementById(appId)
        if (app) app.dataset.themeBase = place

        setCurPlace(place)
        updateFavicon(place)
        waveConfigs.current.colors = wc
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
        background: wc[0] ? wc[0] : "black"
      }}></div>
    </button>
  )
}
