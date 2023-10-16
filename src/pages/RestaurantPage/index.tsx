import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Banner from '../../components/Banner'
import Header from '../../components/Header'

import MenuList from '../../components/MenuList'
import { Eatery } from '../Home'
import Cart from '../../components/Cart'

const RestaurantPage = () => {
  const { id } = useParams()

  const [restaurantData, setRestaurantData] = useState<Eatery>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurantData(res))
      .catch((error) => {
        console.error('Ocorreu um erro ao buscar os dados da API:', error)
      })
  }, [id])

  if (!restaurantData) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <Header />
      <Banner
        restaurantImage={restaurantData.capa}
        restaurantType={restaurantData.tipo}
        restaurantTitle={restaurantData.titulo}
      />
      <MenuList menus={restaurantData.cardapio} />
      <Cart />
    </>
  )
}

export default RestaurantPage
