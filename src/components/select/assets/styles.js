import styled from 'styled-components'
import { inputBox } from '../../../shared/styles.js'

export const StyledOptionList = styled('ul')(({ $isOpen }) => ({
  position: 'absolute',
  top: '110%',
  left: 0,
  width: '100%',
  border: '1px solid #ccc',
  borderRadius: '4px',
  backgroundColor: '#fff',
  zIndex: 10,
  listStyle: 'none',
  margin: 0,
  padding: 0,
  display: $isOpen ? 'block' : 'none',
  maxHeight: '200px',
  overflow: 'auto',
}))

export const StyledSelectBox = styled('div')(() => ({
  ...inputBox,
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '10px',
}))

export const StyledWrap = styled('div')(() => ({
  position: 'relative',
}))

export const StyledPlaceholder = styled('span')(() => ({
  color: '#000',
}))

export const StyledSelectIcon = styled('span')(({ $isOpen }) => ({
  marginRight: '-4px',
  paddingLeft: '10px',
  borderLeft: '1px solid #ccc',
  height: '100%',
  img: {
    transition: 'transform .3s',
    display: 'block',
    width: '16px',
    height: '16px',
    ...($isOpen ? { transform: 'rotate(180deg)' } : {}),
  },
}))

export const StyledOptionItem = styled('li')(() => ({
  padding: '10px',
  cursor: 'pointer',
  '&:hover': {
    background: '#6495ED',
  },
  span: {
    display: 'block',
    width: '100%',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
}))
