import React        from 'react'
import Split        from '@/site/Split.jsx'
import Shadows      from '@/snippets/shadow/shadows.html?raw'
import ShadowStyle  from '@/snippets/shadow/style.html?raw'
import { Example }  from '@abw/badger-website'

const ShadowsExamples = () =>
  <div className="prose flow">
    <h1>Shadows</h1>
    <h2>Shadow Classes</h2>
    <p>
      Use the <code>shadow-1</code>, <code>shadow-2</code>,{' '}
      <code>shadow-3</code>, <code>shadow-4</code> and <code>shadow-5</code>{' '}
      CSS classes to add a box shadow of progressively larger size.  Larger
      shadows can be used to suggest that an element is lifted higher off the
      background and thus appears closer to the foreground.
    </p>
    <Example
      html={Shadows}
      caption="Shadows"
      expand
    />

    <h2>Shadow Properties</h2>
    <Split>
      <p>
        The shadow styles are defined as CSS custom properties, (e.g.{' '}
        <code>--shadow-1</code>, <code>--shadow-2</code>, etc).  The colors and
        opacities used for the shadows depend on both the shadow depth and color
        theme.  For the default light theme the base color is{' '}
        <code>--grey-0</code> and the shadows are more transparent.  For the
        dark theme, where shadows need to be a bit more prominent to be visible,
        the base color is <code>black</code> and the shadows are more opaque.
      </p>
      <p>
        The benefit of CSS custom properties is that you can easily apply them
        to your own style rules.  In this example we define a{' '}
        <code>.shadow-example</code> rule which adds a <code>box-shadow</code> using
        the <code>--shadow-2</code> custom property.  The shadow color will
        be set correctly for both light and dark themes so you don&apos;t need
        to worry about defining separate rules for each.
      </p>
    </Split>
    <Example
      html={ShadowStyle}
      caption="Shadow Style"
      expand
    />
  </div>

export default ShadowsExamples
