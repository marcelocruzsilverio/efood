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

type Props = {
  image: string
  emphasis?: string
  category: string
  title: string
  rate: string
  description: string
}

const Restaurant = ({
  image,
  emphasis,
  category,
  title,
  rate,
  description
}: Props) => (
  <RestaurantCardWrapper>
    <ImageContainer>
      <img src={image} alt="" />
      <Infos>
        {emphasis && <Tag>{emphasis}</Tag>}
        <Tag>{category}</Tag>
      </Infos>
    </ImageContainer>
    <RestaurantInfoContainer>
      <RestaurantInfos>
        <h2>{title}</h2>
        <div>
          <span>{rate}</span>
          <img src={star} alt="avaliação do site" />
        </div>
      </RestaurantInfos>
      <Description>{description}</Description>
      <MoreInfoButton>
        <a href="#">Saiba Mais</a>
      </MoreInfoButton>
    </RestaurantInfoContainer>
  </RestaurantCardWrapper>
)

export default Restaurant
