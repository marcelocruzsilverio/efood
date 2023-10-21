import { Link } from 'react-router-dom'

import star from '../../assets/images/star.png'
import Tag from '../Tag'

import * as S from './styles'

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
  <S.RestaurantCardWrapper>
    <Link
      title="Clique aqui para ver mais detalhes sobre o restaurante"
      to={`/restaurantPage/${id}`}
    >
      <S.ImageContainer>
        <img src={image} alt="" />
        <S.Infos>
          {emphasis && <Tag>Destaque da Semana</Tag>}
          <Tag>{category}</Tag>
        </S.Infos>
      </S.ImageContainer>
      <S.RestaurantInfoContainer>
        <S.RestaurantInfos>
          <h2>{title}</h2>
          <div>
            <span>{rate}</span>
            <img src={star} alt="avaliação do site" />
          </div>
        </S.RestaurantInfos>
        <S.Description>{description}</S.Description>
        <S.MoreInfoButton>
          <Link
            title="Clique aqui para ver mais detalhes sobre o restaurante"
            to={`/restaurantPage/${id}`}
          >
            Saiba Mais
          </Link>
        </S.MoreInfoButton>
      </S.RestaurantInfoContainer>
    </Link>
  </S.RestaurantCardWrapper>
)

export default Restaurant
