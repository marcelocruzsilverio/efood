import logo from '../../assets/images/logo.svg'
import * as S from './styles'

const Hero = () => (
  <S.HeroContainer>
    <S.LogoContainer>
      <img src={logo} alt="Efood logo" />
    </S.LogoContainer>

    <S.TitleContainer>
      <S.Title>Viva experiências gastronômicas no conforto da sua casa</S.Title>
    </S.TitleContainer>
  </S.HeroContainer>
)

export default Hero
