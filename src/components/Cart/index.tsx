import { useDispatch, useSelector } from 'react-redux'
import { close, remove } from '../../store/reducers/cart'
import { formataPreco } from '../Modal'

import {
  CartButton,
  CartContainer,
  CartInfos,
  CartItem,
  Overlay,
  Sidebar
} from './styles'
import { RootReducer } from '../../store'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const getTotalPrice = () => {
    return items.reduce((acumulator, actualValue) => {
      return (acumulator += actualValue.preco!)
    }, 0)
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart}></Overlay>
      <Sidebar>
        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
              <img src={item.foto} alt="" />

              <div>
                <h2>{item.nome}</h2>
                <p>{formataPreco(item.preco)}</p>
                <button onClick={() => removeItem(item.id)} type="button" />
              </div>
            </CartItem>
          ))}
        </ul>
        <CartInfos>
          <p>Valor total</p>
          <p>{formataPreco(getTotalPrice())}</p>
        </CartInfos>
        <CartButton>Continuar com a entrega</CartButton>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
