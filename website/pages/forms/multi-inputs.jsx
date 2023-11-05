import React    from 'react'
import Example  from '@/site/Example.jsx'
import CCard    from '@/snippets/inputs/ccard.html?raw'
import Date     from '@/snippets/inputs/date.html?raw'
import Link from '@/ui/Link.jsx'

const MultiInputs = () =>
  <div className="prose flow">
    <h1>Multiple Input</h1>
    <p>
      Sometimes you need to create a form component that looks like a single
      input but is comprised of multiple inputs or other elements.
    </p>
    <p>
      In this case you can wrap them up in a container with
      the <code>inputs</code> class.  See the{' '}
      <Link to="/forms/prefix-suffix" text="Prefix and Suffix"/> page for
      details on adding the prefix icon.
    </p>
    <h2>Credit Card Number</h2>
    <p>
      In this example we create an input for a credit card number.
      This demo doesn&apos;t have any interactive functionality and
      leaves a lot to be desired in terms of user experience.  For
      example, you can enter more than 4 numbers in each section, the
      focus doesn&apos;t automatically switch from one block to the next,
      and so on. But this is only supposed to be a demonstration of the
      styling, not the functionality.
    </p>
    <p>
      Making it work properly is left as an exercise for the reader.
    </p>
    <Example
      html={CCard}
      language="html"
      caption="Credit Card"
    />
    <h2>Date</h2>
    <p>
      This is also a less-than-perfect implementation in terms of
      functionality, but it demonstrates the form.
    </p>
    <Example
      html={Date}
      language="html"
      caption="Date"
    />

  </div>

export default MultiInputs