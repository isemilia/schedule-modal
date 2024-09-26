import {
  StyledButton,
  StyledDisplay,
  StyledLabel,
  StyledSide,
  StyledWrap,
} from './assets/styles.js'

import minusIcon from '../../assets/icons/minus-icon.png'
import plusIcon from '../../assets/icons/plus-icon.png'
import { useEffect, useState } from 'react'

const Counter = ({ defaultValue = 0, value, onChange }) => {
  const [count, setCount] = useState(defaultValue)

  const increaseCount = () => {
    setCount((state) => ++state)
  }

  const decreaseCount = () => {
    setCount((state) => --state)
  }

  useEffect(() => {
    if (value !== undefined) {
      setCount(value)
    }
  }, [value])

  useEffect(() => {
    onChange && onChange({ target: { value: count } })
  }, [count])

  return (
    <StyledWrap>
      <StyledButton
        type={'button'}
        onClick={() => {
          decreaseCount()
        }}
      >
        <img src={minusIcon} alt='-' />
      </StyledButton>

      <StyledDisplay>
        {count}
        <input type='text' style={{ display: 'none' }} disabled value={count} />
      </StyledDisplay>

      <StyledSide>
        <StyledLabel>Всего часов</StyledLabel>
        <StyledButton
          type={'button'}
          onClick={() => {
            increaseCount()
          }}
        >
          <img src={plusIcon} alt='+' />
        </StyledButton>
      </StyledSide>
    </StyledWrap>
  )
}

export default Counter
