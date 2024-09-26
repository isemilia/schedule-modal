import { useState } from 'react'
import Modal from '../components/modal/index.js'
import ScheduleForm from '../components/schedule-form/index.js'
import Button from '../components/button/index.js'

function App() {
  const [isOpen, setOpen] = useState(false)

  const toggleModal = () => {
    setOpen((state) => !state)
  }

  return (
    <div style={{ display: 'grid', placeContent: 'center', height: '100vh' }}>
      <Button onClick={() => toggleModal()}>Добавить расписание</Button>
      <Modal isOpen={isOpen} handleClose={() => toggleModal()} title={'Редактировать расписание'}>
        <ScheduleForm handleCancel={() => toggleModal()} />
      </Modal>
    </div>
  )
}

export default App
