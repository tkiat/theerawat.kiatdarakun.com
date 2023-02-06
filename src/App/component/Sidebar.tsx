import React from 'react'

import {sidebarId} from 'src/App/share/elementId'
import {isMobile} from 'src/App/share/general'
import {WaveConfigs} from './Canvas/wave'
import {BaseThemePicker}    from './Sidebar/BaseThemePicker'
import {DuckColorPickers, TubeColorPickers, WaveColorPickers}   from './Sidebar/ColorPicker'
import {SidebarToggler}     from './Sidebar/SidebarToggler'
import {ThemePickers}       from './Sidebar/ThemePickers'
import {TimeRadioButtons}   from './Sidebar/TimeRadioButtons'
import {WavePhysicsSliders} from './Sidebar/WavePhysicsSliders'

type P = {
  initPlace: string
  initTime: string
  waveConfigs: React.MutableRefObject<WaveConfigs>
}
export const Sidebar = ({initPlace, initTime, waveConfigs, willShowCustomMenu}: P):
  React.ReactElement =>
  <>
    <SidebarToggler />

    <div className="sidebar" id={sidebarId}>
      <section className="sidebar__section">
        <div className="sidebar__header">Wave</div>
        <WavePhysicsSliders waveConfigs={waveConfigs} />
      </section>

      <hr className="sidebar__linebreak" />

      <section className="sidebar__section">
        <div className="sidebar__header">Time</div>
        <TimeRadioButtons initTime={initTime} />
      </section>

      <hr className="sidebar__linebreak" />

      <section className="sidebar__section">
        <div className="sidebar__header">Theme</div>
        <div className="grid">
          <ThemePickers initPlace={initPlace} waveConfigs={waveConfigs} />
        </div>
      </section>
    </div>
  </>
