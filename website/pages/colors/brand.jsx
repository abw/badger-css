import React from 'react'
import CodeBlock from '../../site/CodeBlock.jsx'
import brand  from '../../snippets/sass/brand-color.scss?raw'
import brands from '../../snippets/sass/brand-colors.scss?raw'
import greys  from '../../snippets/sass/greyscales.scss?raw'
import names  from '../../snippets/sass/color-names.scss?raw'
import Link from '../../ui/Link.jsx'

const Brand = () =>
  <div className="prose">
    <h1>Brand Colours</h1>
    <p>
      The palette is designed to be adjustable so that you can match it to
      your brand colors.
    </p>

    <h2>Brand Hue and Color</h2>
    <p>
      You should pick a color that is closest to your brand color and adjust
      the hue to match it if necessary  Then define that as the{' '}
      <code>$brand-hue</code> and set the <code>$brand-color</code> by name.
    </p>
    <CodeBlock
      code={brand}
      caption="Brand Color"
      language='scss'
      expand
    />

    <h2>Multiple Brand Colors</h2>
    <p>
      If you have multiple brand colors you can set them using the{' '}
      <code>$brand-colors</code> variable.  You can call them whatever you
      like (we&apos;re using <code>primary</code>, <code>secondary</code>{' '}
      and <code>tertiary</code> in this example). You should define one to be
      the primary <code>$brand-color</code> and set the <code>$brand-hue</code>
    </p>
    <CodeBlock
      code={brands}
      caption="Brand Colors"
      language='scss'
      expand
    />

    <h2>Greyscale Colors</h2>
    <p>
      An important side-effect of setting <code>$brand-hue</code> is that it
      will set the hue of the greyscale color ranges to match it.
    </p>
    <p>
      If you want to use different hues for the greyscale color ranges
      then you can do that using the <code>$grey-hue</code>,{' '}
      <code>$grey20-hue</code> and <code>$grey40-hue</code> variables.
    </p>
    <CodeBlock
      code={greys}
      caption="Greyscale Colors"
      language='scss'
      expand
    />

    <h2>Culling the Palette</h2>
    <p>
      The chances are that you aren&apos;t going to need all of the colors
      defined in the standard palette.  You can reduce the size of the
      generated CSS file by excluding any that you don&apos;t need.
    </p>
    <p>
      Set the <code>$color-names</code> variable to list those that you want
      to keep.  Note that <code>red</code>, <code>orange</code>,{' '}
      <code>green</code>, <code>blue</code> and <code>grey</code> are used
      by various components, including <Link to="/forms/" text="forms"/> and{' '}
      <Link to="/components/alerts" text="alerts"/> so you&apos;ll probably
      want to keep those.
    </p>
    <CodeBlock
      code={names}
      caption="Selecting Colors"
      language='scss'
      expand
    />

  </div>

export default Brand
