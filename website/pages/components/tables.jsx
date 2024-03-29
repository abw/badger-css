import React      from 'react'
import Example    from '@/site/Example.jsx'
import Demo       from '@/examples/components/Table.jsx'
import Table      from '@/snippets/table/table.html?raw'
import Celled     from '@/snippets/table/celled.html?raw'
import Shaded     from '@/snippets/table/shaded.html?raw'
import Lined      from '@/snippets/table/lined.html?raw'
import Striped    from '@/snippets/table/striped.html?raw'
import Headings   from '@/snippets/table/headings.html?raw'
import Compressed from '@/snippets/table/compressed.html?raw'
import Expanded   from '@/snippets/table/expanded.html?raw'
import Branded    from '@/snippets/table/brand.html?raw'
import Colors     from '@/snippets/table/colors.html?raw'
import Rounded    from '@/snippets/table/rounded.html?raw'

const Tables = () =>
  <div className="prose">
    <h1>Tables</h1>
    <p>
      Badger CSS contains some basic table styling by default and a number
      of additional classes you can add to snazz things up.
    </p>
    <h2>Demo</h2>
    <p>
      Select the options to determine how the table is displayed.
    </p>
    <Demo/>

    <h2>Default Table</h2>
    <p>
      The default table style is plain.
    </p>
    <Example
      html={Table}
      language="html"
      caption="Table"
    />

    <h2>Lined Table</h2>
    <p>
      Add the <code>lined</code> class to add borders between lines.
    </p>
    <Example
      html={Lined}
      language="html"
      caption="Lined Table"
    />

    <h2>Celled Table</h2>
    <p>
      Add the <code>celled</code> class to add cell borders.
    </p>
    <Example
      html={Celled}
      language="html"
      caption="Celled Table"
    />

    <h2>Shaded Table</h2>
    <p>
      Add the <code>shaded</code> class to add background colors.
    </p>
    <Example
      html={Shaded}
      language="html"
      caption="Shaded Table"
    />

    <h2>Striped Table</h2>
    <p>
      Add the <code>striped</code> class to add alternate background colors
      for rows.
    </p>
    <Example
      html={Striped}
      language="html"
      caption="Striped Table"
    />

    <h2>Heading Cells</h2>
    <p>
      This example shows <code>th</code> elements in a row.
    </p>
    <Example
      html={Headings}
      language="html"
      caption="Row Headings"
    />

    <h2>Compressed Table</h2>
    <p>
      Add the <code>compresses</code> class to reduce the padding.
    </p>
    <Example
      html={Compressed}
      language="html"
      caption="Compressed Table"
    />

    <h2>Expanded Table</h2>
    <p>
      Add the <code>expanded</code> class to increase the padding.
    </p>
    <Example
      html={Expanded}
      language="html"
      caption="Expanded Table"
    />

    <h2>Colored Table</h2>
    <p>
      Add color classes to change the base color.
    </p>
    <Example
      html={Branded}
      language="html"
      caption="Colored Table"
    />

    <h2>Colored Rows</h2>
    <p>
      Add color classes to rows to get different background colors.
    </p>
    <Example
      html={Colors}
      language="html"
      caption="Colored Rows"
    />

    <h2>Customised Table</h2>
    <p>
      You can customise tables using CSS properties.
    </p>
    <Example
      html={Rounded}
      language="html"
      caption="Rounded Table"
    />
  </div>

export default Tables