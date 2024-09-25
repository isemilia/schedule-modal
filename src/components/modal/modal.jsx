import { createPortal } from 'react-dom'
import {
  StyledBody,
  StyledCloseButton,
  StyledHead,
  StyledModal,
  StyledOverlay,
} from './assets/styles.js'

import closeIcon from '../../assets/icons/close-icon.svg'

const Modal = ({ isOpen, handleClose, children, title }) => {
  if (!isOpen) {
    return null
  }

  return createPortal(
    <StyledOverlay $isOpen={isOpen} onClick={() => handleClose && handleClose()}>
      <StyledModal onClick={(e) => e.stopPropagation()}>
        <StyledHead>
          {title}
          <StyledCloseButton>
            <img onClick={() => handleClose && handleClose()} src={closeIcon} alt={'Закрыть'} />
          </StyledCloseButton>
        </StyledHead>
        <StyledBody>{children}</StyledBody>
      </StyledModal>
    </StyledOverlay>,
    document.querySelector('#modal-root'),
  )
}

export default Modal
