import React from "react"

import {toggleSidebar} from "../share"

export const SidebarToggler = (): React.ReactElement =>
  <button
    className="sidebar-toggler"
    id={import.meta.env.VITE_ID_SIDEBARTOGGLER}
    aria-label="sidebar toggler"
    onClick={toggleSidebar}>
  </button>
