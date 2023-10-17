// import { useEffect, useState } from 'react'

// import RestaurantsList from '../../components/RestaurantsList'
// import Hero from '../../components/Hero'
// import { useGetRestaurantsQuery } from '../../services/api'

// export type MenuItem = {
//   foto: string
//   preco: number
//   id: number
//   nome: string
//   descricao: string
//   porcao: string
// }

// export type Eatery = {
//   id: number
//   titulo: string
//   destacado: boolean
//   tipo: string
//   avaliacao: number
//   descricao: string
//   capa: string
//   cardapio: MenuItem[]
// }

// const Home = () => {
// const [restaurants, setRestaurants] = useState<Eatery[]>([])
// const [loading, setLoading] = useState(true) // Estado para rastrear o carregamento

// const { data: restaurants } = useGetRestaurantsQuery()

// useEffect(() => {
//   fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
//     .then((response) => response.json())
//     .then((data) => {
//       setRestaurants(data)
//       setLoading(false)
//     })
//     .catch((error) => {
//       console.error('Ocorreu um erro ao buscar os dados da API:', error)
//       setLoading(false)
//     })
// }, [])

// if (loading) {
//   return <h3>Carregando...</h3>
// }

//   if (restaurants) {
//     return (
//       <>
//         <Hero />
//         <RestaurantsList restaurants={restaurants} />
//       </>
//     )
//     return <h4>Carregando</h4>
//   }
// }

// export default Home

import RestaurantsList from '../../components/RestaurantsList'
import Hero from '../../components/Hero'
import { useGetRestaurantsQuery } from '../../services/api'

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
