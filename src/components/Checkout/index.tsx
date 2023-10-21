import { useState } from 'react'
import { useFormik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import * as Yup from 'yup'
import InputMask from 'react-input-mask'
import { RootReducer } from '../../store'

import Card from '../Card'

import { clear, close } from '../../store/reducers/cart'
import { usePurchaseMutation } from '../../services/api'

import { parseToBrl } from '../../utils'

import * as S from './styles'

interface CheckoutProps {
  handleBackToCart: () => void
  getTotalPrice: () => number
}

const Checkout = ({ handleBackToCart, getTotalPrice }: CheckoutProps) => {
  const { items } = useSelector((state: RootReducer) => state.cart)
  const [continuePayment, setContinuePayment] = useState(false)

  const [purchase, { isSuccess, data, isLoading }] = usePurchaseMutation()

  const dispatch = useDispatch()

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
      cep: Yup.string().required('O campo é obrigatório'),
      addressNumber: Yup.string()
        .min(1, 'O campo precisa ter pelo menos 1 caracteres')
        .required('O campo é obrigatório'),
      cardOwnerName: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      cardNumber: Yup.string().required('O campo é obrigatório'),
      cardCode: Yup.string().required('O campo é obrigatório'),
      expireMonth: Yup.string().required('O campo é obrigatório'),
      expireYear: Yup.string().required('O campo é obrigatório')
    }),

    onSubmit: (values) => {
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
        products: items.map((item) => ({
          id: item.id,
          price: item.preco
        }))
      })
    }
  })

  const handleContinuePayment = () => {
    setContinuePayment(true)
  }

  const handleBackToDeliveryForm = () => {
    setContinuePayment(false)
  }

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  const handleConclusion = () => {
    if (isSuccess) {
      dispatch(clear()) // Limpa o carrinho
      dispatch(close()) // Fecha o carrinho
    }
  }

  return (
    <>
      {isSuccess && data ? (
        <Card>
          <S.Sidebar>
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
            <Link to={'/'}>
              <S.ConclusionButton onClick={handleConclusion}>
                Concluir
              </S.ConclusionButton>
            </Link>
          </S.Sidebar>
        </Card>
      ) : (
        <form onSubmit={form.handleSubmit}>
          <Card>
            <S.Sidebar>
              {!continuePayment ? (
                <>
                  <h2>Entrega</h2>
                  <S.InputGroup>
                    <label htmlFor="fullName">Quem irá receber</label>
                    <input
                      id="fullName"
                      type="text"
                      name="fullName"
                      value={form.values.fullName}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInputHasError('fullName') ? 'error' : ''}
                    />
                  </S.InputGroup>
                  <S.InputGroup>
                    <label htmlFor="deliveryAddress">Endereço</label>
                    <input
                      id="deliveryAddress"
                      type="text"
                      name="deliveryAddress"
                      value={form.values.deliveryAddress}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={
                        checkInputHasError('deliveryAddress') ? 'error' : ''
                      }
                    />
                  </S.InputGroup>
                  <S.InputGroup>
                    <label htmlFor="city">Cidade</label>
                    <input
                      id="city"
                      type="text"
                      name="city"
                      value={form.values.city}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInputHasError('city') ? 'error' : ''}
                    />
                  </S.InputGroup>
                  <S.Row>
                    <S.InputGroup>
                      <label htmlFor="cep">CEP</label>
                      <InputMask
                        id="cep"
                        type="text"
                        name="cep"
                        value={form.values.cep}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={checkInputHasError('cep') ? 'error' : ''}
                        mask="99.999-999"
                      />
                    </S.InputGroup>
                    <S.InputGroup>
                      <label htmlFor="addressNumber">Número</label>
                      <input
                        id="addressNumber"
                        type="text"
                        name="addressNumber"
                        value={form.values.addressNumber}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={
                          checkInputHasError('addressNumber') ? 'error' : ''
                        }
                      />
                    </S.InputGroup>
                  </S.Row>
                  <S.InputGroup>
                    <label htmlFor="complement">Complemento (opcional)</label>
                    <input
                      id="complement"
                      type="text"
                      name="complement"
                      value={form.values.complement}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                  </S.InputGroup>

                  <S.CheckoutButton
                    onClick={handleContinuePayment}
                    type="button"
                  >
                    Continuar com o pagamento
                  </S.CheckoutButton>
                  <S.CheckoutButton onClick={handleBackToCart} type="button">
                    Voltar para o carrinho
                  </S.CheckoutButton>
                </>
              ) : (
                <>
                  <h2>
                    Pagamento - Valor a pagar {parseToBrl(getTotalPrice())}
                  </h2>
                  <S.InputGroup>
                    <label htmlFor="cardOwnerName">Nome no cartão</label>
                    <input
                      id="cardOwnerName"
                      type="text"
                      name="cardOwnerName"
                      value={form.values.cardOwnerName}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={
                        checkInputHasError('cardOwnerName') ? 'error' : ''
                      }
                    />
                  </S.InputGroup>
                  <S.Row>
                    <S.InputGroup>
                      <label htmlFor="cardNumber">Número do cartão</label>
                      <InputMask
                        id="cardNumber"
                        type="text"
                        name="cardNumber"
                        value={form.values.cardNumber}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={
                          checkInputHasError('cardNumber') ? 'error' : ''
                        }
                        mask="9999 9999 9999 9999"
                      />
                    </S.InputGroup>
                    <S.InputGroup>
                      <label htmlFor="cardCode">CVV</label>
                      <InputMask
                        id="cardCode"
                        type="text"
                        name="cardCode"
                        value={form.values.cardCode}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={
                          checkInputHasError('cardCode') ? 'error' : ''
                        }
                        mask="999"
                      />
                    </S.InputGroup>
                  </S.Row>
                  <S.Row>
                    <S.InputGroup>
                      <label htmlFor="expireMonth">Mês de Vencimento</label>
                      <InputMask
                        id="expireMonth"
                        type="text"
                        name="expireMonth"
                        value={form.values.expireMonth}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={
                          checkInputHasError('expireMonth') ? 'error' : ''
                        }
                        mask="99"
                      />
                    </S.InputGroup>
                    <S.InputGroup>
                      <label htmlFor="expireYear">Ano de vencimento</label>
                      <InputMask
                        id="expireYear"
                        type="text"
                        name="expireYear"
                        value={form.values.expireYear}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={
                          checkInputHasError('expireYear') ? 'error' : ''
                        }
                        mask="99"
                      />
                    </S.InputGroup>
                  </S.Row>
                  <S.CheckoutButton type="submit" disabled={isLoading}>
                    {isLoading
                      ? 'Finalizando Pagamento...'
                      : 'Finalizar Pagamento'}
                  </S.CheckoutButton>
                  <S.CheckoutButton
                    onClick={handleBackToDeliveryForm}
                    type="button"
                  >
                    Voltar para a edição de endereço
                  </S.CheckoutButton>
                </>
              )}
            </S.Sidebar>
          </Card>
        </form>
      )}
    </>
  )
}

export default Checkout
