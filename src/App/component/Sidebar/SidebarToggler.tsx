import React from 'react'

import {sidebarTogglerId} from 'share/elementId'
import {toggleSidebar} from './util/toggleSidebar'

export const SidebarToggler = (): React.ReactElement =>
  <button
    className="sidebar-toggler"
    id={sidebarTogglerId}
    aria-label="sidebar toggler"
    onClick={toggleSidebar}>
  </button>
