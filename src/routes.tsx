import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import RestaurantPage from './pages/RestaurantPage'

const Ways = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/restaurantPage/:id" element={<RestaurantPage />} />
  </Routes>
)

export default Ways
