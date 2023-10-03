import Footer from './components/Footer'
import Hero from './components/Hero'
import RestaurantsList from './components/RestaurantsList'
import { GlobalCss } from './styles'

function App() {
  return (
    <>
      <GlobalCss />
      <Hero />
      <div className="container">
        <RestaurantsList />
      </div>
      <Footer />
    </>
  )
}

export default App
