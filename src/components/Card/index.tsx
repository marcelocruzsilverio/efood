import * as S from './styles'

type Props = {
  children: JSX.Element
}

const Card = ({ children }: Props) => (
  <S.Container>
    <S.Overlay></S.Overlay>
    {children}
  </S.Container>
)

export default Card
