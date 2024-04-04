import React      from 'react'
import Example    from '@/site/Example.jsx'
import Icon       from '@/snippets/icons/icon.html?raw'
import IconSizes  from '@/snippets/icons/sizes.html?raw'
import IconColors from '@/snippets/icons/colors.html?raw'
import IconStops  from '@/snippets/icons/stops.html?raw'
import IconStyle  from '@/snippets/icons/style.html?raw'
import IconCustom from '@/snippets/icons/custom.html?raw'
import IconSpin   from '@/snippets/icons/spin.html?raw'
import IconBeat   from '@/snippets/icons/beat.html?raw'
import Note       from '@/site/Note.jsx'
import Split from '@/site/Split.jsx'

const IconsExamples = () =>
  <div className="flow prose">
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

    <h2>Sizing</h2>
    <p>
      Icons are sized in em units meaning they scale with text in different
      sizes.
    </p>
    <Example
      html={IconSizes}
      language="html"
      caption="Icon Sizes"
    />

    <h2>Fill and Stroke Colors</h2>
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
    <Split align="bottom">
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
      <Note>
        CSS styles can only be applied to inline SVG elements.  They
        don&apos;t work for SVG images loaded using the <code>img</code>{' '}
        tag or applied using a <code>background-image</code> style.
      </Note>
    </Split>
    <Example
      html={IconStyle}
      language="html"
      caption="Icon Style"
    />
    <p>
      You can also use the <code>flc-N</code> and <code>stc-N</code> classes
      to set the fill color or stroke color of an SVG element to a stop in
      the current palette.  The <code>fld-N</code> and <code>std-N</code> classes
      allow you to set different fill or stroke color stops for dark mode.
    </p>
    <Example
      html={IconStops}
      language="html"
      caption="Icon Style"
    />

    <h2>Custom Styling</h2>
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

    <h2>Animation Effects</h2>
    <Split align="end">
      <div>
        <p>
          The <code>spin</code> CSS class will make the icon spin.  Ideal for
          spinners!  Add the <code>reverse</code> class to reverse the direction.
        </p>
        <p>
          The default animation time is 2s.  You can add the <code>fast</code> CSS
          class to double the speed (animation time is 1s) or <code>slow</code> to
          halve it (animation time is 4s).  Or you can set the{' '}
          <code>--icon-animation-time</code> property to anything you like.
        </p>
      </div>
      <Note>
        These animations are disabled if the user&apos;s browser has
        the <code>prefers-reduced-motion</code> option set to <code>reduce</code>.
      </Note>
    </Split>
    <Example
      html={IconSpin}
      language="html"
      caption="Icon Spin"
    />

    <Split align="end">
      <div>
        <p>
          The <code>beat</code> CSS class will make the icon beat.
        </p>
        <p>
          The default animation time here is 1s.  The <code>fast</code> class
          doubles the speed (animation time is 0.5s) and the <code>slow</code> class
          halves it (animation speed is 2s).
        </p>
      </div>
    </Split>
    <Example
      html={IconBeat}
      language="html"
      caption="Icon Beat"
    />

  </div>

export default IconsExamples