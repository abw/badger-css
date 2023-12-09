import React   from 'react'
import Example from '@/site/Example.jsx'
import Menu    from '@/snippets/menu/menu.html?raw'
import Lined   from '@/snippets/menu/lined.html?raw'
import Border  from '@/snippets/menu/border.html?raw'
import Radius  from '@/snippets/menu/radius.html?raw'
import Link from '@/ui/Link.jsx'

const MenuExamples = () =>
  <div className="prose flow">
    <h1>Menu</h1>
    <p>
      To render a simple vertical menu, add the <code>menu</code> class
      to a container and <code>item</code> to each child item.
    </p>
    <Example
      html={Menu}
      language="html"
      caption="Menu"
    />

    <h2>Lined Style</h2>
    <p>
      The <code>lined</code> class can be added to put a line between each
      item.
    </p>
    <Example
      html={Lined}
      language="html"
      caption="Lined"
    />

    <h2>Border Style</h2>
    <p>
      The <code>border</code> class can be added to put a border around the
      menu and lines between each item.
    </p>
    <Example
      html={Border}
      language="html"
      caption="Border"
    />

    <p>
      You can add any of the other{' '}
      <Link to="/utilities/borders" text="border utility classes"/> to control
      the border width, radius, color, etc.
    </p>
    <Example
      html={Radius}
      language="html"
      caption="Border Style"
    />

  </div>

export default MenuExamples