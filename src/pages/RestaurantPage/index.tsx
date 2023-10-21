import { useParams } from 'react-router-dom'

import { useGetMenusQuery } from '../../services/api'

import Banner from '../../components/Banner'
import Header from '../../components/Header'

import MenuList from '../../components/MenuList'
import Cart from '../../components/Cart'
import Loader from '../../components/Loader'

type Menus = {
  id: string
}

const RestaurantPage = () => {
  const { id } = useParams() as Menus
  const { data: restaurantData } = useGetMenusQuery(id)

  if (!restaurantData) {
    return <Loader />
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
