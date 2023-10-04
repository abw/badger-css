import React    from 'react'
import Example  from '../../site/Example.jsx'
import Field    from '../../snippets/form/field.html?raw'
import Invalid  from '../../snippets/form/field-invalid.html?raw'
import Valid    from '../../snippets/form/field-valid.html?raw'
import Required from '../../snippets/form/field-required.html?raw'
import ReqCustom from '../../snippets/form/field-required-custom.html?raw'
import Optional from '../../snippets/form/field-optional.html?raw'
import OptCustom from '../../snippets/form/field-optional-custom.html?raw'
import ReqText  from '../../snippets/sass/field-required-text.scss?raw'
import Prefix   from '../../snippets/form/field-prefix.html?raw'
import Suffix   from '../../snippets/form/field-suffix.html?raw'
import Fixes    from '../../snippets/form/field-fixes.html?raw'
import CodeBlock from '../../site/CodeBlock.jsx'

const Fields = () =>
  <div className="prose">
    <h1>Form Fields</h1>
    <p>
      Form fields are usually comprised of more than just an input.
      A label is usually present and sometimes an additional help message
      too.
    </p>
    <h2>Field Class</h2>
    <p>
      Create a container with the <code>field</code> class.
      Any help message should have the <code>help</code> class.
    </p>
    <Example
      html={Field}
      language="html"
      caption="Form Field"
    />

    <h2>Invalid Field</h2>
    <p>
      Add the <code>invalid</code> class to the <code>field</code> to indicate
      fields that are invalid.
    </p>
    <Example
      html={Invalid}
      language="html"
      caption="Invalid Field"
    />

    <h2>Valid Field</h2>
    <p>
      Add the <code>valid</code> class to the <code>field</code> to indicate
      fields that have passed validation.
    </p>
    <Example
      html={Valid}
      language="html"
      caption="Valid Field"
    />

    <h2>Required Field</h2>
    <p>
      Add the <code>required</code> class to the <code>field</code> if you
      want an additional tag added to the label.
    </p>
    <Example
      html={Required}
      language="html"
      caption="Required Field"
    />
    <p>
      You can use the <code>--required-text</code> CSS variable to change the
      text displayed.
    </p>
    <Example
      html={ReqCustom}
      language="html"
      caption="Custom Required Field"
    />

    <h2>Optional Field</h2>
    <p>
      Add the <code>optional</code> class to the <code>field</code> if you
      want an additional tag added to the label.
    </p>
    <Example
      html={Optional}
      language="html"
      caption="Optional Field"
    />
    <p>
      You can use the <code>--optional-text</code> CSS variable to change the
      text displayed.
    </p>
    <Example
      html={OptCustom}
      language="html"
      caption="Custom Optional Field"
    />
    <p>
      You can also change the text displayed for either the required and/or
      optional labels on a global level by setting the{' '}
      <code>$field-required-text</code> and <code>$field-optional-text</code>{' '}
      SASS variables. Be warned that you need to quote the values twice, so
      that the value defined includes a set of quotes, as shown here.
    </p>
    <CodeBlock
      code={ReqText}
      caption="Required Text"
      language="scss"
      className="mar-b-8"
      expand
    />

    <h2>Input Prefix</h2>
    <p>
      If you want to add a prefix to a field you should enclose the input
      in an element with the <code>input</code> class and add the{' '}
      <code>prefix</code> class to the prefix element.  You can add a prefix
      to a text input, textarea, select or a checkbox or radio option with
      the <code>border</code> class set.  You can try it without the {' '}
      <code>border</code> but the effect is lost somewhat.

    </p>
    <p>
      If you want a wide input then add the <code>wide</code> class to the{' '}
      <code>input</code> container element.
    </p>
    <Example
      html={Prefix}
      language="html"
      caption="Input Prefix"
    />

    <h2>Input Suffix</h2>
    <p>
      Adding an input suffix is just the same, except for giving your
      suffix element the <code>suffix</code> class and putting it after
      the input.
    </p>
    <Example
      html={Suffix}
      language="html"
      caption="Input Suffix"
    />

    <h2>Prefix and Suffix</h2>
    <p>
      You can add both a <code>prefix</code> and a <code>suffix</code>.
      Not only do the colours and focus rings work correctly, but they
      also adapt their colors for <code>valid</code> and <code>invalid</code> fields.
    </p>
    <Example
      html={Fixes}
      language="html"
      caption="Prefix and Suffix"
    />
  </div>

export default Fields