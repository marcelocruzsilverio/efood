import styled from 'styled-components'
import heroImg from '../../assets/images/hero.png'
import { colors } from '../../styles'

export const HeaderBar = styled.header`
  width: 100%;
  height: 186px;
  background-image: url(${heroImg});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
`
export const LinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`
export const LinkRestaurant = styled.div`
  margin-right: 80px;
  text-align: center;
  font-size: 18px;
  font-weight: 900;

  a {
    text-decoration: none;
    color: ${colors.salmon};
  }
`

export const CartContainer = styled.div`
  text-align: center;
  font-size: 18px;
  font-weight: 900;
`
