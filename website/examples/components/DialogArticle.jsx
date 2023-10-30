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
        Show Dialog Article
      </button>
      <Modal
        open={open}
        // close={close}
      >
        <article>
          <header>
            <h3>User Login</h3>
          </header>
          <form className="width-20rem">
            <div className="field wide">
              <label>Email Address</label>
              <input name="email" className="wide"/>
            </div>
            <div className="field mar-b-8">
              <label>Password</label>
              <input name="password" type="password" className="wide"/>
            </div>
          </form>
          <footer className="text-right">
            <button className="grey outline" onClick={close}>
              Cancel
            </button>
            <button className="blue mar-l-4" onClick={close}>
              Login
            </button>
          </footer>
        </article>
      </Modal>
    </div>
  )
}

export default Dialog