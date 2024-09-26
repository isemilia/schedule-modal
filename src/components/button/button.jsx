import { StyledButton } from './assets/styles.js'

// variant?: 'primary' | 'secondary'
const Button = ({ children, onClick, variant = 'primary' }) => {
  return (
    <StyledButton onClick={onClick} $variant={variant}>
      {children}
    </StyledButton>
  )
}

export default Button
