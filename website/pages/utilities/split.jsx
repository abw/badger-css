import React      from 'react'
import Example    from '@/site/Example.jsx'
import Even       from '@/snippets/split/even.html?raw'
import Uneven     from '@/snippets/split/uneven.html?raw'
import Table      from '@/snippets/split/table.html?raw'
import SplitsSCSS from '@/snippets/sass/splits.scss?raw'
import Split      from '@/site/Split.jsx'
import SplitBlock from '@/site/SplitCode.jsx'
import { FlexLink } from '@/site/Links.jsx'

const Splits = [
  ['2',    'One half',        '50%'],
  ['3',    'One third',       '33.33333333%'],
  ['2-3',  'Two thirds',      '66.66666666%'],
  ['4',    'One quarter',     '25%'],
  ['3-4',  'Three quarters',  '75%'],
  ['5',    'One fifth',       '20%'],
  ['2-5',  'Two fifths',      '40%'],
  ['3-5',  'Three fifths',    '60%'],
  ['4-5',  'Four fifths',     '80%'],
  ['6',    'One sixth',       '16.66666666%'],
  ['5-6',  'Five sixth',      '83.33333333%'],
  ['7',    'One seventh',     '14.28571429%'],
  ['2-7',  'Two sevenths',    '28.57142858%'],
  ['3-7',  'Three sevenths',  '42.85714287%'],
  ['4-7',  'Four sevenths',   '57.14285716%'],
  ['5-7',  'Five sevenths',   '71.42857145%'],
  ['6-7',  'Six sevenths',    '85.71428574%'],
  ['8',    'One eighth',      '12.5%'],
  ['3-8',  'Three eighths',   '37.5%'],
  ['5-8',  'Five eighths',    '62.5%'],
  ['7-8',  'Seven eighths',   '87.5%'],
  ['9',    'One ninth',       '11.11111111%'],
  ['2-9',  'Two ninths',      '22.22222222%'],
  ['4-9',  'Four ninths',     '44.44444444%'],
  ['5-9',  'Five ninths',     '55.55555555%'],
  ['7-9',  'Seven ninths',    '77.77777777%'],
  ['8-9',  'Eight ninths',    '88.88888888%'],
  ['10',   'One tenth',       '10%'],
  ['3-10', 'Three tenths',    '30%'],
  ['7-10', 'Seven tenths',    '70%'],
  ['9-10', 'Nine tenths',     '90%'],
  ['11',   'One eleventh',    '9.090909090%'],
  ['12',   'One twelfth',     '8.333333333%'],
  ['13',   'One thirteenth',  '7.692307692%'],
  ['14',   'One fourteenth',  '7.142857142%'],
  ['15',   'One fifteenth',   '6.666666666%'],
  ['16',   'One sixteenth',   '6.25%'],
]

const SplitPage = () =>
  <div className="prose flow">
    <h1>Split</h1>

    <h2>Evenly Split Columns</h2>
    <Split>
      <p>
        The <code>split-N</code> classes can be used to set the width of
        an element to a fraction of the width of the parent container.
        For example, <code>split-2</code> sets the width to one half,{' '}
        <code>split-3</code> to one third, and so on.  The value for{' '}
        <code>N</code> can be anything from 2 to 16.
      </p>
      <p>
        They can be useful in conjunction with the <FlexLink/> classes to
        constrain columns to be a particular width.  Otherwise the
        flexbox layout engine will try to expand the width of columns
        that have more content.
      </p>
    </Split>
    <Example
      html={Even}
      caption="Even Splits"
    />

    <h2>Unevenly Split Columns</h2>
    <p>
      The <code>split-N-M</code> classes can be used to create uneven splits.
      For example, <code>split-2-5</code> creates a columns that is two fifths
      of the width.
    </p>
    <p>
      These are defined for all uneven splits up to tenths (e.g. there&apos;s
      a <code>split-3-10</code> class for three tenths, but no <code>split-3-11</code>{' '}
      for three elevenths).  Not that redundant classes are not included.
      For example, there&apos;s no <code>split-3-6</code> class because
      it&apos;s one half or <code>split-2</code>.
    </p>
    <Example
      html={Uneven}
      caption="Uneven Splits"
    />

    <h2>Tables</h2>
    <p>
      The <code>split-*</code> classes also work with table columns.
      This can be useful to prevent the layout engine from expanding
      columns to fit the content.  It&apos;s especially useful if you have
      multiple tables and you want the columns to be the same width in
      each of the tables.
    </p>
    <Example
      html={Table}
      caption="Table Splits"
    />

    <h2>Split Classes</h2>
    <Split>
      <p>
        The CSS classes and their corresponding widths are listed below.
      </p>
      <p>
        You can set the <code>$splits</code> SASS variable if you want to
        define a different set of splits.
      </p>
    </Split>
    <SplitBlock
      code={SplitsSCSS}
      caption="Custom Splits"
      language="scss"
      expand
    >
      <table className="brand celled striped properties small wide mar-b-2">
        <thead>
          <tr>
            <th>Class</th>
            <th>Size</th>
            <th>%age Width</th>
          </tr>
        </thead>
        <tbody>
          { Splits.map(
            split =>
              <tr key={split[0]}>
                <td><code>split-{split[0]}</code></td>
                <td>{split[1]}</td>
                <td>{split[2]}</td>
              </tr>
          )}
        </tbody>
      </table>
    </SplitBlock>
  </div>

export default SplitPage
