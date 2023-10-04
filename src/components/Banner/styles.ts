import styled from 'styled-components'

import italiana from '../../assets/italian.png'

export const BannerContainer = styled.div`
  width: 100%;
  height: 280px;
  margin-bottom: 56px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }

  background-image: url(${italiana});
  background-repeat: no-repeat;
  background-size: cover;

  div.container {
    position: relative; /* Para manter o conteúdo acima da sobreposição */
    z-index: 1; /* Elevar o conteúdo acima da sobreposição */
    color: #fff;
    padding-top: 24px;
    padding-bottom: 32px;

    display: flex;
    justify-content: space-between;
    flex-direction: column;
    flex: 1;

    h3 {
      font-size: 32px;
      font-weight: 100;
    }

    h2 {
      font-size: 32px;
      font-weight: 900;
    }
  }
`
