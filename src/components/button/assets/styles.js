import styled from 'styled-components'

export const StyledButton = styled('button')(({ $variant }) => ({
  padding: '10px 16px',
  border: 0,
  textAlign: 'center',
  background: 'transparent',
  cursor: 'pointer',
  borderRadius: '8px',
  transition: 'all .3s',
  '&:hover': {
    background: '#e6e6e6',
  },
  ...($variant === 'primary'
    ? {
        border: '1px solid #ccc',
        '&:hover': {
          borderColor: 'transparent',
          color: '#fff',
          background: '#6495ED',
        },
      }
    : {}),
}))
