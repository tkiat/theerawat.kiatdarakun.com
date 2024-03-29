import {Link} from "@reach/router"
import React from "react"

import {MainPath, capitalize} from "@app/share"
import {DuckAboutMe, DuckActivity} from "@assets/duck"

type P = {isActive: boolean, left: string, onclick: () => void, path: MainPath,
          index: number, to: string}
export const ItemContent = ({isActive, index, left, onclick, path, to}: P):
  React.ReactElement => {
  const text = capitalize(path)
  return (
    <Link
      className={
        "nav-main nav-main--content" + (isActive ? " nav-main--active" : "")
      }
      to={to}
      style={{left: left, textDecoration: "none"}}
      onClick={onclick}
      aria-label={text}
      draggable="false"
    >
      <div className="nav-main__text">{text}</div>
      {
        [
          <DuckAboutMe className={"nav-main__svg"} />,
          <DuckActivity className={"nav-main__svg"} />,
        ][index]
      }
    </Link>
)}
