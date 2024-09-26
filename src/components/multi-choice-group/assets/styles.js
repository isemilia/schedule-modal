import styled from 'styled-components'
import { inputBox, inputPadding } from '../../../shared/styles'

export const StyledWrap = styled('div')(() => ({
  ...inputBox,
  padding: 0,
  display: 'grid',
  gridAutoFlow: 'column',
  overflow: 'hidden',
}))

const buttonStyles = {
  display: 'block',
  padding: inputPadding,
  cursor: 'pointer',
  textAlign: 'center',
  textTransform: 'uppercase',
  transition: 'background .3s',
  '&:hover': {
    background: '#e6e6e6',
  },
}

export const StyledCheckbox = styled('label')(() => ({
  ...buttonStyles,
  textTransform: 'uppercase',
  '&:has(input:checked)': {
    background: '#6495ED',
    color: '#fff',
  },
}))

export const StyledButton = styled('button')(() => ({
  ...buttonStyles,
  border: 0,
  background: '#fff',
}))
