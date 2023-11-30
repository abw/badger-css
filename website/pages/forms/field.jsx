import React      from 'react'
import Field      from '@/snippets/field/field.html?raw'
import Text       from '@/snippets/field/text.html?raw'
import Checkbox   from '@/snippets/field/checkbox.html?raw'
import Radio      from '@/snippets/field/radio.html?raw'
import Invalid    from '@/snippets/field/invalid.html?raw'
import Valid      from '@/snippets/field/valid.html?raw'
import Required   from '@/snippets/field/required.html?raw'
import ReqCustom  from '@/snippets/field/required-custom.html?raw'
import Optional   from '@/snippets/field/optional.html?raw'
import OptCustom  from '@/snippets/field/optional-custom.html?raw'
import LabelSpace from '@/snippets/field/label-space.html?raw'
import ReqText    from '@/snippets/sass/field-required-text.scss?raw'
import Example    from '@/site/Example.jsx'
import CodeBlock  from '@/site/CodeBlock.jsx'
import Split      from '@/site/Split.jsx'

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
      Fields are wide by default, but you can add the <code>inline</code> class
      to the input element or containing label in the case of checkboxes
      and radio buttons.
    </p>
    <Example
      html={Text}
      language="html"
      caption="Text Field"
    />
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

    <h2>Label Spacing</h2>
    <p>
      The <code>mar-t-label</code> and <code>pad-t-label</code> classes
      will add a margin or padding to the top of an element that matches
      the height of a field label.  This is useful if you want to vertically
      align inputs or other elements where some fields have label and others
      don&apos;t.
    </p>
    <Example
      html={LabelSpace}
      language="html"
      caption="Label Spacing"
    />
  </div>

export default Fields