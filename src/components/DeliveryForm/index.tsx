import { useDispatch } from 'react-redux'
import { open } from '../../store/reducers/cart'
import {
  CartButton,
  FormContainer,
  InputGroup,
  Overlay,
  Row,
  Sidebar
} from './styles'

interface DeliveryProps {
  onContinueDelivery: () => void
  onContinuePayment: () => void
}

const DeliveryForm = ({
  onContinueDelivery,
  onContinuePayment
}: DeliveryProps) => {
  const dispatch = useDispatch()

  const handleBackToCart = () => {
    onContinueDelivery()
    dispatch(open())
  }

  const handleContinuePayment = () => {
    onContinuePayment()
  }

  return (
    <FormContainer>
      <Overlay></Overlay>
      <Sidebar>
        <h2>Entrega</h2>
        <InputGroup>
          <label htmlFor="fullName">Quem irá receber</label>
          <input id="fullName" type="text" />
        </InputGroup>
        <InputGroup>
          <label htmlFor="address">Endereço</label>
          <input id="address" type="text" />
        </InputGroup>
        <InputGroup>
          <label htmlFor="city">Cidade</label>
          <input id="city" type="text" />
        </InputGroup>
        <Row>
          <InputGroup>
            <label htmlFor="cep">CEP</label>
            <input id="cep" type="text" />
          </InputGroup>
          <InputGroup>
            <label htmlFor="number">Número</label>
            <input id="number" type="text" />
          </InputGroup>
        </Row>
        <InputGroup>
          <label htmlFor="complement">Complemento (opcional)</label>
          <input id="complement" type="text" />
        </InputGroup>

        <CartButton onClick={handleContinuePayment}>
          Continuar com o pagamento
        </CartButton>
        <CartButton onClick={handleBackToCart}>
          Voltar para o carrinho
        </CartButton>
      </Sidebar>
    </FormContainer>
  )
}

export default DeliveryForm
