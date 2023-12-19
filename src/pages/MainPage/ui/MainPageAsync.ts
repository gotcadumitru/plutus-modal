import lazyWithPreload from 'shared/lib/utils/lazyWithPreload'

export const MainPageAsync = lazyWithPreload(() => import('./MainPage'))
