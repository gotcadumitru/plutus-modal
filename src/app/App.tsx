import AppRouter from 'app/providers/router'
import './styles/app.scss'

const App = () => (
  <div className='app' data-testid='app'>
    <AppRouter />
  </div>
)
export default App
