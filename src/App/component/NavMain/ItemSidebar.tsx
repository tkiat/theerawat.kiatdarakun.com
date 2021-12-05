import React from 'react'

import {ReactComponent as DuckSidebar} from 'assets/duck/duck-sidebar.svg'
import {navMainSidebarId, toggleSidebar} from '../Sidebar/util/toggleSidebar'

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
