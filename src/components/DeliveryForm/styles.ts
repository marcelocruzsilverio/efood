import styled from 'styled-components'
import { colors } from '../../styles'

export const FormContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.8;
`
export const Sidebar = styled.aside`
  background-color: ${colors.salmon};
  color: ${colors.darkBeige};
  z-index: 1;
  padding: 32px 8px 0 8px;
  max-width: 360px;
  width: 100%;
  display: block;

  h2 {
    font-weight: 700;
    font-size: 18px;
    line-height: 19px;
    margin-bottom: 16px;
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
    line-height: 16px;
    margin-bottom: 8px;
  }

  input {
    margin-bottom: 8px;
    background-color: ${colors.darkBeige};
    height: 32px;
    padding: 8px 0 8px 8px;
    border: 1px solid ${colors.darkBeige};
    width: 100%;
  }

  input#complement {
    margin-bottom: 24px;
  }
`

export const CartButton = styled.button`
  background-color: ${colors.darkBeige};
  margin-bottom: 8px;
  max-width: 100%;
  width: 100%;
  padding: 4px 0px;
  text-align: center;
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
  display: inline-block;
  border: none;
  color: ${colors.salmon};
  cursor: pointer;
`
