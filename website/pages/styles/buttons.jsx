import React      from 'react'
import Example    from '../../site/Example.jsx'
import Buttons    from '../../examples/styles/Buttons.jsx'
import ButtonsSrc from '../../examples/styles/Buttons.jsx?raw'

const ButtonsExamples = () =>
  <div>
    <h1>Buttons</h1>
    <Example
      Component={Buttons}
      code={ButtonsSrc}
      caption="Buttons"
      expand
    />
  </div>

export default ButtonsExamples
