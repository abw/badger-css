import React    from 'react'
import Example  from '@/site/Example.jsx'
import Grid     from '@/snippets/grid/grid.html?raw'
import Grid1    from '@/snippets/grid/grid-1.html?raw'
import Gap      from '@/snippets/grid/gap.html?raw'
import GapVH    from '@/snippets/grid/gap-vh.html?raw'
import Top      from '@/snippets/grid/top.html?raw'
import Middle   from '@/snippets/grid/middle.html?raw'
import Bottom   from '@/snippets/grid/bottom.html?raw'
import Fit      from '@/snippets/grid/fit.html?raw'
import Fit200   from '@/snippets/grid/fit-200.html?raw'
import Fill     from '@/snippets/grid/fill.html?raw'
import Overlap  from '@/snippets/grid/overlap.html?raw'
import OverText from '@/snippets/grid/overlap-text.html?raw'

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
      html={Gap}
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
      html={GapVH}
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
      html={Fit}
      caption="Grid Fit"
    />

    <h2>Grid Fill</h2>
    <p>
      The <code>grid-fill</code> CSS class is similar to <code>grid-fit</code>.
      The difference between them is what happens when there are&apos;t enough
      items to fill the container width.  <code>grid-fit</code> will stretch
      them whereas <code>grid-fill</code> will not.
    </p>
    <Example
      html={Fill}
      caption="Grid Fill"
    />

    <h2>Grid Fit/Fill Size</h2>
    <p>
      Both <code>grid-fit</code> and <code>grid-fill</code> can define a
      minimum size for each child element.  By default this is{' '}
      <code>100px</code> wide.  You can set the <code>--min-width</code> property
      to change it.
    </p>
    <Example
      html={Fit200}
      caption="Grid Size"
    />

    <h2>Grid Top</h2>
    <p>
      Add the <code>top</code> (or <code>start</code>) CSS class to align
      items to the top of grid columns.
    </p>
    <Example
      html={Top}
      caption="Grid Top"
      expand
    />

    <h2>Grid Middle</h2>
    <p>
      Add the <code>middle</code> CSS class to align items to the middle
      of grid columns.
    </p>
    <Example
      html={Middle}
      caption="Grid Middle"
      expand
    />

    <h2>Grid Bottom</h2>
    <p>
      Add the <code>bottom</code> (or <code>end</code>) CSS class to align
      items to the end of grid columns.
    </p>
    <Example
      html={Bottom}
      caption="Grid Bottom"
      expand
    />

    <h2>Grid Overlap</h2>
    <p>
      Add the <code>overlap</code> CSS class to stack all children of the
      grid on top of each other.  This can be used when you want to layer
      some content on top of a background, for example.
    </p>
    <Example
      html={OverText}
      caption="Grid Overlap"
      expand
    />
    <p>
      You can also use it to hide previous components.  In this example, we
      create a label with a checkbox input (which is functional) but hide
      it with overlaid content.
    </p>
    <Example
      html={Overlap}
      caption="Grid Overlap"
      expand
    />
    <p>
      Why is this useful?
    </p>


  </div>

export default GridExamples
