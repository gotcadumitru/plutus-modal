export enum AppRoutes {
  ROOT = 'root',
  NOT_FOUND = 'not_found',
  MAIN = 'main',
}

export const RoutePaths: Record<AppRoutes, string> = {
  [AppRoutes.ROOT]: '/',
  [AppRoutes.MAIN]: '/main',
  [AppRoutes.NOT_FOUND]: '*',
}
