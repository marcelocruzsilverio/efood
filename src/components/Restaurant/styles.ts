import styled from 'styled-components'
import { colors } from '../../styles'

export const RestaurantCardWrapper = styled.div`
  max-width: 472px;
  /* height: 398px; */
  position: relative;
  background: ${colors.white};
`

export const ImageContainer = styled.div`
  height: 217px;
`

export const Infos = styled.div`
  position: absolute;
  top: 22px;
  right: 18px;
`

export const RestaurantInfoContainer = styled.div`
  padding: 8px;
  border-right: 1px solid ${colors.salmon};
  border-bottom: 1px solid ${colors.salmon};
  border-left: 1px solid ${colors.salmon};
`

export const RestaurantInfos = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    align-items: center;
  }

  h2 {
    font-size: 18px;
    font-weight: 700;
  }

  span {
    text-align: center;
    font-size: 18px;
    font-weight: 700;
  }

  img {
    margin-left: 8px;
  }
`

export const Description = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  margin: 16px 0;
`

export const MoreInfoButton = styled.button`
  font-size: 14px;
  background-color: ${colors.salmon};
  color: ${colors.Beige};
  padding: 6px 4px;
  text-align: center;
  font-size: 12px;
  font-weight: 700;
  display: inline-block;
  border: none;

  a {
    text-decoration: none;
    color: ${colors.Beige};
    cursor: pointer;
  }
`
