import styled from 'styled-components'
import { inputBox, inputPadding } from '../../../shared/styles'

export const StyledWrap = styled('div')(() => ({
  ...inputBox,
  padding: 0,
  display: 'flex',
  justifyContent: 'space-between',
}))

export const StyledButton = styled('button')(() => ({
  padding: inputPadding,
  border: 0,
  cursor: 'pointer',
  background: '#6495ED',
  img: {
    width: '16px',
    height: '16px',
  },
}))

export const StyledSide = styled('div')(() => ({
  display: 'flex',
}))

export const StyledLabel = styled('div')(() => ({
  maxWidth: '40px',
  padding: '0px 5px',
  fontSize: '12px',
  lineHeight: 1,
  display: 'grid',
  placeContent: 'center',
  textAlign: 'center',
  borderLeft: '1px solid #ccc',
}))

export const StyledDisplay = styled('div')(() => ({
  padding: inputPadding,
  display: 'grid',
  placeContent: 'center',
  minWidth: '40px',
  maxWidth: '50px',
}))
