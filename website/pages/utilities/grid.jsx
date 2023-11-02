import React      from 'react'
import Example    from '@/site/Example.jsx'
import Grid       from '@/snippets/grid/grid.html?raw'
import Grid1      from '@/snippets/grid/grid-1.html?raw'
import GridGap    from '@/snippets/grid/gap.html?raw'
import GridGapVH  from '@/snippets/grid/gap-vh.html?raw'
import GridStart  from '@/snippets/grid/grid-start.html?raw'
import GridCenter from '@/snippets/grid/grid-center.html?raw'
import GridEnd    from '@/snippets/grid/grid-end.html?raw'
import GridFit    from '@/snippets/grid/grid-fit.html?raw'
import GridFit200 from '@/snippets/grid/grid-fit-200.html?raw'
import GridFill   from '@/snippets/grid/grid-fill.html?raw'

const GridExamples = () =>
  <div className="prose flow">
    <h1>Grid</h1>
    <h2>Grid Columns</h2>
    <p>
      Use a <code>grid-N</code> CSS class to set the <code>display</code>{' '}
      mode to <code>grid</code> where <code>N</code> is the number of columns
      from 2 to 16.
    </p>
    <Example
      html={Grid}
      caption="Grid Columns"
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
      caption="Grid Gaps"
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
      caption="Grid Gaps"
      expand
    />
    <h2>Single Column Grid</h2>
    <p>
      The <code>grid</code> CSS class (or <code>grid-1</code> which does the
      same thing) creates a single column grid.  It&apos;s useful because it
      then allows you to use the <code>gap-N</code> classes to add a vertical
      gap between child components.
    </p>
    <Example
      html={Grid1}
      caption="Single Column Grid"
      expand
    />

    <h2>Grid Fit</h2>
    <p>
      The <code>grid-fit</code> CSS class will fit as many items into the
      grid as it can and then wrap onto the next line.
    </p>
    <Example
      html={GridFit}
      caption="Grid Fit"
      // expand
    />

    <h2>Grid Fill</h2>
    <p>
      The <code>grid-fill</code> CSS class is similar to <code>grid-fit</code>.
      The difference between them is what happens when there are&apos;t enough
      items to fill the container width.  <code>grid-fit</code> will stretch
      them whereas <code>grid-fill</code> will not.
    </p>
    <Example
      html={GridFill}
      caption="Grid Fill"
      // expand
    />

    <h2>Grid Fit/Fill Size</h2>
    <p>
      Both <code>grid-fit</code> and <code>grid-fill</code> can define a
      minimum size for each child element.  By default this is{' '}
      <code>100px</code> wide.  You can set the <code>--min-width</code> property
      to change it.
    </p>
    <Example
      html={GridFit200}
      caption="Grid Size"
      // expand
    />

    <h2>Grid Start</h2>
    <p>
      Add the <code>start</code> CSS class to align items to the start
      of grid columns.
    </p>
    <Example
      html={GridStart}
      caption="Grid Start"
      expand
    />

    <h2>Grid Center</h2>
    <p>
      Add the <code>center</code> CSS class to align items to the center
      of grid columns.
    </p>
    <Example
      html={GridCenter}
      caption="Grid Center"
      expand
    />

    <h2>Grid End</h2>
    <p>
      Add the <code>end</code> CSS class to align items to the end
      of grid columns.
    </p>
    <Example
      html={GridEnd}
      caption="Grid End"
      expand
    />


  </div>

export default GridExamples
