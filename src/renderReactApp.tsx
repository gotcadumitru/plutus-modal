import ErrorBoundary from 'app/providers/ErrorBoundary'
import 'app/styles/main.scss'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './app/App'

const renderReactApp = () => {
  const container = document.getElementById('plutus-root')
  const root = createRoot(container as HTMLElement)
  root.render(
    <BrowserRouter>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </BrowserRouter>,
  )
}
export default renderReactApp
