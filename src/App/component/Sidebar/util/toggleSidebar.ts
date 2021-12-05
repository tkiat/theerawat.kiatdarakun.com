import {navMainSidebarId, sidebarId, sidebarTogglerId} from 'src/App/share/elementId'

export const toggleSidebar = () => {
  document.getElementById('root')?.classList?.toggle('move')
  document.getElementById(navMainSidebarId)?.classList?.
    toggle('nav-main--active')
  document.getElementById(sidebarTogglerId)?.classList?.
    toggle('sidebar-toggler--appear')
  document.getElementById(sidebarId)?.classList?.toggle('sidebar--appear')
}
