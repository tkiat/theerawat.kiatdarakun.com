import React from "react"
import {Router, RouteComponentProps} from "@reach/router"

import {pathObject} from "@app/share"

import {Character, Digest, Events, Create, Hi, NotFound, Story} from "./Content/page"

const paths = Object.entries(pathObject).
  map(([k, v]) => v.length ? v.map(x => encodeURI(k) + "/" + x) : [k]).flat(1)

export const Content = (): React.ReactElement =>
  <div className="content">
    <Router>
    {
      (() => {
        const RouteDefault = (_: RouteComponentProps) => <NotFound />
        const Route0 = (_: RouteComponentProps) => <Hi />
        const Route1 = (_: RouteComponentProps) => <Character />
        const Route2 = (_: RouteComponentProps) => <Story />
        const Route3 = (_: RouteComponentProps) => <Create />
        const Route4 = (_: RouteComponentProps) => <Digest />
        const Route5 = (_: RouteComponentProps) => <Events />
        return <>
          <RouteDefault default />
          <Route0 path={paths[0]} />
          <Route1 path={paths[1]} />
          <Route2 path={paths[2]} />
          <Route3 path={paths[3]} />
          <Route4 path={paths[4]} />
          <Route5 path={paths[5]} />
        </>
      })()
    }
    </Router>
  </div>
