import React            from 'react'
import Example          from '../../site/Example.jsx'
import Grid             from '../../snippets/html/grid.html?raw'
import GridGap          from '../../snippets/html/grid-gap.html?raw'
import GridGapVH        from '../../snippets/html/grid-gap-vh.html?raw'

const GridExamples = () =>
  <div className="prose">
    <h1>Grid</h1>
    <h2>Grid Columns</h2>
    <p>
      Use a <code>grid-N</code> CSS class to set the <code>display</code>{' '}
      mode to <code>grid</code> where <code>N</code> is the number of columns
      from 2 to 16.
    </p>
    <Example
      html={Grid}
      caption=".grid-2"
      expand
    />
    <h2>Gaps</h2>
    <p>
      The <code>gap-N</code> classes can be used to add a gap between
      successive elements.  Here <code>N</code> is a number from 1 to 16
      representing multiples of the default spacing unit
      (<code>0.25rem</code> by default).
    </p>
    <Example
      html={GridGap}
      caption=".grid-2 .gap-4"
      expand
    />
    <h2>Vertical and Horizontal Gaps</h2>
    <p>
      The the <code>gap-v-N</code> and <code>gap-h-N</code> classes can be
      used to define the vertical and horizontal gaps separately.
      Again, <code>N</code> is a number from 1 to 16
      representing multiples of the default spacing unit.
    </p>
    <Example
      html={GridGapVH}
      caption=".grid-2 .gap-v-8 .gap-h-2"
      expand
    />

  </div>

export default GridExamples
