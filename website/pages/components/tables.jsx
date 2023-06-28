import React   from 'react'
import Example from '../../site/Example.jsx'
import Table   from '../../snippets/html/table.html?raw'
import Celled  from '../../snippets/html/table-celled.html?raw'
import Shaded  from '../../snippets/html/table-shaded.html?raw'
import Lined   from '../../snippets/html/table-lined.html?raw'
import Striped from '../../snippets/html/table-striped.html?raw'
import Branded from '../../snippets/html/table-brand.html?raw'
import Colors  from '../../snippets/html/table-colors.html?raw'
import Rounded from '../../snippets/html/table-rounded.html?raw'

const Tables = () =>
  <div>
    <h1>Tables</h1>
    <h2>Default Table</h2>
    <Example
      html={Table}
      language="html"
      caption="Table"
    />
    <h2>Celled Table</h2>
    <Example
      html={Celled}
      language="html"
      caption="Celled Table"
    />
    <h2>Shaded Table</h2>
    <Example
      html={Shaded}
      language="html"
      caption="Shaded Table"
    />
    <h2>Lined Table</h2>
    <Example
      html={Lined}
      language="html"
      caption="Lined Table"
    />
    <h2>Striped Table</h2>
    <Example
      html={Striped}
      language="html"
      caption="Striped Table"
    />
    <h2>Colored Table</h2>
    <Example
      html={Branded}
      language="html"
      caption="Colored Table"
    />
    <h2>Colored Rows</h2>
    <Example
      html={Colors}
      language="html"
      caption="Colored Rows"
    />
    <h2>Rounded Table</h2>
    <Example
      html={Rounded}
      language="html"
      caption="Rounded Table"
    />
  </div>

export default Tables