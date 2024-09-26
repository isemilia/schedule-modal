import styled from 'styled-components'
import { inputPadding } from '../../../shared/styles.js'

export const StyledAlertBox = styled('div')(() => ({
  padding: inputPadding,
  borderRadius: '8px',
  background: '#ffd5d5',
}))
