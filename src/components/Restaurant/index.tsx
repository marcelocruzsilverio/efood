import { Link } from 'react-router-dom'

import star from '../../assets/images/star.png'
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
  id: number
  image: string
  emphasis?: boolean
  category: string
  title: string
  rate: number
  description: string
}

const Restaurant = ({
  id,
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
        {emphasis && <Tag>Destaque da Semana</Tag>}
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
        <Link to={`/restaurantPage/${id}`}>Saiba Mais</Link>
      </MoreInfoButton>
    </RestaurantInfoContainer>
  </RestaurantCardWrapper>
)

export default Restaurant
