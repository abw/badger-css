import React    from 'react'
import Example  from '@/site/Example.jsx'
import Menu     from '@/snippets/menu/menu.html?raw'
import Lined    from '@/snippets/menu/lined.html?raw'
import Border   from '@/snippets/menu/border.html?raw'
import Color    from '@/snippets/menu/color.html?raw'
import Radius   from '@/snippets/menu/radius.html?raw'
import Disabled from '@/snippets/menu/disabled.html?raw'
import NoHover  from '@/snippets/menu/no-hover.html?raw'
import Active   from '@/snippets/menu/active.html?raw'
import { BorderLink } from '@/site/Links.jsx'

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
      You can add any of the other <BorderLink/> utility classes to control
      the border width, radius, color, etc.
    </p>
    <Example
      html={Radius}
      language="html"
      caption="Border Style"
    />

    <h2>Colors</h2>
    <p>
      Note that the hover/active color is set on child elements to prevent
      colored text becoming unreadable when an item is active.  Inverse colors,
      buttons and badges will have their backgrounds set to a pale variant
      of the background color.
    </p>
    <Example
      html={Color}
      language="html"
      caption="Colors"
    />

    <h2>Disabled Items</h2>
    <p>
      You can add the <code>disabled</code> CSS class or set the{' '}
      <code>aria-disabled</code> attribute to <code>true</code> to disable
      an option in the menu.
    </p>
    <Example
      html={Disabled}
      language="html"
      caption="Disabled Items"
    />

    <h2>No Hover Items</h2>
    <p>
      You can add the <code>no-hover</code> CSS class if you want to disable
      the styling for hovered items.
    </p>
    <Example
      html={NoHover}
      language="html"
      caption="No Hover Items"
    />

    <h2>Active Item</h2>
    <p>
      You can add the <code>active</code> CSS class to indicate an active
      item.  This would typically be used in conjunction with{' '}
      <code>no-hover</code> when you&apos;re implementing a UI component
      where the active element is determine by other means (e.g. mouseEnter
      events, keyboard control, etc).
    </p>
    <Example
      html={Active}
      language="html"
      caption="Active Item"
    />

    <h2>Styling</h2>
    <p>
      The <code>$selectable-color</code> SASS variable can be used to set
      the color range used to indicate selectable items.  The default value
      is <code>&quot;brand&quot;</code>
    </p>
    <p>
      You can also set the <code>--selectable-color</code> and{' '}
      <code>--selectable-background</code> CSS custom properties to change
      the foreground and background colors respectively.  The default value
      for <code>--selectable-color</code> is <code>var(--brand-100)</code>{' '}
      and for <code>--selectable-background</code> is <code>var(--brand-50)</code> when
      using a light theme and <code>var(--brand-40)</code> for the dark
      theme.
    </p>
  </div>

export default MenuExamples