import React from "react"
import {Router, RouteComponentProps} from "@reach/router"

import {pathObject} from "@app/share"

import {Character, Digest, Events, Create, Hi, NotFound, Story} from "./Content/page"

const paths = Object.entries(pathObject).
  map(([k, v]) => v.length ? v.map(x => k + "/" + x) : [k]).flat(1)

const mapping = {
  [paths[0]]: <Hi />,
  [paths[1]]: <Character />,
  [paths[2]]: <Story />,
  [paths[3]]: <Create />,
  [paths[4]]: <Digest />,
  [paths[5]]: <Events />,
}

export const Content = (): React.ReactElement =>
  <Router>
    {(() => {
      const NotFoundRoute = (_: RouteComponentProps) =>
        <div className="content">
          <NotFound />
        </div>
      return <NotFoundRoute default />
    })()}

    {Object.entries(mapping).map(([k, v], i) => {
      const Route = (_: RouteComponentProps) =>
        <div className="content">
          {v}
        </div>
      return <Route key={i} path={k} />
    })}
  </Router>
