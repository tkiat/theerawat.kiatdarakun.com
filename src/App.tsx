import {Redirect, Router} from '@reach/router'
import React from 'react'
import {useImmer} from 'use-immer'

import {Background, Canvas, Contact, Content, NavMain, NavSubMobile, NavSubTube, Sidebar, WaveConfigs, mkWavePhysics, mkWaves, storeWavePhysics, Title} from './App/component'
import {isMobile} from 'src/App/share/general'
import {useViewportDimensions} from 'src/App/share/hook'
import {Path, adaptPathToUrl, mkPath, storePath} from 'src/App/share/path'
import {ThemeObject, ThemeProvider, getBaseTheme, mayApplyBaseTheme, mkGlobalStyle, mkThemeObject, wavesSubKeys, storeThemeObject, updateFavicon} from 'src/App/share/theme'

import 'src/App/share/style/main.scss'

// TODO only navMain not navtube should be outside main because navtube is inside main unlike navMain

const numPointsOnWave = 5 // <number of ducks> + 1
const numWave = wavesSubKeys.length

export const App = (): React.ReactElement => {
  const dimension = useViewportDimensions({msDelay: 500})

  const [path, setPath] = useImmer<Path>(mkPath())
  const isResumePage = path.current === 'resume'
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
  }, [isResumePage, dimension])

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

  const contact = isResumePage && <Contact />
  const navSub = !isResumePage && (
    isMobile() ?
      <NavSubMobile path={path} setPath={setPath} />
    : <NavSubTube path={path} setPath={setPath} />
  )
  const title = isMobile() && <Title title={path.mapping[path.current]} />

  return (
    <div id="main" className="app" style={mkGlobalStyle(theme)}>
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
          {contact}
          {title}
          <Background theme={theme} />
          <Canvas dimension={dimension} theme={theme} waveConfigs={waveConfigs} />
          <Content isInsideWater={isResumePage} />
        </div>
        <ThemeProvider value={{setTheme, theme}}>
          <Sidebar waveConfigs={waveConfigs}
                   willShowCustomMenu={theme.current === 'custom'} />
        </ThemeProvider>
      </main>
    </div>
  )
}