import Eatery from '../../models/Restaurant'

import Restaurant from '../Restaurant'
import { ListRestaurants } from './styles'

type Props = {
  restaurants: Eatery[]
}

const RestaurantsList = ({ restaurants }: Props) => (
  <div className="container">
    <ListRestaurants>
      {restaurants.map((restaurant) => (
        <Restaurant
          key={restaurant.title}
          image={restaurant.image}
          emphasis={restaurant.emphasis}
          category={restaurant.category}
          title={restaurant.title}
          rate={restaurant.rate}
          description={restaurant.description}
        />
      ))}
    </ListRestaurants>
  </div>
)

export default RestaurantsList
