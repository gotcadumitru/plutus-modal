import classNames from 'classnames'
import Button from 'shared/ui/Button'
import './errorPage.scss'

interface ErrorPageProps {
  className?: string
}

export const ErrorPage = ({ className }: ErrorPageProps) => {
  const reloadPage = () => {
    global.location.reload()
  }

  return (
    <div className={classNames('error-page', className)}>
      <p>Page Error: Oops, Something Didn't Go as Planned</p>
      <p>
        It seems we've encountered an unexpected issue and couldn't display the requested page. We
        apologize for the inconvenience.
      </p>
      <Button onClick={reloadPage}>Reload</Button>
    </div>
  )
}
