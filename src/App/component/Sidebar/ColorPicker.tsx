import React from 'react'
import {RgbStringColorPicker, RgbaStringColorPicker} from 'react-colorful'

import {capitalize, splitCamelCase} from 'src/App/share/general'
import {DuckAndTubeKeys, ThemeContext, duckKeys, tubeKeys, wavesKey, wavesSubKeys} from 'src/App/share/theme'

type C = typeof RgbStringColorPicker | typeof RgbaStringColorPicker
type P = {color: string, onChange: (_: string) => void, title: string}
const withSidebar = (ColorPicker: C) => ({color, onChange, title}: P):
  React.ReactElement =>
  <div className="grid__item">
    <div className="color-picker">
      <div className="color-picker__header">
        {splitCamelCase(capitalize(title))}
      </div>
      <ColorPicker color={color} onChange={onChange} />
    </div>
  </div>

const RgbPickerSidebar = withSidebar(RgbStringColorPicker)
const RgbaPickerSidebar = withSidebar(RgbaStringColorPicker)

export const DuckColorPickers = () => DuckOrTubeColorPickers(duckKeys)
export const TubeColorPickers = () => DuckOrTubeColorPickers(tubeKeys)
export const WaveColorPickers = (): React.ReactElement => {
  const {theme, setTheme} = React.useContext(ThemeContext)
  const colors = theme.getArr(wavesKey)
  return (
    <>
    {wavesSubKeys.map((x, i) =>
      <RgbaPickerSidebar
        key={i}
        color={colors[i]}
        onChange={rgba => setTheme(d => {d.custom[wavesKey][i] = rgba})}
        title={x}
      />
    )}
    </>
  )
}

const DuckOrTubeColorPickers = (keys: readonly DuckAndTubeKeys[]):
  React.ReactElement => {
  const {theme, setTheme} = React.useContext(ThemeContext)
  return (
    <>
    {keys.map((x, i) =>
      <RgbPickerSidebar
        key={i}
        color={theme.get(x)}
        onChange={(rgb: string) => setTheme(d => {d.custom[x] = rgb})}
        title={x}
      />
    )}
    </>
  )
}
