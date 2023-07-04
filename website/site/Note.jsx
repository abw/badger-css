import React from 'react'
import Icon from '../ui/Icon.jsx'

const Note = ({title='Note', children}) =>
  <div className="info alert flex start border smallish">
    <Icon name="info" className="side-icon"/>
    <div>
      <h3>{title}</h3>
      {children}
    </div>
  </div>

export default Note