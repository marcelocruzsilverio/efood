import { BannerContainer } from './styles'

type BannerProps = {
  restaurantImage: string
  restaurantType: string
  restaurantTitle: string
}

const capitalizeFirstLetter = (text: string) => {
  return text.charAt(0).toUpperCase() + text.slice(1)
}

const Banner = ({
  restaurantImage,
  restaurantType,
  restaurantTitle
}: BannerProps) => (
  <BannerContainer style={{ backgroundImage: `url(${restaurantImage})` }}>
    <div className="container">
      <h3>{capitalizeFirstLetter(restaurantType)}</h3>
      <h2>{restaurantTitle}</h2>
    </div>
  </BannerContainer>
)

export default Banner
