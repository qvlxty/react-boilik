import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { About, Main } from '@/pages/main'

const routes = [
  {
    path: '/',
    component: Main,
  },
  {
    path: '/about',
    component: About,
  },
]

export const AppRouter = () => (
  <Router>
    <Routes>
      {routes.map((route) => {
        return (
          <Route
            key={route.path}
            path={route.path}
            Component={route.component}
          />
        )
      })}
    </Routes>
  </Router>
)
