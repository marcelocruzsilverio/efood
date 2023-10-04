import Carte from '../../models/Menu'

import MenuCard from '../MenuCard'

import { MenuCardList } from './styles'

type PropsMenu = {
  menus: Carte[]
}

const MenuList = ({ menus }: PropsMenu) => (
  <div className="container">
    <MenuCardList>
      {menus.map((menu) => (
        <MenuCard
          key={menu.title}
          image={menu.image}
          title={menu.title}
          description={menu.description}
        />
      ))}
    </MenuCardList>
  </div>
)

export default MenuList
