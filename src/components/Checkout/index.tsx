import { useState } from 'react'
import Card from '../Card'
import {
  CheckoutButton,
  ConclusionButton,
  InputGroup,
  Row,
  Sidebar
} from './styles'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { usePurchaseMutation } from '../../services/api'

interface CheckoutProps {
  handleBackToCart: () => void
}

const Checkout = ({ handleBackToCart }: CheckoutProps) => {
  const [continuePayment, setContinuePayment] = useState(false)

  const [purchase, { isSuccess, data }] = usePurchaseMutation()

  const form = useFormik({
    initialValues: {
      fullName: '',
      deliveryAddress: '',
      city: '',
      cep: '',
      addressNumber: '',
      complement: '',
      cardOwnerName: '',
      cardNumber: '',
      cardCode: '',
      expireMonth: '',
      expireYear: ''
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      deliveryAddress: Yup.string()
        .min(3, 'O campo precisa ter pelo menos 3 caracteres')
        .required('O campo é obrigatório'),
      city: Yup.string()
        .min(3, 'O campo precisa ter pelo menos 3 caracteres')
        .required('O campo é obrigatório'),
      cep: Yup.string()
        .min(8, 'O campo precisa ter 8 caracteres')
        .max(8, 'O campo precisa ter 8 caracteres')
        .required('O campo é obrigatório'),
      addressNumber: Yup.string()
        .min(1, 'O campo precisa ter pelo menos 1 caracteres')
        .required('O campo é obrigatório'),
      cardOwnerName: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      cardNumber: Yup.string()
        .min(8, 'O campo precisa ter 8 caracteres')
        .max(8, 'O campo precisa ter 8 caracteres')
        .required('O campo é obrigatório'),
      cardCode: Yup.string()
        .min(3, 'O campo precisa ter 3 caracteres')
        .max(3, 'O campo precisa ter 3 caracteres')
        .required('O campo é obrigatório'),
      expireMonth: Yup.string()
        .min(2, 'O campo precisa ter 2 caracteres')
        .max(2, 'O campo precisa ter 2 caracteres')
        .required('O campo é obrigatório'),
      expireYear: Yup.string()
        .min(4, 'O campo precisa ter 4 caracteres')
        .max(4, 'O campo precisa ter 4 caracteres')
        .required('O campo é obrigatório')
    }),

    onSubmit: (values) => {
      console.log(values)
      purchase({
        delivery: {
          receiver: values.fullName,
          address: {
            description: values.deliveryAddress,
            city: values.city,
            zipCode: values.cep,
            number: Number(values.addressNumber),
            complement: values.complement
          }
        },
        payment: {
          card: {
            name: values.cardOwnerName,
            number: values.cardNumber,
            code: Number(values.cardCode),
            expires: {
              month: Number(values.expireMonth),
              year: Number(values.expireYear)
            }
          }
        },
        products: [
          {
            id: 1,
            price: 10
          }
        ]
      })
    }
  })

  const handleContinuePayment = () => {
    setContinuePayment(true)
  }

  const handleBackToDeliveryForm = () => {
    setContinuePayment(false)
  }

  const getErrorMessage = (fieldName: string, message?: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors

    if (isTouched && isInvalid) return message
    return ''
  }

  return (
    <>
      {isSuccess ? (
        <Card>
          <Sidebar>
            <h2>Pedido realizado - {data.orderId}</h2>
            <p>
              Estamos felizes em informar que seu pedido já está em processo de
              preparação e, em breve, será entregue no endereço fornecido.
            </p>
            <p className="margin-top">
              Gostaríamos de ressaltar que nossos entregadores não estão
              autorizados a realizar cobranças extras.{' '}
            </p>
            <p className="margin-top">
              Lembre-se da importância de higienizar as mãos após o recebimento
              do pedido, garantindo assim sua segurança e bem-estar durante a
              refeição.
            </p>
            <p className="margin-top">
              Esperamos que desfrute de uma deliciosa e agradável experiência
              gastronômica. Bom apetite!
            </p>
            <ConclusionButton>Concluir</ConclusionButton>
          </Sidebar>
        </Card>
      ) : (
        <form onSubmit={form.handleSubmit}>
          <Card>
            <Sidebar>
              {!continuePayment ? (
                <>
                  <h2>Entrega</h2>
                  <InputGroup>
                    <label htmlFor="fullName">Quem irá receber</label>
                    <input
                      id="fullName"
                      type="text"
                      name="fullName"
                      value={form.values.fullName}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                    <small>
                      {getErrorMessage('fullName', form.errors.fullName)}
                    </small>
                  </InputGroup>
                  <InputGroup>
                    <label htmlFor="deliveryAddress">Endereço</label>
                    <input
                      id="deliveryAddress"
                      type="text"
                      name="deliveryAddress"
                      value={form.values.deliveryAddress}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                    <small>
                      {getErrorMessage(
                        'deliveryAddress',
                        form.errors.deliveryAddress
                      )}
                    </small>
                  </InputGroup>
                  <InputGroup>
                    <label htmlFor="city">Cidade</label>
                    <input
                      id="city"
                      type="text"
                      name="city"
                      value={form.values.city}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                    <small>{getErrorMessage('city', form.errors.city)}</small>
                  </InputGroup>
                  <Row>
                    <InputGroup>
                      <label htmlFor="cep">CEP</label>
                      <input
                        id="cep"
                        type="text"
                        name="cep"
                        value={form.values.cep}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      />
                      <small>{getErrorMessage('cep', form.errors.cep)}</small>
                    </InputGroup>
                    <InputGroup>
                      <label htmlFor="addressNumber">Número</label>
                      <input
                        id="addressNumber"
                        type="text"
                        name="addressNumber"
                        value={form.values.addressNumber}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      />
                      <small>
                        {getErrorMessage(
                          'addressNumber',
                          form.errors.addressNumber
                        )}
                      </small>
                    </InputGroup>
                  </Row>
                  <InputGroup>
                    <label htmlFor="complement">Complemento (opcional)</label>
                    <input
                      id="complement"
                      type="text"
                      name="complement"
                      value={form.values.complement}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                  </InputGroup>

                  <CheckoutButton onClick={handleContinuePayment} type="button">
                    Continuar com o pagamento
                  </CheckoutButton>
                  <CheckoutButton onClick={handleBackToCart} type="button">
                    Voltar para o carrinho
                  </CheckoutButton>
                </>
              ) : (
                <>
                  <h2>Pagamento - Valor a pagar R$ 190,00</h2>
                  <InputGroup>
                    <label htmlFor="cardOwnerName">Nome no cartão</label>
                    <input
                      id="cardOwnerName"
                      type="text"
                      name="cardOwnerName"
                      value={form.values.cardOwnerName}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                    <small>
                      {getErrorMessage(
                        'cardOwnerName',
                        form.errors.cardOwnerName
                      )}
                    </small>
                  </InputGroup>
                  <Row>
                    <InputGroup>
                      <label htmlFor="cardNumber">Número do cartão</label>
                      <input
                        id="cardNumber"
                        type="text"
                        name="cardNumber"
                        value={form.values.cardNumber}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      />
                      <small>
                        {getErrorMessage('cardNumber', form.errors.cardNumber)}
                      </small>
                    </InputGroup>
                    <InputGroup>
                      <label htmlFor="cardCode">CVV</label>
                      <input
                        id="cardCode"
                        type="text"
                        name="cardCode"
                        value={form.values.cardCode}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      />
                      <small>
                        {getErrorMessage('cardCode', form.errors.cardCode)}
                      </small>
                    </InputGroup>
                  </Row>
                  <Row>
                    <InputGroup>
                      <label htmlFor="expireMonth">Mês de Vencimento</label>
                      <input
                        id="expireMonth"
                        type="text"
                        name="expireMonth"
                        value={form.values.expireMonth}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      />
                      <small>
                        {getErrorMessage(
                          'expireMonth',
                          form.errors.expireMonth
                        )}
                      </small>
                    </InputGroup>
                    <InputGroup>
                      <label htmlFor="expireYear">Ano de vencimento</label>
                      <input
                        id="expireYear"
                        type="text"
                        name="expireYear"
                        value={form.values.expireYear}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      />
                      <small>
                        {getErrorMessage('expireYear', form.errors.expireYear)}
                      </small>
                    </InputGroup>
                  </Row>
                  <CheckoutButton type="submit">
                    Finalizar Pagamento
                  </CheckoutButton>
                  <CheckoutButton
                    onClick={handleBackToDeliveryForm}
                    type="button"
                  >
                    Voltar para a edição de endereço
                  </CheckoutButton>
                </>
              )}
            </Sidebar>
          </Card>
        </form>
      )}
    </>
  )
}

export default Checkout
