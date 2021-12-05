export const sidebarId = 'sidebar'
export const sidebarTogglerId = 'sidebar-toggler'
export const navMainSidebarId = 'nav-main-sidebar'

export const toggleSidebar = () => {
  document.getElementById('root')?.classList?.toggle('move')
  document.getElementById(sidebarTogglerId)?.classList?.
    toggle('sidebar-toggler--appear')
  document.getElementById(sidebarId)?.classList?.toggle('sidebar--appear')
  document.getElementById(navMainSidebarId)?.classList?.
    toggle('nav-main--active')
}
