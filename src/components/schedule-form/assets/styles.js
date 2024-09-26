import styled from 'styled-components'

export const StyledForm = styled('form')(() => ({}))

export const StyledFormContent = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  rowGap: '16px',
}))

export const StyledFormRow = styled('div')(({ $columns = 1 }) => ({
  display: 'grid',
  gridTemplateColumns: `repeat(${$columns}, 1fr)`,
  columnGap: '20px',
}))

export const StyledFormFooter = styled('div')(() => ({
  borderTop: '1px solid #e6e6e6',
  padding: '10px 16px 0',
  margin: '16px -16px 0',
  display: 'flex',
  justifyContent: 'flex-end',
  gap: '16px',
}))
