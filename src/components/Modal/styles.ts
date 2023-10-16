import styled from 'styled-components'
import { colors } from '../../styles'

export const ModalWrapper = styled.div`
  position: fixed;
  top: 240px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }

  @media (max-width: 1024px) {
    max-width: 90%;
  }

  @media (max-width: 768px) {
    max-width: 80%;
  }

  @media (max-width: 480px) {
    top: 100px;
  }
`

export const CloseModal = styled.div`
  position: absolute;
  cursor: pointer;
  top: 8px;
  right: 8px;
  width: 16px;
  height: 16px;
`

export const ModalTitle = styled.h3`
  font-size: 18px;
  font-weight: 900;
`
export const ImageModalContainer = styled.div`
  margin-right: 24px;
  width: 280px;
  height: 280px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 480px) {
    max-width: 280px;
    width: 100%;
    max-height: 280px;
    height: 100%;
    object-fit: cover;
  }
`

export const ModalContent = styled.div`
  margin-top: 32px;
  height: auto;
  background-color: ${colors.salmon};
  color: ${colors.white};
  position: relative;
  padding: 32px;
  display: flex;
  z-index: 1;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`
export const DescriptionContainer = styled.div`
  max-width: 656px;
  max-height: 156px;
  width: 100%;
  height: 100%;
  margin: 16px 0px;
`
export const MenuModalDescription = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;

  @media (max-width: 480px) {
    line-height: 16px;
  }
`

export const Portion = styled.p`
  margin-bottom: 16px;
`

export const ModalButton = styled.button`
  background-color: ${colors.Beige};
  padding: 4px 8px;
  text-align: center;
  font-size: 14px;
  font-weight: 700;
  display: inline-block;
  border: none;
  color: ${colors.salmon};
  cursor: pointer;
`
