import logo from '../../assets/images/logo.svg'
import { HeroContainer, LogoContainer, Title, TitleContainer } from './styles'

const Hero = () => (
  <HeroContainer>
    <LogoContainer>
      <img src={logo} alt="Efood logo" />
    </LogoContainer>

    <TitleContainer>
      <Title>Viva experiências gastronômicas no conforto da sua casa</Title>
    </TitleContainer>
  </HeroContainer>
)

export default Hero
