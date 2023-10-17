import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.svg'
import {
  CartContainer,
  HeaderBar,
  LinkContainer,
  LinkRestaurant
} from './styles'

import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <HeaderBar>
      <div className="container">
        <nav>
          <LinkContainer>
            <LinkRestaurant>
              <Link to="/">Restaurantes</Link>
            </LinkRestaurant>
            <Link to="/">
              <img src={logo} alt="Efood logo" />
            </Link>
            <CartContainer onClick={openCart}>
              {items.length} produto(s) no carrinho
            </CartContainer>
          </LinkContainer>
        </nav>
      </div>
    </HeaderBar>
  )
}

export default Header
