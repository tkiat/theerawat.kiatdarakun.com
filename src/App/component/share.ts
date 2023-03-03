export const toggleSidebar = () => {
  document.getElementById("root")?.classList?.toggle("move")
  document.getElementById(import.meta.env.VITE_ID_NAVMAINSIDEBAR)?.classList?.
    toggle("nav-main--active")
  document.getElementById(import.meta.env.VITE_ID_SIDEBARTOGGLER)?.classList?.
    toggle("sidebar-toggler--appear")
  document.getElementById(import.meta.env.VITE_ID_SIDEBAR)?.classList?.toggle("sidebar--appear")
}
