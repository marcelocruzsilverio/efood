import { CartButton, FormContainer, InputGroup, Row, Sidebar } from './styles'

interface PaymentProps {
  onContinuePayment: () => void
  onPayment: () => void
}

const PaymentForm = ({ onContinuePayment, onPayment }: PaymentProps) => {
  const handleBackToDeliveryForm = () => {
    onContinuePayment()
  }

  const handlePayment = () => {
    onPayment()
  }

  return (
    <FormContainer>
      <Sidebar>
        <h2>Pagamento - Valor a pagar R$ 190,00</h2>
        <InputGroup>
          <label htmlFor="cardOwnerName">Nome no cartão</label>
          <input id="cardOwnerName" type="text" />
        </InputGroup>
        <Row>
          <InputGroup>
            <label htmlFor="cardNumber">Número do cartão</label>
            <input id="cardNumber" type="text" />
          </InputGroup>
          <InputGroup>
            <label htmlFor="cardCode">CVV</label>
            <input id="cardCode" type="text" />
          </InputGroup>
        </Row>
        <Row>
          <InputGroup>
            <label htmlFor="expireMonth">Mês de Vencimento</label>
            <input id="expireMonth" type="text" />
          </InputGroup>
          <InputGroup>
            <label htmlFor="expireYear">Ano de vencimento</label>
            <input id="expireYear" type="text" />
          </InputGroup>
        </Row>
        <CartButton onClick={handlePayment}>Finalizar Pagamento</CartButton>
        <CartButton onClick={handleBackToDeliveryForm}>
          Voltar para a edição de endereço
        </CartButton>
      </Sidebar>
    </FormContainer>
  )
}

export default PaymentForm
