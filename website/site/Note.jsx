import React from 'react'
import { Info } from '@abw/badger-react-ui'

const Note = ({
  title='Note',
  children,
  className
}) =>
  <Info icon="info" title={title} className={className} border>
    {children}
  </Info>

export default Note