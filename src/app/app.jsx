import { useState } from 'react'
import Modal from '../components/modal/index.js'

function App() {
  const [isOpen, setOpen] = useState(false)

  const toggleModal = () => {
    setOpen((state) => !state)
  }

  return (
    <>
      <button onClick={() => toggleModal()}>Добавить расписание</button>
      <Modal isOpen={isOpen} handleClose={() => toggleModal()} title={'Редактировать расписание'}>
        hello
      </Modal>
    </>
  )
}

export default App
