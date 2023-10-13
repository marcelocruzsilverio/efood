import {
  AddButton,
  Description,
  ImageContainer,
  MenuCardWrapper,
  MenuInfoContainer,
  MenuTitle
} from './styles'

type Props = {
  id: number
  image: string
  title: string
  description: string
  onAddToCart: () => void
}

const Menu = ({ image, title, description, onAddToCart }: Props) => {
  return (
    <MenuCardWrapper>
      <ImageContainer>
        <img src={image} alt="Menu image" />
      </ImageContainer>
      <MenuInfoContainer>
        <MenuTitle>
          <h2>{title}</h2>
        </MenuTitle>
        <Description>{description}</Description>
      </MenuInfoContainer>
      <AddButton onClick={onAddToCart}>Adicionar ao Carrinho</AddButton>
    </MenuCardWrapper>
  )
}

export default Menu
