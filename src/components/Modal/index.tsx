import { useDispatch } from 'react-redux'

import { add, open } from '../../store/reducers/cart'

import { parseToBrl } from '../../utils'

import close from '../../assets/images/close 1.png'

import * as S from './styles'

interface MenuModalProps {
  menu: MenuItem
  onClose: () => void // Função para fechar o modal
}

const MenuModal = ({ menu, onClose }: MenuModalProps) => {
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(menu))
    dispatch(open())
    onClose()
  }
  return (
    <>
      <S.ModalWrapper>
        <S.ModalContent>
          <S.CloseModal onClick={onClose}>
            <img src={close} alt="ícone de fechar" />
          </S.CloseModal>
          <S.ImageModalContainer>
            <img src={menu.foto} alt="" />
          </S.ImageModalContainer>
          <div>
            <S.ModalTitle>{menu.nome}</S.ModalTitle>
            <S.DescriptionContainer>
              <S.MenuModalDescription>{menu.descricao}</S.MenuModalDescription>
            </S.DescriptionContainer>
            <S.Portion>Serve {menu.porcao}</S.Portion>
            <S.ModalButton onClick={addToCart}>
              Adicionar ao Carrinho - <span>{parseToBrl(menu.preco)}</span>
            </S.ModalButton>
          </div>
        </S.ModalContent>
        <div className="overlay" onClick={onClose}></div>
      </S.ModalWrapper>
    </>
  )
}

export default MenuModal
