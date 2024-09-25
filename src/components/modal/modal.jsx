import { createPortal } from 'react-dom'
import { StyledBody, StyledHead, StyledModal, StyledOverlay } from './assets/styles.js'

const Modal = ({ isOpen, handleClose, children, title }) => {
  if (!isOpen) {
    return null
  }

  return createPortal(
    <StyledOverlay $isOpen={isOpen} onClick={() => handleClose && handleClose()}>
      <StyledModal onClick={(e) => e.stopPropagation()}>
        <StyledHead>
          {title}
          <div onClick={() => handleClose && handleClose()}>X</div>
        </StyledHead>
        <StyledBody>{children}</StyledBody>
      </StyledModal>
    </StyledOverlay>,
    document.querySelector('#modal-root'),
  )
}

export default Modal
