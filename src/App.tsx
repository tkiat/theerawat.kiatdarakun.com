import {Redirect, Router} from '@reach/router'
import React from 'react'
import {useImmer} from 'use-immer'

import {Background, Canvas, Contact, Content, NavMain, NavSubMobile, NavSubTube, Sidebar, WaveConfigs, mkWavePhysics, mkWaves, storeWavePhysics, Title} from './App/component'
import {appId} from 'src/App/share/elementId'
import {isMobile} from 'src/App/share/general'
import {useViewportDimensions} from 'src/App/share/hook'
import {Path, adaptPathToUrl, mkPath, numDucks, storePath} from 'src/App/share/path'
import {ThemeObject, ThemeProvider, getBaseTheme, mayApplyBaseTheme, mkGlobalStyle, mkThemeObject, wavesSubKeys, storeThemeObject, updateFavicon} from 'src/App/share/theme'

import 'src/App/share/style/main.scss'

const numPointsOnWave = numDucks + 1
const numWave = wavesSubKeys.length

export const App = (): React.ReactElement => {
//   React.useEffect(() => {
//     document.getElementById('content-container')?.scrollTo(0, 0)
//   }, [location.pathname])

  const dimension = useViewportDimensions({msDelay: 500})

  const [path, setPath] = useImmer<Path>(mkPath())
  React.useEffect(() => {
    const setPathFromUrl = () => setPath(d => adaptPathToUrl(d))
    window.addEventListener('popstate', setPathFromUrl)
    return () => {
      window.removeEventListener('popstate', setPathFromUrl)
    }
  }, [])

  const waveConfigs = React.useRef<WaveConfigs>({
    waves: mkWaves(numWave, numPointsOnWave, dimension, path.current),
    physics: mkWavePhysics()
  })
  React.useEffect(() => {
    waveConfigs.current.waves =
      mkWaves(numWave, numPointsOnWave, dimension, path.current)
  }, [dimension])

  const [theme, setTheme] = useImmer<ThemeObject>(mkThemeObject())
  React.useLayoutEffect(() => {
    const base = getBaseTheme(theme)
    document.documentElement.setAttribute('theme-base', base)
    document.documentElement.setAttribute('theme-supplement', theme.current)
    document.documentElement.setAttribute('time', theme.time)
    updateFavicon(base)
  }, [theme])

  const cleanupRef = React.useRef({path: path, theme: theme})
  cleanupRef.current = {path: path, theme: theme}
  React.useEffect(() => {
    const cleanup = () => {
      storePath(cleanupRef.current.path)
      storeThemeObject(cleanupRef.current.theme)
      storeWavePhysics(waveConfigs.current.physics)
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

  return (
    <div className="app" id={appId} style={mkGlobalStyle(theme)}>
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
          <Background theme={theme} />
          <Canvas dimension={dimension} theme={theme} waveConfigs={waveConfigs} />
          <Content />
        </div>
        <ThemeProvider value={{setTheme, theme}}>
          <Sidebar waveConfigs={waveConfigs}
                   willShowCustomMenu={theme.current === 'custom'} />
        </ThemeProvider>
      </main>
    </div>
  )
}