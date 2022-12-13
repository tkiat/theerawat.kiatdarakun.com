import React from 'react'
import {Updater} from 'use-immer'

import {Path, mainPaths, numDucks} from 'src/App/share/path'

import {ItemContent} from './NavMain/ItemContent'
import {ItemSidebar} from './NavMain/ItemSidebar'

const xOffset = '20px'
const left = (index: number) =>
  `calc((100% - var(--sidebar-width)) * ${2 * index + 1} /
    ${numDucks * 2} - ${xOffset})`

export type P = {path: Path, setPath: Updater<Path>}
export const NavMain = ({path, numPointsOnWave, setPath}: P): React.ReactElement =>
  <>
  {mainPaths.map((x, i) =>
    <ItemContent
      key={x}
      path={x}
      to={'/' + x + '/' + path.mapping[x]}
      isActive={x === path.current}
      left={left(i)}
      onclick={() => {setPath(d => {d.current = x})}}
    />
  )}
    <ItemSidebar left={left(numDucks - 1)} />
  </>
