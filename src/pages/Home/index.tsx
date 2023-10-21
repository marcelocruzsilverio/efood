import { useGetRestaurantsQuery } from '../../services/api'

import RestaurantsList from '../../components/RestaurantsList'
import Hero from '../../components/Hero'

export type MenuItem = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export type Eatery = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: MenuItem[]
}

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
    return <h4>Carregando</h4>
  }
}

export default Home
