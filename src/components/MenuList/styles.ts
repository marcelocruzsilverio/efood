import styled from 'styled-components'

export const MenuCardList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`
