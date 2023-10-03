import japanese from '../../assets/restaurant_japanese.png'
import star from '../../assets/star.png'
import Tag from '../Tag'
import {
  Description,
  ImageContainer,
  Infos,
  MoreInfoButton,
  RestaurantCardWrapper,
  RestaurantInfoContainer,
  RestaurantInfos
} from './styles'

const Restaurant = () => (
  <RestaurantCardWrapper>
    <ImageContainer>
      <img src={japanese} alt="" />
      <Infos>
        <Tag>Destaque</Tag>
        <Tag>Japonesa</Tag>
      </Infos>
    </ImageContainer>
    <RestaurantInfoContainer>
      <RestaurantInfos>
        <h2>Hioki Sushi</h2>
        <div>
          <span>4.9</span>
          <img src={star} alt="avaliação do site" />
        </div>
      </RestaurantInfos>
      <Description>
        Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis
        frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega
        rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão
        sem sair do lar com nosso delivery!
      </Description>
      <MoreInfoButton>
        <a href="#">Saiba Mais</a>
      </MoreInfoButton>
    </RestaurantInfoContainer>
  </RestaurantCardWrapper>
)

export default Restaurant
