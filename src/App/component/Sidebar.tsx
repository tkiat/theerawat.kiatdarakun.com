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
  waveConfigs: React.MutableRefObject<WaveConfigs>
  willShowCustomMenu: boolean
}
export const Sidebar = ({initPlace, waveConfigs, willShowCustomMenu}: P):
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
        <TimeRadioButtons />
      </section>

      <hr className="sidebar__linebreak" />

      <section className="sidebar__section">
        <div className="sidebar__header">Theme</div>
        <div className="grid">
          <ThemePickers initPlace={initPlace} waveConfigs={waveConfigs} />
        </div>
      </section>

      {willShowCustomMenu &&
      <>
        <hr className="sidebar__linebreak sidebar__linebreak--custom" />

        <section className="sidebar__section">
          <div className="sidebar__header">Custom Theme</div>
          <div className="grid">
            <BaseThemePicker />
            <WaveColorPickers />
            <DuckColorPickers />
          {!isMobile() &&
            <TubeColorPickers />
          }
          </div>
        </section>
      </>
      }
    </div>
  </>
