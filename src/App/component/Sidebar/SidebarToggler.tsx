import React from "react"

import {sidebarTogglerId} from "@app/share"

import {toggleSidebar} from "../share"

export const SidebarToggler = (): React.ReactElement =>
  <button
    className="sidebar-toggler"
    id={sidebarTogglerId}
    aria-label="sidebar toggler"
    onClick={toggleSidebar}>
  </button>
