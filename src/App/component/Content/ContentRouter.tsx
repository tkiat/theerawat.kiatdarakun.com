import React from 'react'
import {Router, RouteComponentProps} from '@reach/router'

import {Character, Consume, Create, Credits, Hi, NotFound, Resume, Story} from './page'

import {pathToTestId} from 'src/App/share/general'
import {pathObject} from 'src/App/share/path'

const paths = Object.entries(pathObject).
  map(([k, v]) => v.length ? v.map(x => k + '/' + x) : [k]).flat(1)

const mapping = {
  [paths[0]]: <Hi />,
  [paths[1]]: <Character />,
  [paths[2]]: <Story />,
  [paths[3]]: <Credits />,
  [paths[4]]: <Create />,
  [paths[5]]: <Consume />,
  [paths[6]]: <Resume />,
}

export const ContentRouter = (): React.ReactElement =>
  <Router>
    {(() => {
      const NotFoundRoute = (_: RouteComponentProps) => (
        <div data-testid="page-notfound">
          <NotFound className="notfound notfound--content" />
        </div>
      )
      return <NotFoundRoute default />
    })()}
    {Object.entries(mapping).map(([k, v], i) => {
      const Route = (_: RouteComponentProps) =>
        <div data-testid={pathToTestId(k)}>{v}</div>
      return <Route key={i} path={k} />
    })}
  </Router>
