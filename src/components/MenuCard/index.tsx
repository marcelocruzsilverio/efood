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
}

const Menu = ({ image, title, description }: Props) => {
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
      <AddButton>
        <a href="#">Adicionar ao Carrinho</a>
      </AddButton>
    </MenuCardWrapper>
  )
}

export default Menu
