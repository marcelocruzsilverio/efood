import * as S from './styles'

type Props = {
  id: number
  image: string
  title: string
  description: string
  onAddToCart: () => void
}

const Menu = ({ image, title, description, onAddToCart }: Props) => {
  return (
    <S.MenuCardWrapper>
      <S.ImageContainer>
        <img src={image} alt="Menu image" />
      </S.ImageContainer>
      <S.MenuInfoContainer>
        <S.MenuTitle>
          <h2>{title}</h2>
        </S.MenuTitle>
        <S.Description>{description}</S.Description>
      </S.MenuInfoContainer>
      <S.AddButton onClick={onAddToCart}>Adicionar ao Carrinho</S.AddButton>
    </S.MenuCardWrapper>
  )
}

export default Menu
