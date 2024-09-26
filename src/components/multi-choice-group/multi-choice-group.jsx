import { StyledButton, StyledCheckbox, StyledWrap } from './assets/styles.js'
import { useEffect, useState } from 'react'

// interface IMissTypeScript {
//   group: {value: number, label: string}[],
//   buttons: {label: string, name: string, onClick: (args: any) => void},
//   onChange?: (e: React.ChangeEvent) => void
//   defaultValue?: number[]
//   value?: number[]
// }

const MultiChoiceGroup = ({ options = [], buttons, onChange, defaultValue = [], value }) => {
  const [selectedOptions, setSelectedOptions] = useState(defaultValue)

  useEffect(() => {
    onChange && onChange({ target: { value: selectedOptions } })
  }, [selectedOptions])

  useEffect(() => {
    if (value !== null && value !== undefined) {
      setSelectedOptions(value)
    }
  }, [value])

  const changeValue = (value) => {
    setSelectedOptions(value)
  }

  return (
    <StyledWrap>
      {buttons.map((button) => (
        <StyledButton
          key={button.name}
          onClick={() => {
            button.onClick({ name: button.name, label: button.label, changeValue })
          }}
          type={'button'}
        >
          {button.label}
        </StyledButton>
      ))}
      {options.map((option) => (
        <StyledCheckbox key={option.value}>
          {option.label}
          <input
            onChange={(e) => {
              const currentValue = +e.target.value
              if (e.target.checked) {
                setSelectedOptions((state) => [...state, currentValue])
              } else {
                setSelectedOptions((state) => state.filter((value) => value !== currentValue))
              }
            }}
            checked={
              selectedOptions.findIndex((selectedOption) => {
                return selectedOption === option.value
              }) !== -1
            }
            type='checkbox'
            value={option.value}
            style={{ display: 'none' }}
          />
        </StyledCheckbox>
      ))}
    </StyledWrap>
  )
}

export default MultiChoiceGroup
