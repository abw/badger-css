import React from 'react'
import Icon from '../../ui/Icon.jsx'

const Swatch = ({
  color, selected, select,
  iconColor='white',
  className='',
  alt=<>&nbsp;</>
}) =>
  <button
    className={`${className} ${color} icon ${selected ? 'focus' : ''}`}
    onClick={select}
  >
    { selected
      ? <Icon name="check" className={iconColor}/>
      : alt
    }
  </button>


export default Swatch

