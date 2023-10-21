import { useParams } from 'react-router-dom'

import { useGetMenusQuery } from '../../services/api'

import Banner from '../../components/Banner'
import Header from '../../components/Header'

import MenuList from '../../components/MenuList'
import Cart from '../../components/Cart'

const RestaurantPage = () => {
  const { id } = useParams()
  const { data: restaurantData } = useGetMenusQuery(id!)

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
