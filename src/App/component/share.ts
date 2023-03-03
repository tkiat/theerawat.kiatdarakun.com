export const toggleSidebar = () => {
  document.getElementById("root")?.classList?.toggle("move")
  document.getElementById(import.meta.env.VITE_NAVMAINSIDEBARID)?.classList?.
    toggle("nav-main--active")
  document.getElementById(import.meta.env.VITE_SIDEBARTOGGLERID)?.classList?.
    toggle("sidebar-toggler--appear")
  document.getElementById(import.meta.env.VITE_SIDEBARID)?.classList?.toggle("sidebar--appear")
}
