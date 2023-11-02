import React      from 'react'
import Field      from '@/snippets/field/field.html?raw'
import Checkbox   from '@/snippets/field/checkbox.html?raw'
import Radio      from '@/snippets/field/radio.html?raw'
import Invalid    from '@/snippets/field/invalid.html?raw'
import Valid      from '@/snippets/field/valid.html?raw'
import Required   from '@/snippets/field/required.html?raw'
import ReqCustom  from '@/snippets/field/required-custom.html?raw'
import Optional   from '@/snippets/field/optional.html?raw'
import OptCustom  from '@/snippets/field/optional-custom.html?raw'
import Prefix     from '@/snippets/field/prefix.html?raw'
import Suffix     from '@/snippets/field/suffix.html?raw'
import Fixes      from '@/snippets/field/fixes.html?raw'
import ReqText    from '@/snippets/sass/field-required-text.scss?raw'
import Example    from '@/site/Example.jsx'
import CodeBlock  from '@/site/CodeBlock.jsx'
import Link from '@/ui/Link.jsx'
import Split from '@/site/Split.jsx'

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
      You can then add a <code>label</code> for the field.
      If you want to display additional help for the input then give
      it the <code>help</code> class.
    </p>
    <Example
      html={Field}
      language="html"
      caption="Form Field"
    />

    <h2>Field Width</h2>
    <p>
      Fields are wide by default, but the inputs respect the normal rules:{' '}
      <Link to="/forms/text" text="text"/>, {' '}
      <Link to="/forms/textarea" text="textarea"/> and {' '}
      <Link to="/forms/select" text="select"/> inputs are full-width
      by default, but{' '}
      <Link to="/forms/checkboxes" text="checkbox"/> and{' '}
      <Link to="/forms/radio-buttons" text="radio button"/> inputs are inline
      unless you explicitly add the <code>wide</code> class to the containing label.
    </p>
    <Example
      html={Checkbox}
      language="html"
      caption="Checkbox Field"
    />
    <Example
      html={Radio}
      language="html"
      caption="Radio Button Field"
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
    <Split>
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
    </Split>

    <h2>Input Prefix</h2>
    <p>
      If you want to add a prefix to a field you should enclose the input
      in an element with the <code>inputs</code> class and add the{' '}
      <code>prefix</code> class to the prefix element.  You can add a prefix
      to a text input, textarea, select or a checkbox or radio option with
      the <code>border</code> class set.  You can try it without the {' '}
      <code>border</code> but the effect is lost somewhat.

    </p>
    <p>
      If you want a wide input then add the <code>wide</code> class to the{' '}
      <code>inputs</code> container element.
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