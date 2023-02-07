import React from "react"

import {navMainSidebarId} from "@app/share"
import {ReactComponent as DuckSidebar} from "@assets/duck/sidebar.svg"

import {toggleSidebar} from "../share"

type P = {left: string}
export const ItemSidebar = ({left}: P): React.ReactElement =>
  <button
    id={navMainSidebarId}
    className="nav-main nav-main--sidebar"
    aria-label="Settings"
    style={{left: left}}
    onClick={toggleSidebar}
  >
    <div className="nav-main__text">Settings</div>
    <DuckSidebar className="nav-main__svg" />
  </button>
