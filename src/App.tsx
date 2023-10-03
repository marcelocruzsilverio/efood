import { BrowserRouter } from 'react-router-dom'

import Footer from './components/Footer'
import { GlobalCss } from './styles'
import Ways from './routes'

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <Ways />
      <Footer />
    </BrowserRouter>
  )
}

export default App
