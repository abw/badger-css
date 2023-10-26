import React, { useState } from 'react'
import Modal from './Modal.jsx'

const Dialog = () => {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)
  return (
    <div className="output">
      <button
        onClick={() => setOpen(true)}
        className="blue"
      >
        Show Dialog
      </button>
      <Modal
        open={open}
        close={close}
      >
        <h1>Hello World!</h1>
        <p>
          This is a dialog.
        </p>
      </Modal>
    </div>
  )
}

export default Dialog