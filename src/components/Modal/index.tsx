import { useDispatch } from 'react-redux'
import close from '../../assets/images/close 1.png'
import { MenuItem } from '../../pages/Home'
import {
  CloseModal,
  DescriptionContainer,
  ImageModalContainer,
  MenuModalDescription,
  ModalButton,
  ModalContent,
  ModalTitle,
  ModalWrapper,
  Portion
} from './styles'

import { add, open } from '../../store/reducers/cart'

interface MenuModalProps {
  menu: MenuItem
  onClose: () => void // Função para fechar o modal
}

export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
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
      <ModalWrapper>
        <ModalContent>
          <CloseModal onClick={onClose}>
            <img src={close} alt="ícone de fechar" />
          </CloseModal>
          <ImageModalContainer>
            <img src={menu.foto} alt="" />
          </ImageModalContainer>
          <div>
            <ModalTitle>{menu.nome}</ModalTitle>
            <DescriptionContainer>
              <MenuModalDescription>{menu.descricao}</MenuModalDescription>
            </DescriptionContainer>
            <Portion>Serve {menu.porcao}</Portion>
            <ModalButton onClick={addToCart}>
              Adicionar ao Carrinho - <span>{formataPreco(menu.preco)}</span>
            </ModalButton>
          </div>
        </ModalContent>
        <div className="overlay" onClick={onClose}></div>
      </ModalWrapper>
    </>
  )
}

export default MenuModal
