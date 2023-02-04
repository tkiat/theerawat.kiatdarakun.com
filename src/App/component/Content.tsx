import React from 'react'
import {Router, RouteComponentProps} from '@reach/router'

import {Character, Digest, Events, Create, Hi, NotFound, Story} from './Content/page'
import {pathObject} from 'src/App/share/path'

const paths = Object.entries(pathObject).
  map(([k, v]) => v.length ? v.map(x => k + '/' + x) : [k]).flat(1)

const mapping = {
  [paths[0]]: <Hi />,
  [paths[1]]: <Character />,
  [paths[2]]: <Story />,
  [paths[3]]: <Create />,
  [paths[4]]: <Digest />,
  [paths[5]]: <Events />,
}

const beautify = (x: string) => "content--" + x.replace("/", "_")

export const Content = (): React.ReactElement =>
  <Router>
    {(() => {
      const NotFoundRoute = (_: RouteComponentProps) => (
        <div className="content">
          <NotFound />
        </div>
      )
      return <NotFoundRoute default />
    })()}

    {Object.entries(mapping).map(([k, v], i) => {
      const Route = (_: RouteComponentProps) =>
        <div className={"content " + beautify(k)}>
          {v}
        </div>
      return <Route key={i} path={k} />
    })}
  </Router>
