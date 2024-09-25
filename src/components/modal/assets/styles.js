import styled from 'styled-components'

export const modalPadding = '12px 16px'

export const StyledOverlay = styled('div')(({ $isOpen }) => ({
  width: '100vw',
  height: '100vh',
  background: 'rgba(0, 0, 0, .2)',
  position: 'absolute',
  left: 0,
  top: 0,
  display: 'grid',
  placeContent: 'center',
}))

export const StyledModal = styled('div')(() => ({
  width: '500px',
  background: '#FFF',
  borderRadius: '8px',
}))

export const StyledHead = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: modalPadding,
  borderBottom: '1px solid #e6e6e6',
}))

export const StyledBody = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: modalPadding,
}))
