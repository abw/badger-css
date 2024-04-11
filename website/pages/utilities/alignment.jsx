import React        from 'react'
import BlockAlign   from '@/snippets/alignment/block.html?raw'
import TextAlign    from '@/snippets/alignment/text.html?raw'
import TextLeft     from '@/snippets/alignment/text-left.html?raw'
import Example      from '@/site/Example.jsx'
import { WidthLink } from '@/site/Links.jsx'

const Alignment = () =>
  <div className="prose flow">
    <h1>Alignment</h1>

    <h2>Text Alignment</h2>
    <p>
      Add the <code>text-left</code>, <code>text-center</code> and{' '}
      <code>text-right</code> CSS classes to set the text alignment.
    </p>
    <Example
      html={TextAlign}
      caption="Text Alignment"
      expand
    />

    <p>
      Text is aligned left by default making the <code>text-left</code>{' '}
      class <em>mostly</em> redundant.  However it can be useful to reset the
      alignment to the left for a block that would otherwise be aligned
      centrally or to the right
    </p>
    <Example
      html={TextLeft}
      caption="Text Left"
      expand
    />

    <h2>Block Alignment</h2>
    <p>
      Add the <code>block-left</code>, <code>block-center</code> and{' '}
      <code>block-right</code> CSS classes to align a block to the left, in
      the center, or on the right, respectively.
    </p>
    <p>
      You&apos;ll
      need to set a block width to stop it from expanding to fill the full
      width of the parent element.  You can do that using one of the{' '}
      <WidthLink/> utility classes.
    </p>
    <Example
      html={BlockAlign}
      caption="Block Alignment"
      expand
    />

  </div>

export default Alignment
