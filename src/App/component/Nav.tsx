import React from "react"
import {useImmer} from "use-immer"

import {Path, capitalize, getSubpageIndex, isMobile, pathObject} from "@app/share"
import {ValveTerminator} from "@assets/valve"
import {NodeText} from "./NavSubTube/NodeText"
import {NodeValve} from "./NavSubTube/NodeValve"
import {Title} from "./Title"
import {moveNode} from "./NavSubTube/moveNode"
import {Path, adaptPathToUrl, appId, genWaveColors, initTheme, isMobile, mkPath, numDucks, storePath, storeTheme, updateFavicon, useViewportDimensions} from "@app/share"

import {DuckHamburger} from "@assets/duck"
import {Path, capitalize, pathObject} from "@app/share"

type P = {path: Path, setPath: Updater<Path>}
export const Nav = ({path, setPath}: P): React.ReactElement =>
  <>
    <NavMain path={path} setPath={setPath} />
    <NavSub path={path} setPath={setPath} />
  </>
