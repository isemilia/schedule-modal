import { StyledLabel, StyledMiddle, StyledPeriodBox } from './assets/styles.js'

const PeriodOutput = ({ startLabel = '', endLabel = '' }) => {
  return (
    <StyledPeriodBox>
      <StyledLabel>{startLabel}</StyledLabel>
      <StyledMiddle>
        <span>до</span>
      </StyledMiddle>
      <StyledLabel>{endLabel}</StyledLabel>
    </StyledPeriodBox>
  )
}

export default PeriodOutput
