import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'

import { RootReducer } from '../../store'
import { open, close, remove } from '../../store/reducers/cart'

import { parseToBrl } from '../../utils'

import Checkout from '../Checkout'

import * as S from './styles'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const [continueDelivery, setContinueDelivery] = useState(false)

  const handleDelivery = () => {
    setContinueDelivery(true)
    dispatch(close())
  }

  const handleBackToCart = () => {
    setContinueDelivery(false)
    dispatch(open())
  }

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
    <>
      <S.CartContainer className={isOpen ? 'is-open' : ''}>
        <S.Overlay onClick={closeCart}></S.Overlay>
        <S.Sidebar>
          <ul>
            {items.map((item) => (
              <S.CartItem key={item.id}>
                <img src={item.foto} alt="" />

                <div>
                  <h2>{item.nome}</h2>
                  <p>{parseToBrl(item.preco)}</p>
                  <button onClick={() => removeItem(item.id)} type="button" />
                </div>
              </S.CartItem>
            ))}
          </ul>
          <S.CartInfos>
            <p>Valor total</p>
            <p>{parseToBrl(getTotalPrice())}</p>
          </S.CartInfos>
          <S.CartButton onClick={handleDelivery}>
            Continuar com a entrega
          </S.CartButton>
        </S.Sidebar>
      </S.CartContainer>
      {continueDelivery && (
        <Checkout
          handleBackToCart={handleBackToCart}
          getTotalPrice={getTotalPrice}
        />
      )}
    </>
  )
}

export default Cart
