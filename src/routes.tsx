import * as React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Main } from '@/pages/main'

const routes = [
  {
    path: '/',
    component: Main,
  },
]

export const Routes = () => (
  <Router>
    <Switch>
      {routes.map((route) => {
        const Component = route.component
        return (
          <Route key={route.path} path={route.path} exact>
            <Component />
          </Route>
        )
      })}
    </Switch>
  </Router>
)
