import Hero from './components/Hero'
import Restaurant from './components/Restaurant'
import { GlobalCss } from './styles'

function App() {
  return (
    <>
      <GlobalCss />
      <Hero />
      <div className="container">
        <Restaurant />
      </div>
    </>
  )
}

export default App
