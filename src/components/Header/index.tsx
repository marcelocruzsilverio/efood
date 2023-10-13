import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.svg'
import {
  CartContainer,
  HeaderBar,
  LinkContainer,
  LinkRestaurant
} from './styles'

const Header = () => (
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
          <CartContainer>0 produto(s) no carrinho</CartContainer>
        </LinkContainer>
      </nav>
    </div>
  </HeaderBar>
)

export default Header
