import { Container, Overlay } from './styles'

type Props = {
  children: JSX.Element
}

const Card = ({ children }: Props) => (
  <Container>
    <Overlay></Overlay>
    {children}
  </Container>
)

export default Card
