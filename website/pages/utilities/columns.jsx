import React    from 'react'
import Two      from '@/snippets/columns/two.html?raw'
import Three    from '@/snippets/columns/three.html?raw'
import Gap      from '@/snippets/columns/gap.html?raw'
import GapProp  from '@/snippets/columns/gap-prop.html?raw'
import Stack    from '@/snippets/columns/stack.html?raw'
import Link     from '@/ui/Link.jsx'
import Example  from '@/site/Example.jsx'

const ColumnExamples = () =>
  <div className="flow">
    <h1>Columns</h1>
    <p className="cols-2 stack-desktop">
      The <code>cols-N</code> class can be added to split text into
      <code>N</code> columns, from 1 to 5.
    </p>

    <h2 className="font-mono">Two Columns</h2>
    <p className="cols-2 stack-desktop">
      The <code>cols-2</code> class splits the text into two columns.
    </p>
    <Example
      html={Two}
      caption="Two Columns"
    />

    <h2 className="font-mono">Three Columns</h2>
    <p className="cols-3 stack-desktop">
      The <code>cols-3</code> class splits the text into two columns.
      And so on...
    </p>
    <Example
      html={Three}
      caption="Three Columns"
    />

    <h2 className="font-mono">Gaps</h2>
    <p className="cols-2 stack-desktop">
      Add on of the <code>gap-N</code> classes to define the gap between
      the columns (where <code>N</code> is in units of 0.25rem from 1 to 16).
    </p>
    <Example
      html={Gap}
      caption="Column Gap"
    />

    <h2 className="font-mono">--column-gap</h2>
    <p className="cols-2 stack-desktop">
      Alternately, you can set the <code>--column-gap</code> CSS property to anything
      you like.
    </p>
    <Example
      html={GapProp}
      caption="Gap Property"
    />


    <h2 className="font-mono">Stacking</h2>
    <p className="cols-2 stack-desktop">
      Add one of the <code>stack-XXX</code>{' '}
      <Link to="/utilities/stack" text="breakpoint stacking"/> classes (e.g.{' '}
      <code>stack-mobile</code>, <code>stack-tablet</code>, etc).  To have
      the columns reduce to one when the screen width is less than the breakpoint
      width.
    </p>
    <Example
      html={Stack}
      caption="Stacking Columns"
    />

  </div>

export default ColumnExamples
