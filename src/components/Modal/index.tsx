import { CloseButton, Header, Line, Message, ModalContainer, Overlay, Title } from "./styled"

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  message: string
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, message }) => {
  if (!isOpen) return null

  return (
    <Overlay onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <Header>
          <Title>Ocorreu um erro</Title>
          <CloseButton onClick={onClose}>×</CloseButton>
        </Header>
        <Line />
        <Message>{message}</Message>
      </ModalContainer>
    </Overlay>
  )
}

export default Modal
