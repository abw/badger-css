import React  from 'react'
import Styles from '@/snippets/styles/styles.html?raw'
import { Example } from '@abw/badger-website'

const FontStyles = () =>
  <div className="prose flow">
    <h1>Font Styles</h1>
    <p>
      The following classes are defined for common font styles.
    </p>
    <Example
      html={Styles}
      caption="Font Styles"
      expand
    />
  </div>

export default FontStyles