import React      from 'react'
import Example    from '../../site/Example.jsx'
import Widths     from '../../snippets/widths/widths.html?raw'
import WidthsSCSS from '../../snippets/sass/widths.scss?raw'
import SplitBlock from '../../site/SplitCode.jsx'
import SizesTable from '../../table/Sizes.jsx'


const WidthsExamples = () =>
  <div className="prose">
    <h1>Widths</h1>
    <p>
      The <code>wd-N</code> classes can be used to set the maximum width of
      an element to a number of em units.
    </p>
    <Example
      html={Widths}
      caption="Widths"
      expand
    />
    <p>
      The values for <code>N</code> can be <code>2</code>, <code>4</code>,{' '}
      <code>6</code>, <code>8</code>, <code>10</code>, <code>12</code>,{' '}
      <code>14</code>, <code>16</code>, <code>18</code>, <code>20</code>,{' '}
      <code>25</code>, <code>30</code>, <code>35</code>, <code>40</code>{' '}
      and <code>50</code>.
    </p>
    <p>
      You can change these values by setting the <code>$em-widths</code> SASS
      variable.
    </p>
    <SplitBlock
      code={WidthsSCSS}
      caption="Custom Sizes"
      language="scss"
      expand
    >
      <SizesTable
        heading2='Em Size'
        heading3={<>Pixel Size <span className="smaller">(when 1em=16px)</span></>}
        rows={[
          ['wd-2',  '2em',  '32px' ],
          ['wd-4',  '4em',  '64px' ],
          ['wd-6',  '6em',  '96px' ],
          ['wd-8',  '8em',  '128px' ],
          ['wd-10', '10em', '160px' ],
          ['wd-12', '12em', '192px' ],
          ['wd-14', '14em', '224px' ],
          ['wd-16', '16em', '256px' ],
          ['wd-18', '18em', '288px' ],
          ['wd-20', '20em', '320px' ],
          ['wd-25', '25em', '400px' ],
          ['wd-30', '30em', '480px' ],
          ['wd-35', '35em', '560px' ],
          ['wd-40', '40em', '640px' ],
          ['wd-50', '50em', '800px' ],
        ]}
      />

    </SplitBlock>

  </div>

export default WidthsExamples