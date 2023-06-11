import React            from 'react'
import Example          from '../../site/Example.jsx'
import Grid             from '../../examples/styles/Grid.jsx'
import GridSrc          from '../../examples/styles/Grid.jsx?raw'
import GridGap          from '../../examples/styles/GridGap.jsx'
import GridGapSrc       from '../../examples/styles/GridGap.jsx?raw'
import GridGapVH        from '../../examples/styles/GridGapVH.jsx'
import GridGapVHSrc     from '../../examples/styles/GridGapVH.jsx?raw'

const GridExamples = () =>
  <div>
    <h1>Grid</h1>
    <p>
      Use a <code>grid-N</code> CSS class to set the <code>display</code>{' '}
      mode to <code>grid</code> where <code>N</code> is the number of columns
      from 2 to 16.
    </p>
    <Example
      Component={Grid}
      code={GridSrc}
      caption=".grid-2"
      expand
    />
    <p>
      The <code>gap-N</code> classes can be used to add a gap between
      successive elements.  Here <code>N</code> is a number from 1 to 16
      representing multiples of the default spacing unit
      (<code>0.25rem</code> by default).
    </p>
    <Example
      Component={GridGap}
      code={GridGapSrc}
      caption=".grid-2 .gap-4"
      expand
    />
    <p>
      The the <code>gap-v-N</code> and <code>gap-h-N</code> classes can be
      used to define the vertical and horizontal gaps separately.
      Again, <code>N</code> is a number from 1 to 16
      representing multiples of the default spacing unit.
    </p>
    <Example
      Component={GridGapVH}
      code={GridGapVHSrc}
      caption=".grid-2 .gap-v-8 .gap-h-2"
      expand
    />

  </div>

export default GridExamples
