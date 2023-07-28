import React from "react"
import {Router, RouteComponentProps} from "@reach/router"

import {pathObject} from "@app/share"

import {Formal, Informal, Bio, Hobby, TrueMeaning, NotFound} from "./Content/page"

const paths = Object.entries(pathObject).
  map(([k, v]) => v.length ? v.map(x => encodeURI(k) + "/" + x) : [k]).flat(1)

export const Content = (): React.ReactElement =>
  <div className="content">
    <Router>
    {
      (() => {
        const RouteDefault = (_: RouteComponentProps) => <NotFound />
        const Route0 = (_: RouteComponentProps) => <Formal />
        const Route1 = (_: RouteComponentProps) => <Informal />
        const Route2 = (_: RouteComponentProps) => <Bio />
        const Route3 = (_: RouteComponentProps) => <Hobby />
        const Route4 = (_: RouteComponentProps) => <TrueMeaning />
        return <>
          <RouteDefault default />
          <Route0 path={paths[0]} />
          <Route1 path={paths[1]} />
          <Route2 path={paths[2]} />
          <Route3 path={paths[3]} />
          <Route4 path={paths[4]} />
        </>
      })()
    }
    </Router>
  </div>
