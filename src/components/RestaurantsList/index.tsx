import { Eatery } from '../../pages/Home'

import Restaurant from '../Restaurant'
import { ListRestaurants } from './styles'

type Props = {
  restaurants: Eatery[]
}

const RestaurantsList = ({ restaurants }: Props) => (
  <div className="container">
    <ListRestaurants>
      {restaurants?.map((restaurant) => (
        <li key={restaurant.id}>
          <Restaurant
            id={restaurant.id}
            image={restaurant.capa}
            emphasis={restaurant.destacado}
            category={restaurant.tipo}
            title={restaurant.titulo}
            rate={restaurant.avaliacao}
            description={restaurant.descricao}
          />
        </li>
      ))}
    </ListRestaurants>
  </div>
)

export default RestaurantsList
