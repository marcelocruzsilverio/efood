import styled from 'styled-components'
import { colors } from '../../styles'
import { CartButton } from '../Cart/styles'

export const Sidebar = styled.aside`
  background-color: ${colors.salmon};
  color: ${colors.darkBeige};
  z-index: 1;
  padding: 0 8px;
  max-width: 360px;
  width: 100%;
  display: block;

  h2 {
    font-weight: 700;
    font-size: 16px;
    margin-top: 32px;
    margin-bottom: 16px;
  }

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
  }

  .margin-top {
    margin-top: 24px;
  }

  a {
    text-decoration: none;
    color: ${colors.salmon};
    cursor: pointer;
  }

  @media (max-width: 480px) {
    width: 80%;
  }
`

export const Row = styled.div`
  display: flex;
  column-gap: 34px;
`

export const InputGroup = styled.div`
  label {
    display: block;
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 8px;
  }

  input {
    max-width: 100%;
    margin-bottom: 8px;
    background-color: ${colors.darkBeige};
    height: 32px;
    padding: 8px 0 8px 8px;
    border: 1px solid transparent;
    width: 100%;

    &.error {
      border: 1px solid ${colors.darkRed};
      background-color: ${colors.red};
    }
  }

  input#complement,
  input#expireYear {
    margin-bottom: 24px;
  }

  input#cardNumber {
    width: 228px;

    @media (max-width: 480px) {
      width: 200px;
    }
  }
`

export const CheckoutButton = styled(CartButton)`
  margin-bottom: 8px;
`

export const ConclusionButton = styled(CartButton)`
  margin-top: 24px;
`
