import styled from 'styled-components'
import heroImg from '../../assets/images/hero.png'

export const HeroContainer = styled.div`
  width: 100%;
  height: 384px;
  background-image: url(${heroImg});
  background-repeat: no-repeat;
  background-size: cover;
  margin-bottom: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

export const LogoContainer = styled.div`
  margin-top: 64px;
`

export const TitleContainer = styled.div`
  margin-bottom: 40px;
`

export const Title = styled.h1`
  text-align: center;
  font-size: 36px;
  font-weight: 900;
  max-width: 539px;
`
