import React from 'react'

import {sidebarTogglerId, toggleSidebar} from './util/toggleSidebar'

export const SidebarToggler = (): React.ReactElement =>
  <button
    className="sidebar-toggler"
    id={sidebarTogglerId}
    aria-label="sidebar toggler"
    onClick={toggleSidebar}>
  </button>
