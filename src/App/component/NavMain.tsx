import React from 'react'
import {Updater} from 'use-immer'

import {isType} from 'src/App/share/general'
import {Path, mainPaths, numDucks, pathObject, subPaths} from 'src/App/share/path'

import {ItemContent} from './NavMain/ItemContent'
import {ItemSidebar} from './NavMain/ItemSidebar'

const xOffset = '20px'
const left = (index: number) =>
  `calc((100% - var(--sidebar-width)) * ${2 * index + 1} /
    ${numDucks * 2} - ${xOffset})`

export type P = {path: Path, setPath: Updater<Path>}
export const NavMain = ({path, setPath}: P):
  React.ReactElement => <>
    {mainPaths.map((x, i) =>
      <ItemContent
        key={x}
        path={x}
        to={path.current === x ? window.location.pathname
          : '/' + x + '/' + path.mapping[x]}
        isActive={x === path.current}
        left={left(i)}
        onclick={() => {
          setPath(d => {
            const p = window.location.pathname
            const curSubpage = p.substring(p.lastIndexOf('/') + 1)
            if (isType(curSubpage, subPaths)) {
              d.mapping[d.current] = curSubpage
            }
            d.current = x
          })
        }}
      />
    )}
    <ItemSidebar left={left(numDucks - 1)} />
  </>
