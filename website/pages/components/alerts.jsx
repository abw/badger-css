import React       from 'react'
import Example     from '../../site/Example.jsx'
import Alert       from '../../snippets/html/alert.html?raw'
import AlertHeads  from '../../snippets/html/alert-heads.html?raw'
import Headlines   from '../../snippets/html/alert-headlines.html?raw'
import AlertStripe from '../../snippets/html/alert-stripe.html?raw'

const Alerts = () =>
  <div>
    <h1>Alerts</h1>
    <h2>Default Alerts</h2>
    <Example
      html={Alert}
      language="html"
      caption="Alerts"
    />
    <h2>Alert Headings</h2>
    <Example
      html={AlertHeads}
      language="html"
      caption="Alert Headings"
    />
    <h2>Alert Headlines</h2>
    <Example
      html={Headlines}
      language="html"
      caption="Alert Headlines"
    />
    <h2>Stripe Alerts</h2>
    <Example
      html={AlertStripe}
      language="html"
      caption="Stripe Alert"
    />
  </div>

export default Alerts