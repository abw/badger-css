import React from 'react'
import { Snippet  } from '@abw/badger-website'

const Dropdown = () =>
  <div className="prose flow">
    <h1>Dropdown</h1>
    <p>
      Use the <code>dropdown</code> class to create dropdown content.
      The trigger should either have the <code>trigger</code> CSS class
      or (more correctly) have the <code>aria-haspopup</code> attribute
      set.  The content should have the <code>content</code> class.
    </p>
    <Snippet
      file="dropdown/content.html"
      caption="Dropdown Content"
      output
    />
    <p>
      For dropdown menus you can add the <code>content</code> class to{' '}
      a <code>ul</code> list.  Add the <code>separator</code> class to
      a <code>li</code> element to create a separator.
    </p>
    <Snippet
      file="dropdown/menu1.html"
      caption="Dropdown Menu"
      output
    />
    <p>
      The <code>right</code> class will right-align the dropdown content.
      You can add the <code>caption</code> class to a <code>li</code> element
      to prevent it from being displayed as a hoverable menu item.
    </p>
    <Snippet
      file="dropdown/menu-right.html"
      caption="Right Menu"
      output
    />
  </div>

export default Dropdown