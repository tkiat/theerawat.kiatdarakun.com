import React from "react"
import {Updater} from "use-immer"
import {Link} from "@reach/router"

import {Path, isMobile} from "@app/share"
import {Desktop} from "./NavSub/Desktop"
import {Mobile} from "./NavSub/Mobile"

type P = {path: Path, setPath: Updater<Path>}
export const NavSub = ({path, setPath}: P): React.ReactElement => isMobile() ?
    <Mobile path={path} setPath={setPath} />
  : <Desktop path={path} setPath={setPath} />
