import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { RootReducer } from '../../store'

import { open } from '../../store/reducers/cart'

import logo from '../../assets/images/logo.svg'
import * as S from './styles'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const handleClick = () => {
    if (items.length === 0) {
      alert('Por favor, adicione produtos ao carrinho!')
    }
  }

  const openCart = () => {
    dispatch(open())
    handleClick()
  }

  return (
    <S.HeaderBar>
      <div className="container">
        <nav>
          <S.LinkContainer>
            <S.LinkRestaurant>
              <Link
                title="Clique aqui para acessar a página de restaurantes"
                to="/"
              >
                Restaurantes
              </Link>
            </S.LinkRestaurant>
            <Link to="/">
              <img src={logo} alt="Efood logo" />
            </Link>
            <S.CartContainer role="button" onClick={openCart}>
              {items.length === 0
                ? 'O carrinho está vazio'
                : `${items.length} produto(s) no carrinho`}
            </S.CartContainer>
          </S.LinkContainer>
        </nav>
      </div>
    </S.HeaderBar>
  )
}

export default Header
