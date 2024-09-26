import styled from 'styled-components'
import { inputBox, inputPadding } from '../../../shared/styles.js'

export const StyledPeriodBox = styled('div')(() => ({
  ...inputBox,
  padding: 0,
  display: 'flex',
  justifyContent: 'space-between',
}))

export const StyledLabel = styled('div')(() => ({
  padding: inputPadding,
  textAlign: 'center',
  fontSize: '14px',
}))

export const StyledMiddle = styled('div')(() => ({
  padding: inputPadding,
  textAlign: 'center',
  background: '#ccc',
  color: '#fff',
  fontSize: '14px',
}))
