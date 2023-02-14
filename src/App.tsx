import {Redirect, Router} from "@reach/router"
import React from "react"
import {useImmer} from "use-immer"

import {Canvas, Content, NavMain, NavSub, Sidebar, WaveConfigs, mkWavePhysics, mkWaves, numWave, storeWavePhysics} from "@app/component"
import {Path, adaptPathToUrl, appId, genWaveColors, initTheme, isMobile, mkPath, numDucks, storePath, storeTheme, updateFavicon, useViewportDimensions} from "@app/share"
import "@app/share/style/main.scss"

// TODO scrollto creates unwanted space at bottom

const numPointsOnWave = numDucks + 1
const { place: initPlace, time: initTime } = initTheme()

export const App = (): React.ReactElement => {
  const dimension = useViewportDimensions({msDelay: 500})

  const [path, setPath] = useImmer<Path>(mkPath())

  const waveConfigs = React.useRef<WaveConfigs>({
    waves: mkWaves(numWave, numPointsOnWave, dimension, path.current),
    physics: mkWavePhysics(),
    colors: genWaveColors(initPlace, numWave)
  })

  const cleanupRef = React.useRef(path)
  cleanupRef.current = path

  React.useEffect(() => {
    const cleanup = () => {
      storePath(cleanupRef.current)
      storeTheme()
      storeWavePhysics(waveConfigs.current.physics)
    }
    const setPathFromUrl = () => setPath(d => adaptPathToUrl(d))

    window.addEventListener("beforeunload", cleanup)
    window.addEventListener("popstate", setPathFromUrl)
    return () => {
      window.removeEventListener("beforeunload", cleanup)
      window.removeEventListener("popstate", setPathFromUrl)
    }
  }, [])

  React.useEffect(() => {
    waveConfigs.current.waves =
      mkWaves(numWave, numPointsOnWave, dimension, path.current)
  }, [dimension])

  React.useLayoutEffect(() => {
    updateFavicon(initPlace)
    document.getElementById("loading")?.remove()
  }, [])

  return (
    <div className="app" data-location={initPlace} data-time={initTime} id={appId}>
      <NavMain path={path} setPath={setPath} />
      <NavSub path={path} setPath={setPath} />
      <main className="app__main">
        <div>
          <Router>
            <Redirect
              from="/"
              to={path.current + "/" + path.mapping[path.current]}
              noThrow />
          </Router>
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