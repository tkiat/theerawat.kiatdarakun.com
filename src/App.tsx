import {Redirect, Router} from '@reach/router'
import React from 'react'
import {useImmer} from 'use-immer'

import {Background, Canvas, Content, NavMain, NavSubMobile, NavSubTube, Sidebar, WaveConfigs, mkWavePhysics, mkWaves, storeWavePhysics, Title} from './App/component'
import {appId} from 'src/App/share/elementId'
import {isMobile} from 'src/App/share/general'
import {hslToString} from 'src/App/share/general'
import {useViewportDimensions} from 'src/App/share/hook'
import {Path, adaptPathToUrl, mkPath, numDucks, storePath} from 'src/App/share/path'
import {genWaveColors, initTheme, storeTheme, updateFavicon} from 'src/App/share/theme'

import 'src/App/share/style/main.scss'

const numPointsOnWave = numDucks + 1
const numWave = 3 // TODO

const { initPlace, initTime } = initTheme()

export const App = (): React.ReactElement => {
  const dimension = useViewportDimensions({msDelay: 500})

  const [path, setPath] = useImmer<Path>(mkPath())
  React.useEffect(() => {
    const setPathFromUrl = () => setPath(d => adaptPathToUrl(d))
    window.addEventListener('popstate', setPathFromUrl)
    return () => {
      window.removeEventListener('popstate', setPathFromUrl)
    }
  }, [])

  const [custom, step] = [25, 15]

  const waveConfigs = React.useRef<WaveConfigs>({
    waves: mkWaves(numWave, numPointsOnWave, dimension, path.current),
    physics: mkWavePhysics(),
    colors: genWaveColors(initPlace)
  })
  React.useEffect(() => {
    waveConfigs.current.waves =
      mkWaves(numWave, numPointsOnWave, dimension, path.current)
  }, [dimension])

  React.useLayoutEffect(() => {
//     updateFavicon(base)
  }, [])

//   const cleanupRef = React.useRef({path: path, theme: theme})
//   cleanupRef.current = {path: path, theme: theme}
  React.useEffect(() => {
    const cleanup = () => {
//       storePath(cleanupRef.current.path)
      storeTheme()
//       storeWavePhysics(waveConfigs.current.physics)
    }
    window.addEventListener('beforeunload', cleanup)
    return () => {
      window.removeEventListener('beforeunload', cleanup)
    }
  }, [])

  React.useLayoutEffect(() => {
//     mayApplyBaseTheme()
    document.getElementById('loading')?.remove()
  }, [])

  const navSub = isMobile() ?
    <NavSubMobile path={path} setPath={setPath} />
    : <NavSubTube path={path} setPath={setPath} />
  const title = isMobile() && <Title title={path.mapping[path.current]} />
  return (
    <div className="app" data-theme-base={initPlace} data-theme-time={initTime} id={appId}>
      <NavMain path={path} setPath={setPath} />
      {navSub}
      <main className="app__main">
        <div>
          <Router>
            <Redirect
              from="/"
              to={path.current + '/' + path.mapping[path.current]}
              noThrow />
          </Router>
          {title}
          <div id="background"></div>
          <Content />
          <Canvas
            dimension={dimension}
            waveConfigs={waveConfigs}
          />
        </div>
        <Sidebar
          waveConfigs={waveConfigs}
          initPlace={initPlace}
          initTime={initTime}
        />
      </main>
    </div>
  )
}