import React        from 'react'
import Fixes        from '@/snippets/prefix-suffix/fixes.html?raw'
import Shaded       from '@/snippets/prefix-suffix/shaded.html?raw'
import Lined        from '@/snippets/prefix-suffix/lined.html?raw'
import ShadedLined  from '@/snippets/prefix-suffix/shaded-lined.html?raw'
import PreText      from '@/snippets/prefix/text.html?raw'
import PreTextArea  from '@/snippets/prefix/textarea.html?raw'
import PreSelect    from '@/snippets/prefix/select.html?raw'
import PreCheckbox  from '@/snippets/prefix/checkbox.html?raw'
import SuffText     from '@/snippets/suffix/text.html?raw'
import SuffTextArea from '@/snippets/suffix/textarea.html?raw'
import SuffSelect   from '@/snippets/suffix/select.html?raw'
import SuffCheckbox from '@/snippets/suffix/checkbox.html?raw'
import Example      from '@/site/Example.jsx'
import Link from '@/ui/Link.jsx'

const PrefixSuffix = () =>
  <div className="prose">
    <h1>Prefix and Suffix</h1>
    <p>
      You can add prefixes and suffixes to form fields, or any combination
      of <Link to="/forms/multi-inputs" text="inputs"/>.
      Not only do the colours and focus rings work correctly, but they
      also adapt their colors for <code>valid</code> and <code>invalid</code> fields.
    </p>
    <Example
      html={Fixes}
      language="html"
      caption="Prefix and Suffix"
    />
    <h2>Shaded</h2>
    <p>
      To visually distinguish a prefix or suffix you
      you can add the <code>shaded</code> class...
    </p>
    <Example
      html={Shaded}
      language="html"
      caption="Shaded"
    />
    <h2>Lined</h2>
    <p>
      ...or the <code>lined</code> class.
    </p>
    <Example
      html={Lined}
      language="html"
      caption="Lined"
    />
    <h2>Shaded and Lined</h2>
    <p>
      ...or both.
    </p>
    <Example
      html={ShadedLined}
      language="html"
      caption="Shaded and Lined"
    />

    <h2>Input Prefix</h2>
    <p>
      If you want to add a prefix to a field you should enclose the input
      in an element with the <code>inputs</code> class and add the{' '}
      <code>prefix</code> class to the prefix element.  You can add a prefix
      to a text input, textarea, select or a checkbox or radio option with
      the <code>border</code> class set.  You can try it without the {' '}
      <code>border</code> but the effect is lost somewhat.
    </p>
    <h3>Text Input With Prefix</h3>
    <Example
      html={PreText}
      language="html"
      caption="Text Prefix"
    />
    <h3>Text Area Input With Prefix</h3>
    <Example
      html={PreTextArea}
      language="html"
      caption="Text Area Prefix"
    />
    <h3>Select Input With Prefix</h3>
    <Example
      html={PreSelect}
      language="html"
      caption="Select Prefix"
    />
    <h3>Checkbox With Prefix</h3>
    <p>
      This only really works with checkboxes that have the{' '}
      <code>border</code> class
    </p>
    <Example
      html={PreCheckbox}
      language="html"
      caption="Checkbox Prefix"
    />

    <h2>Input Suffix</h2>
    <p>
      Adding an input suffix is just the same, except for giving your
      suffix element the <code>suffix</code> class and putting it after
      the input.
    </p>
    <h3>Text Input With Suffix</h3>
    <Example
      html={SuffText}
      language="html"
      caption="Text Suffix"
    />
    <h3>Text Area Input With Suffix</h3>
    <Example
      html={SuffTextArea}
      language="html"
      caption="Text Area Suffix"
    />
    <h3>Select Input With Suffix</h3>
    <Example
      html={SuffSelect}
      language="html"
      caption="Select Suffix"
    />
    <h3>Checkbox With Suffix</h3>
    <p>
      This only really works with checkboxes that have the{' '}
      <code>border</code> class
    </p>
    <Example
      html={SuffCheckbox}
      language="html"
      caption="Checkbox Suffix"
    />

  </div>

export default PrefixSuffix