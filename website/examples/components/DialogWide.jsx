/* eslint-disable react/no-unescaped-entities */
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
        Show Wide Dialog
      </button>
      <Modal
        open={open}
        close={close}
      >
        <h1>Wide Dialog</h1>
        <p>
          David. David. David. Wait, please, wait a minute. Have you any idea what it
          will costs to dress up the band as animals? Oh, it don't cost nothing. It
          really doesn't. They're not animals, they're signs of the zodiac. They're
          animals. It's a way to fight the drabs. You know we've got the drabs. Well
          that's true. I think mine would look good - better in dubly. If it was done
          in dubly.
        </p>
        <p>
          May I make a suggestion? May I make a suggestion? I've got one other
          suggestion. Well let's hear yours. Let's hear your suggestion. Stonehenge!
          Stonehenge. It's the best production value we've ever had on stage. But we
          haven't got the equipment. We haven't got the equipment, we haven't got
          Stonehenge, we haven't... Not yet we don't. Let's start... Please, please
          just a moment. Musically, musically we all know it. Musically we all know it.
          Right? No problems musically. We go right on stage. And it's quite simple.
          This is you know... Ian can take care of this... I know what the Stonehenge
          monument looks like. We don't have that piece of scenery anymore. I know, so
          we build a new one. And this is it, look! Consider... consider it done. So
          you're just going to take care of it like that. You're going to find someone
          to design it... using that as a plan? Let's try. Let's try. If you can do it,
          I'll do the number.
        </p>
        <p>
          This looks actually perfect. I mean it's, uh, the right proportions. It'll be
          this color right? Yeah. That's... that's... that's just terrific. It almost
          looks like the real thing. When we get the actual, uh, set, when we get the
          piece, it'll... it'll follow exactly these specifications. I mean even these
          contours and everything? Um, I'm not understanding it. What do you mean "the
          actual piece?" Well I mean... I mean when you build the actual piece... But
          this is what you asked for, isn't it? What? Well this is the piece. This is
          the piece? Yes. Are you telling me that this is it? This is scenery? Have you
          ever been to Stonehenge? No, I haven't been to Stonehenge. The triptychs
          are... the triptychs are twenty feet high. You can stand four men up them!
          Ian, I was... I was... I was supposed to build it eighteen inches high. This
          is insane. This isn't a piece of scenery. Look, look. Look, this is what I
          was asked to build. Eighteen inches. Right here, it specified eighteen
          inches. I was given this napkin, I mean... Forget this! Fuck the napkin!!!
        </p>

        <p>
          I do not, for one, think that the problem was that the band was down. I think
          that the problem may have been...that there was a Stonehenge monument on the
          stage that was in danger of being crushed by a dwarf. Alright? That tended to
          understate the hugeness of the object. I really think you're just making a
          much too big thing out of it. Making a big thing out of it would've been a
          good idea. Nigel gave me a drawing that said eighteen inches. Alright? I know
          he did, and that's what I'm talking about. Now, whether he knows the
          difference between feet and inches is not my problem. I do what I'm told. But
          you're not as confused as him are you? I mean it's not your job to be as
          confused as Nigel is.
        </p>
        <p>
          It's my job to do what I'm asked to do by the creative element of this band.
          And that's what I did. C'mon... The audience were laughing. So it became a
          comedy number. Yes it did! Yes it fucking well did, and it was not pleasant
          to be part of the comedy on stage. Backstage, perhaps, it was very amusing.
        </p>
        <p>
          Maybe we just fix the choreography. Keep the dwarf clear. What do you mean?
          So they won't trod upon it.
        </p>
      </Modal>
    </div>
  )
}

export default Dialog