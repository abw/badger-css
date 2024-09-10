import React       from 'react'
import Alert       from '@/snippets/alert/alert.html?raw'
import AlertBorder from '@/snippets/alert/border.html?raw'
import AlertHeads  from '@/snippets/alert/heads.html?raw'
import Headlines   from '@/snippets/alert/headlines.html?raw'
import AlertStripe from '@/snippets/alert/stripe.html?raw'
import Demo        from '@/examples/components/Alert.jsx'
import { Example } from '@abw/badger-website'
import { ShadowLink } from '@/site/Links.jsx'

const Alerts = () =>
  <div className="prose flow">
    <h1>Alerts</h1>
    <p>
      The <code>alert</code> class can be used to display alerts.
      Add any of the <code>info</code>, <code>success</code>,{' '}
      <code>warning</code> or <code>error</code> classes to set the
      color.
    </p>

    <h2>Demo</h2>
    <p>
      Select the options to determine how the alert is displayed.
      Note that some options are mutually exclusive (e.g. stripe and border).
    </p>
    <Demo/>

    <h2>Default Alerts</h2>
    <Example
      html={Alert}
      language="html"
      caption="Alerts"
    />

    <h2>Alerts With Borders</h2>
    <p>
      Add the <code>border</code> class to add a border.
    </p>
    <Example
      html={AlertBorder}
      language="html"
      caption="Added Borders"
    />

    <h2>Alert Headings</h2>
    <p>
      Headings are displayed in a slightly darker color than the body text.
    </p>
    <Example
      html={AlertHeads}
      language="html"
      caption="Alert Headings"
    />

    <h2>Alert Headlines</h2>
    <p>
      Add an element with the <code>headline</code> class to really make it
      stand out.  This works well with and without borders.  Throw in a{' '}
      <ShadowLink/> if you want to make it really pop.
    </p>
    <Example
      html={Headlines}
      language="html"
      caption="Alert Headlines"
    />

    <h2>Stripe Alerts</h2>
    <p>
      For a more subdued look, try adding the <code>stripe</code> class.
    </p>
    <Example
      html={AlertStripe}
      language="html"
      caption="Stripe Alert"
    />
  </div>

export default Alerts