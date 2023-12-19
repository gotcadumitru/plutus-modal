import classNames from 'classnames'
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { RoutePaths } from 'shared/config/router/RoutePaths'
import Button, { ButtonTheme } from 'shared/ui/Button'
import './not-found-page.scss'

interface NotFoundPageProps {
  className?: string
  text?: string
}

export const NotFoundPage: FC<NotFoundPageProps> = ({ className, text = 'Page not found' }) => {
  const navigate = useNavigate()
  return (
    <h2 className={classNames('not-found-page', className)}>
      <div>{text}</div>
      <Button theme={ButtonTheme.OUTLINE_RED} onClick={() => navigate(RoutePaths.main)}>
        Main page
      </Button>
    </h2>
  )
}
