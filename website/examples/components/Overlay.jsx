import React, { useState } from 'react'

const Overlay = () => {
  const [visible, setVisible] = useState(false)
  const show = () => setVisible(true)
  const hide = () => setVisible(false)

  return visible
    ? <div className="overlay fixed flex center middle">
        <div className="max-width-40rem">
          <p className="larger">
            I do not, for one, think that the problem was that the
            band was down. I think that the problem may have been...
            that there was a Stonehenge monument on the stage that
            was in danger of being crushed by a dwarf. Alright? That
            tended to understate the hugeness of the object.
          </p>
          <button onClick={hide} className="red">
            Hide Overlay
          </button>
        </div>
      </div>
    : <div>
        <button onClick={show} className="green">
          Show Overlay
        </button>
      </div>
}

export default Overlay