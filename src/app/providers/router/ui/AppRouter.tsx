import { Route, Routes } from 'react-router-dom'
import { routeConfig } from 'shared/config/router/routeConfig'

const AppRouter = () => (
  <Routes>
    {Object.values(routeConfig).map(({ skeleton, ...route }) => (
      <Route key={route.path} path={route.path} element={route.element} />
    ))}
  </Routes>
)

export default AppRouter
