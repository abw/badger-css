import React          from 'react'
import Example        from '@/site/Example.jsx'
import Details        from '@/snippets/details/details.html?raw'
import DetailsBorder  from '@/snippets/details/border.html?raw'
import DetailsLined   from '@/snippets/details/lined.html?raw'
import DetailsShaded  from '@/snippets/details/shaded.html?raw'
import DetailsStyle   from '@/snippets/details/style.html?raw'
import Accordion      from '@/snippets/details/accordion.html?raw'
import Problem        from '@/snippets/details/problem.html?raw'
import Classes        from '@/snippets/details/classes.html?raw'
import Demo           from '@/examples/components/Details.jsx'

const DetailsPage = () =>
  <div className="prose flow">
    <h1>Details</h1>
    <p>
      The <code>details</code> HTML element can be used to create a
      disclosure widget.
    </p>

    <h2>Demo</h2>
    <p>
      Select the options to determine how the details widget is displayed.
    </p>
    <Demo/>

    <h2>Default Style</h2>
    <p>
      The default style will be applied without the need for any special
      CSS classes.  You can add any of the utility classes (e.g. the
      size classes like <code>small</code>, <code>large</code>, etc.) to
      change the basic appearance of either the whole widget, the summary,
      or any of the content elements.
    </p>
    <Example
      html={Details}
      language="html"
      caption="Default Style"
    />

    <h2>Border Style</h2>
    <p>
      Add the <code>border</code> class to add a border.  The usual{' '}
      <code>bdr-N</code> classes can be added to set the border radius{' '}
      and <code>bdw-N</code> to set the border width.
    </p>
    <p>
      The <code>bdc-N</code> classes can be used to set the border color stop,
      and <code>bdd-N</code> classes for the border color stop in dark mode.
    </p>
    <Example
      html={DetailsBorder}
      language="html"
      caption="Details With Borders"
    />

    <h2>Lined Style</h2>
    <p>
      The <code>lined</code> class can be added to put an additional border
      line between the summary header and body content.
    </p>
    <Example
      html={DetailsLined}
      language="html"
      caption="Details With Borders"
    />

    <h2>Shaded Style</h2>
    <p>
      Add the <code>shaded</code> class to shade the background colors.
      You can add any of the color classes to change the color palette.
    </p>
    <Example
      html={DetailsShaded}
      language="html"
      caption="Shaded Details"
    />

    <h2>Custom Styling</h2>
    <p>
      There are a number of CSS variables that you can set to change the
      styling.
    </p>
    <Example
      html={DetailsStyle}
      language="html"
      caption="Custom Styling"
    />

    <h2>Accordion</h2>
    <p>
      You can wrap a number of <code>details</code> elements in a container
      with the <code>accordion</code> class.  This applies some additional
      styling rules to remove redundant lines between successive elements.
      It will also remove any border radii except on the first and last
      elements.
    </p>
    <Example
      html={Accordion}
      language="html"
      caption="Accordion"
    />

    <h2>Layout Issues</h2>
    <p>
      I&apos;ve noticed some strange layout problems.  Content inside the
      details body seems to get confused about how wide 100% is.  I suspect
      (but don&apos;t know for certain at this time) that this is because the
      browser is using a shadow DOM to render the details element.
      The example below shows demonstrates the problem.
      There&apos;s also a <a href="https://codepen.io/abw-the-bashful/pen/jORQNZM">a codepen here</a>{' '}
      which demonstrates it in isolation.
    </p>
    <Example
      html={Problem}
      language="html"
      caption="Layout problems"
    />
    <p>
      To sidestep this problem, there are also CSS classes for applying the
      details styles to other elements so you can build your own details
      widget.  Add the <code>details</code> class to a container
      element and <code>summary</code> to an immediate child element.  The{' '}
      <code>open</code> class should be added to the container to indicate that
      it&apos;s open.
    </p>
    <p>
      Note that the example shown here aren&apos;t interactive so click on
      them won&apos;t have any effect.
    </p>
    <Example
      html={Classes}
      language="html"
      caption="Alternate classes"
    />

  </div>

export default DetailsPage