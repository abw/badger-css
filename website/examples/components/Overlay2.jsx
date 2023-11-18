import React, { useState } from 'react'

const Overlay = ({ className, title='Show Overlay' }) => {
  const [visible, setVisible] = useState(false)
  const show = () => setVisible(true)
  const hide = () => setVisible(false)

  return visible
    ? <div className={`overlay fixed flex center middle ${className}`}>
        <div className="max-width-40rem">
          <p className="larger">
            Maybe we just fix the choreography.
            Keep the dwarf clear. So they won&apos;t
            trod upon it.
          </p>
          <button onClick={hide} className="red">
            Hide Overlay
          </button>
        </div>
      </div>
    : <div>
        <button onClick={show} className="green">
          {title}
        </button>
      </div>
}

export default Overlay