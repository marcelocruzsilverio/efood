import styled from 'styled-components'
import { colors } from '../../styles'

export const FooterContainer = styled.div`
  height: 298px;
  background-color: ${colors.darkBeige};
  margin-top: 120px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  p {
    margin-bottom: 40px;
    max-width: 480px;
    text-align: center;
    font-size: 10px;
    font-weight: 400;

    @media (max-width: 480px) {
      max-width: 80%;
    }
  }
`

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;

  margin-top: 40px;
`

export const SocialMediaImgContainer = styled.ul`
  display: flex;

  li:nth-child(2) {
    margin: 0 8px;
  }
`
