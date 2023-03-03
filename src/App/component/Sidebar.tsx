import React from "react"

import {isMobile} from "@app/share"

import {WaveConfigs} from "./Canvas/wave"
import {SidebarToggler} from "./Sidebar/SidebarToggler"
import {LocationPicker} from "./Sidebar/LocationPicker"
import {TimePicker} from "./Sidebar/TimePicker"
import {WavePhysicsSettings} from "./Sidebar/WavePhysicsSettings"

type P = {
  initPlace: string
  initTime: string
  waveConfigs: React.MutableRefObject<WaveConfigs>
}
export const Sidebar = ({initPlace, initTime, waveConfigs}: P):
  React.ReactElement =>
  <>
    <SidebarToggler />

    <div className="sidebar" id={import.meta.env.VITE_SIDEBARID}>
      <section className="sidebar__section">
        <div className="sidebar__header">Wave</div>
        <WavePhysicsSettings waveConfigs={waveConfigs} />
      </section>

      <hr className="sidebar__linebreak" />

      <section className="sidebar__section">
        <div className="sidebar__header">Time</div>
        <TimePicker initTime={initTime} />
      </section>

      <hr className="sidebar__linebreak" />

      <section className="sidebar__section">
        <div className="sidebar__header">Theme</div>
        <div className="grid">
          <LocationPicker initPlace={initPlace} waveConfigs={waveConfigs} />
        </div>
      </section>
    </div>
  </>
