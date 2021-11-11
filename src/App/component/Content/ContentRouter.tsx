import React from 'react'
import {Router, RouteComponentProps} from '@reach/router'

import {NotFound} from './NotFound'
import {Resume} from './Resume'

import {Credits} from './about/Credits'
import {Intro} from './about/Intro'
import {Items} from './about/Items'
import {Personality} from './about/Personality'

import {General} from './activity/General'
import {LifeStory} from './activity/LifeStory'
import {Software} from './activity/Software'

import {pathToTestId} from 'src/App/share/general'
import {pathObject} from 'src/App/share/path'

const paths = Object.entries(pathObject).
  map(([k, v]) => v.length ? v.map(x => k + '/' + x) : [k]).flat(1)

const mapping = {
  [paths[0]]: <Intro />,
  [paths[1]]: <Personality />,
  [paths[2]]: <Items />,
  [paths[3]]: <Credits />,
  [paths[4]]: <Software />,
  [paths[5]]: <General />,
  [paths[6]]: <LifeStory />,
  [paths[7]]: <Resume />,
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
