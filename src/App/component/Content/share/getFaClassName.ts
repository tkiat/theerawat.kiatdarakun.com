export const getFaClassName = (x: string) => {
  switch(x) {
    case "audio":
      return "fa-solid fa-headphones"
    case "book":
      return "fa-solid fa-book"
    case "course":
//       return "fa-solid fa-graduation-cap"
      return "fa-solid fa-chalkboard-user"
    case "desktop":
      return "fa-solid fa-computer"
    case "gamepad":
      return "fa-solid fa-gamepad"
    case "image":
      return "fa-regular fa-image"
    case "laptop":
      return "fa-solid fa-laptop"
    case "linux":
      return "fa-brands fa-linux"
    case "mobile":
      return "fa-solid fa-mobile-screen-button"
    case "online":
      return "fa-solid fa-wifi"
    case "offline":
      return "fa-solid fa-plane"
    case "series":
      return "fa-solid fa-layer-group"
    case "tablet":
      return "fa-solid fa-tablet-button"
    case "text":
      return "fa-solid fa-align-left"
    case "video":
      return "fa-solid fa-film"
    case "web":
      return "fa-solid fa-globe"
    default:
      return ""
  }
}
