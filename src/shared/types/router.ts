import { ReactNode } from 'react'
import { RouteProps } from 'react-router-dom'

export type AppRoutesProps = RouteProps & {
  skeleton?: ReactNode
}
