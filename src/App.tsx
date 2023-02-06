import {Redirect, Router} from '@reach/router'
import React from 'react'
import {useImmer} from 'use-immer'

import {Background, Canvas, Content, NavMain, NavSubMobile, NavSubTube, Sidebar, WaveConfigs, mkWavePhysics, mkWaves, storeWavePhysics, Title} from './App/component'
import {appId} from 'src/App/share/elementId'
import {isMobile} from 'src/App/share/general'
import {hslToString} from 'src/App/share/general'
import {useViewportDimensions} from 'src/App/share/hook'
import {Path, adaptPathToUrl, mkPath, numDucks, storePath} from 'src/App/share/path'
import {initTheme, ThemeObject, ThemeProvider, getBaseTheme, mayApplyBaseTheme, mkGlobalStyle, mkThemeObject, wavesSubKeys, storeTheme, storeThemeObject, updateFavicon} from 'src/App/share/theme'

import 'src/App/share/style/main.scss'

const numPointsOnWave = numDucks + 1
const numWave = wavesSubKeys.length

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
    colors: [0, 1, 2].map(x => hslToString({h: 0, s: 100, l: custom + step * x})),
  })
  React.useEffect(() => {
    waveConfigs.current.waves =
      mkWaves(numWave, numPointsOnWave, dimension, path.current)
  }, [dimension])

//   console.log(document.getElementById("app"))
//   console.log(getComputedStyle(document.getElementById("app")).getPropertyValue("--hue"))

  const [theme, setTheme] = useImmer<ThemeObject>(mkThemeObject())
  React.useLayoutEffect(() => {
//     const base = getBaseTheme(theme)
//     document.documentElement.setAttribute('theme-base', base)
//     document.documentElement.setAttribute('theme-supplement', theme.current)
//     document.documentElement.setAttribute('time', theme.time)
//     updateFavicon(base)
  }, [theme])

//   const cleanupRef = React.useRef({path: path, theme: theme})
//   cleanupRef.current = {path: path, theme: theme}
  React.useEffect(() => {
    const cleanup = () => {
//       storePath(cleanupRef.current.path)
      storeTheme(theme)
//       storeWavePhysics(waveConfigs.current.physics)
    }
    window.addEventListener('beforeunload', cleanup)
    return () => {
      window.removeEventListener('beforeunload', cleanup)
    }
  }, [])

  React.useLayoutEffect(() => {
    mayApplyBaseTheme()
    document.getElementById('loading')?.remove()
  }, [])

  const navSub = isMobile() ?
    <NavSubMobile path={path} setPath={setPath} />
    : <NavSubTube path={path} setPath={setPath} />
  const title = isMobile() && <Title title={path.mapping[path.current]} />
//     <div className="app" id={appId} style={mkGlobalStyle(theme)}>
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
    {/*      <Background theme={theme} /> */}
          <div id="background"></div>
          <Content />
          <Canvas dimension={dimension} theme={theme} waveConfigs={waveConfigs} />
        </div>
    {/* <ThemeProvider value={{setTheme, theme}}>      */}
          <Sidebar waveConfigs={waveConfigs}
                   initPlace={initPlace}
                   willShowCustomMenu={theme.current === 'custom'} />
    {/* </ThemeProvider>      */}
      </main>
    </div>
  )
}