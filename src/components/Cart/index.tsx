import italian from '../../assets/images/italian.png'
import {
  CartButton,
  CartContainer,
  CartInfos,
  CartItem,
  Overlay,
  Sidebar
} from './styles'

const Cart = () => {
  return (
    <CartContainer>
      <Overlay></Overlay>
      <Sidebar>
        <ul>
          <CartItem>
            <img src={italian} alt="" />

            <div>
              <h2>Pizza Marguerita</h2>
              <p>R$ 60,90</p>
              <button type="button" />
            </div>
          </CartItem>
          <CartItem>
            <img src={italian} alt="" />

            <div>
              <h2>Pizza Marguerita</h2>
              <p>R$ 60,90</p>
              <button type="button" />
            </div>
          </CartItem>
          <CartItem>
            <img src={italian} alt="" />

            <div>
              <h2>Pizza Marguerita</h2>
              <p>R$ 60,90</p>
              <button type="button" />
            </div>
          </CartItem>
        </ul>
        <CartInfos>
          <p>Valor total</p>
          <p>R$ 182,70</p>
        </CartInfos>
        <CartButton>Continuar com a entrega</CartButton>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
