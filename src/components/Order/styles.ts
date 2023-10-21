import styled from 'styled-components'
import { colors } from '../../styles'

import bin from '../../assets/images/lixeira-de-reciclagem.png'

export const CartContainer = styled.div`
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

  @media (max-width: 480px) {
    width: 80%;
  }
`

export const CartItem = styled.li`
  background-color: ${colors.darkBeige};
  padding: 8px 0 12px 8px;
  margin-bottom: 16px;
  position: relative;
  display: flex;

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
  }

  div {
    display: flex;
    flex-direction: column;
    margin-left: 8px;

    button {
      background-image: url(${bin});
      height: 16px;
      width: 16px;
      border: none;
      background-color: transparent;
      cursor: pointer;
      position: absolute;
      bottom: 8px;
      right: 8px;
    }

    h2 {
      margin-bottom: 16px;
      font-weight: 900;
      font-size: 18px;
      line-height: 22px;
    }

    p {
      font-weight: 400;
      font-size: 14px;
      line-height: 22px;
    }
  }
`

export const CartInfos = styled.div`
  color: ${colors.Beige};
  margin-top: 40px;
  margin-bottom: 16px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
  }
`

export const CartButton = styled.button`
  background-color: ${colors.darkBeige};
  margin-bottom: 16px;
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
