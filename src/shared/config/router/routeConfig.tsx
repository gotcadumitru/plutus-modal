import MainPage from 'pages/MainPage'
import { NotFoundPage } from 'pages/NotFoundPage'
import { Navigate } from 'react-router-dom'
import type { AppRoutesProps } from 'shared/types/router'
import { AppRoutes, RoutePaths } from './RoutePaths'

export const routeConfig: Partial<Record<AppRoutes, AppRoutesProps>> = {
  [AppRoutes.ROOT]: {
    path: RoutePaths.root,
    element: <Navigate to={RoutePaths.main} />,
  },
  [AppRoutes.MAIN]: {
    path: RoutePaths.main,
    element: <MainPage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePaths.not_found,
    element: <NotFoundPage />,
  },
}
