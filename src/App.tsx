import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import Footer from './components/Footer'
import { GlobalCss } from './styles'
import Ways from './routes'
import { store } from './store'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss />
        <Ways />
        <Footer />
      </BrowserRouter>
    </Provider>
  )
}

export default App
