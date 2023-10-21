import { useGetRestaurantsQuery } from '../../services/api'

import RestaurantsList from '../../components/RestaurantsList'
import Hero from '../../components/Hero'
import Loader from '../../components/Loader'

const Home = () => {
  const { data: restaurants } = useGetRestaurantsQuery()

  if (restaurants) {
    return (
      <>
        <Hero />
        <RestaurantsList restaurants={restaurants} />
      </>
    )
  } else {
    return <Loader />
  }
}

export default Home
