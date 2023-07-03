import React       from 'react'
import Example     from '../../site/Example.jsx'
import Icon        from '../../snippets/icons/icon.html?raw'
import IconSizes   from '../../snippets/icons/icon-sizes.html?raw'
import IconColors  from '../../snippets/icons/icon-colors.html?raw'
import IconStyle   from '../../snippets/icons/icon-style.html?raw'
import IconCustom  from '../../snippets/icons/icon-custom.html?raw'
import Note from '../../site/Note.jsx'

const IconsExamples = () =>
  <div className="prose">
    <h1>Icons</h1>
    <p>
      Some basic styles are included for SVG icons. Add the <code>icon</code>{' '}
      class to an inline SVG image to use them.
    </p>
    <Example
      html={Icon}
      language="html"
      caption="Icon"
    />
    <p>
      Icons are sized in em units meaning they scale with text in different
      sizes.
    </p>
    <Example
      html={IconSizes}
      language="html"
      caption="Icon Sizes"
    />
    <p>
      SVG icons can use <code>currentColor</code> for either the{' '}
      <code>fill</code> or <code>stroke</code> properties to inherit the
      current text color.
    </p>
    <Example
      html={IconColors}
      language="html"
      caption="Icon Colors"
    />
    <div className="grid-2 gap-8 stack-desktop">
      <div>
        <p>
          SVG elements can use the <code>fill-fg</code> and <code>fill-bg</code>{' '}
          classes to set the fill color to the current foreground or background
          colors respectively.  Similarly the <code>stroke-fg</code> and{' '}
          <code>stroke-bg</code> will set the stroke color to the foreground or{' '}
          background color.
        </p>
        <p>
          These CSS rules are scoped to all <code>svg</code> elements rather
          <code>svg.icon</code> specifically.  So you can use them in any
          SVG images, not just icons.
        </p>
      </div>
      <div>
        <Note>
          CSS styles can only be applied to inline SVG elements.  They
          don&apos;t work for SVG images loaded using the <code>img</code>{' '}
          tag or applied as a <code>background-image</code> style.
        </Note>
      </div>
    </div>
    <Example
      html={IconStyle}
      language="html"
      caption="Icon Style"
    />
    <p>
      You can define your own styles to target different elements in an
      SVG icon.  This example illustrated the use of generic{' '}
      <code>--color-N</code> variables to set the fill and stroke styles
      on elements in an icon.  The only thing that&apos;s determining the
      color range is the <code>blue</code> class on the <code>svg</code>{' '}
      element.  Change that to the name of any other color range and the
      styles will work equally well.
    </p>
    <p>
      Also note the use of the{' '}
      <code>--unfilled</code> custom property which sets the background
      color for the unchecked checkbox.  This allows us to set different
      color stops for use in light and dark themes.
    </p>
    <Example
      html={IconCustom}
      language="html"
      caption="Icon Style"
    />
  </div>

export default IconsExamples