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
