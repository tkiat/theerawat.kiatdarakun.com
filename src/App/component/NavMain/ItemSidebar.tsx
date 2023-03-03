import React from "react"

import {DuckSidebar} from "@assets/duck"

import {toggleSidebar} from "../share"

type P = {left: string}
export const ItemSidebar = ({left}: P): React.ReactElement =>
  <button
    id={import.meta.env.VITE_NAVMAINSIDEBARID}
    className="nav-main nav-main--sidebar"
    aria-label="Settings"
    style={{left: left}}
    onClick={toggleSidebar}
  >
    <div className="nav-main__text">Settings</div>
    <DuckSidebar className="nav-main__svg" />
  </button>
