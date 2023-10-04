import styled from 'styled-components'
import { colors } from '../../styles'

export const MenuCardWrapper = styled.div`
  max-width: 320px;
  background: ${colors.salmon};
  padding: 8px;
`

export const ImageContainer = styled.div`
  height: 167px;
`
export const MenuInfoContainer = styled.div`
  padding: 8px;
`

export const MenuTitle = styled.div`
  h2 {
    color: ${colors.Beige};
    font-size: 16px;
    font-weight: 900;
  }
`

export const Description = styled.p`
  color: ${colors.Beige};
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  margin: 8px 0;
`

export const AddButton = styled.button`
  width: 100%;
  font-size: 14px;
  background-color: ${colors.Beige};
  padding-top: 4px;
  padding-bottom: 4px;
  text-align: center;
  font-size: 14px;
  font-weight: 700;
  display: inline-block;
  border: none;

  a {
    text-decoration: none;
    color: ${colors.salmon};
    cursor: pointer;
  }
`
