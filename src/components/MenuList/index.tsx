import { useState } from 'react'

import { MenuItem } from '../../pages/Home'
import MenuModal from '../Modal'
import Menu from '../Menu'

import { MenuCardList } from './styles'

type MenuListProps = {
  menus: MenuItem[]
}

const MenuList = ({ menus }: MenuListProps) => {
  const [selectedMenu, setSelectedMenu] = useState<MenuItem | null>(null)

  const handleMenuClick = (menu: MenuItem) => {
    setSelectedMenu(menu)
  }

  const handleCloseModal = () => {
    setSelectedMenu(null)
  }

  return (
    <div className="container">
      <MenuCardList>
        {menus.map((menu) => (
          <li key={menu.id}>
            <Menu
              id={menu.id}
              image={menu.foto}
              title={menu.nome}
              description={menu.descricao}
              onAddToCart={() => handleMenuClick(menu)}
            />
          </li>
        ))}
      </MenuCardList>
      {selectedMenu && (
        <MenuModal onClose={handleCloseModal} menu={selectedMenu} />
      )}
    </div>
  )
}

export default MenuList
