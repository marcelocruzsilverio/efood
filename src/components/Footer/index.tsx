import logo from '../../assets/images/logo.svg'
import instagran from '../../assets/images/instagram.png'
import facebook from '../../assets/images/facebook.png'
import twitter from '../../assets/images/twitter.png'
import {
  FooterContainer,
  LogoContainer,
  SocialMediaImgContainer
} from './styles'

const Footer = () => (
  <div>
    <FooterContainer>
      <LogoContainer>
        <img src={logo} alt="Efood logo" />
        <SocialMediaImgContainer>
          <li>
            <img src={instagran} alt="Logo instagram" />
          </li>
          <li>
            <img src={facebook} alt="Logo instagram" />
          </li>
          <li>
            <img src={twitter} alt="Logo instagram" />
          </li>
        </SocialMediaImgContainer>
      </LogoContainer>
      <p>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.{' '}
      </p>
    </FooterContainer>
  </div>
)

export default Footer
