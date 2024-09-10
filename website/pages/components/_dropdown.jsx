import React   from 'react'
import Content from '@/snippets/dropdown/content.html?raw'
import Menu1   from '@/snippets/dropdown/menu1.html?raw'
import Right   from '@/snippets/dropdown/menu-right.html?raw'
import { Example } from '@abw/badger-website'

const Dropdown = () =>
  <div className="prose flow">
    <h1>Dropdown</h1>
    <p>
      Use the <code>dropdown</code> class to create dropdown content.
      The trigger should either have the <code>trigger</code> CSS class
      or (more correctly) have the <code>aria-haspopup</code> attribute
      set.  The content should have the <code>content</code> class.
    </p>
    <Example
      html={Content}
      language="html"
      caption="Dropdown Content"
    />
    <p>
      For dropdown menus you can add the <code>content</code> class to{' '}
      a <code>ul</code> list.  Add the <code>separator</code> class to
      a <code>li</code> element to create a separator.
    </p>
    <Example
      html={Menu1}
      language="html"
      caption="Dropdown Menu"
    />
    <p>
      The <code>right</code> class will right-align the dropdown content.
      You can add the <code>caption</code> class to a <code>li</code> element
      to prevent it from being displayed as a hoverable menu item.
    </p>
    <Example
      html={Right}
      language="html"
      caption="Right Menu"
    />
  </div>

export default Dropdown