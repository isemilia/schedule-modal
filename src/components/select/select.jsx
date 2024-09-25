import { useEffect, useRef, useState } from 'react'
import {
  StyledOptionItem,
  StyledOptionList,
  StyledPlaceholder,
  StyledSelectBox,
  StyledSelectIcon,
  StyledWrap,
} from './assets/styles.js'

import chevronDown from '../../assets/icons/chevron-down-icon.svg'

const Select = ({ options, placeholder, value, onChange, defaultValue }) => {
  const [selectedOption, setSelectedOption] = useState(
    defaultValue ? options.find((option) => option.value === defaultValue) : null,
  )
  const [isOpen, setOpen] = useState(false)

  const selectRef = useRef(null)

  const handleSelect = (option) => {
    setSelectedOption(option)
    onChange(option.value)
    setOpen(false)
  }

  const handleClickOutside = (event) => {
    if (selectRef.current && !selectRef.current.contains(event.target)) {
      setOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <StyledWrap ref={selectRef}>
      <div>
        <StyledSelectBox onClick={() => setOpen((state) => !state)}>
          {selectedOption ? (
            <span>{selectedOption.label}</span>
          ) : (
            <StyledPlaceholder>{placeholder}</StyledPlaceholder>
          )}
          <StyledSelectIcon $isOpen={isOpen}>
            <img src={chevronDown} alt='Select' />
          </StyledSelectIcon>
        </StyledSelectBox>
        <StyledOptionList $isOpen={isOpen}>
          {options.map((option) => (
            <StyledOptionItem key={option.value} onClick={() => handleSelect(option)}>
              <span>{option.label}</span>
            </StyledOptionItem>
          ))}
        </StyledOptionList>
      </div>

      <select
        style={{ display: 'none' }}
        value={value}
        onChange={(e) =>
          handleSelect(options.find((option) => option.value === Number(e.target.value)))
        }
      >
        <option value='' disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </StyledWrap>
  )
}

export default Select
