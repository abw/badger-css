import React        from 'react'
import Example      from '../../site/Example.jsx'
import ColorClasses from '../../snippets/html/color-classes.html?raw'
import ColorInherit from '../../snippets/html/color-inherit.html?raw'
import ColorComps   from '../../snippets/html/color-components.html?raw'
import ColorCustom  from '../../snippets/html/color-custom.html?raw'

const Colors = () =>
  <>
    <h1>Color Utilities</h1>
    <h2>Color Classes</h2>
    <p>
      Each of the color ranges defined in your palette has a corresponding
      class. For example, the <code>violet</code> class can be used to select
      the violet color range.
    </p>
    <p>
      This doesn&apos;t have much of a visible effect by itself.  The important
      things is that it maps the <code>--color-N</code> CSS custom properties
      to the equivalent stops from the selected color range.  For example, in
      the scope of the <code>violet</code> CSS class, the
      <code>--color-0</code> property is mapped to <code>--violet-0</code>,{' '}
      <code>--color-5</code> is mapped to <code>--violet-5</code>,{' '}
      <code>--color-10</code> to <code>--violet-10</code> and so on, all the
      way to 100.
    </p>
    <h2>Foreground, Background and Border Colors</h2>
    <p>
      The <code>fg-N</code>, <code>bg-N</code> and <code>bd-N</code> classes
      can be used to select a stop from the color range for the foreground,
      background and border colors, respectively.
    </p>
    <p>
      For example, the <code>bg-80</code> CSS class will set the background
      color to whatever color is mapped to <code>--color-80</code>.  In the scope
      of the <code>violet</code> CSS class, that will be <code>--violet-80</code>.
    </p>
    <Example
      html={ColorClasses}
      caption="Color Classes"
      expand
    />
    <h2>Color Inheritance</h2>
    <p>
      CSS custom properties are inherited by child elements.  This means you
      can select a color range on an element and all children will inherit
      that color range.
    </p>
    <Example
      html={ColorInherit}
      caption="Color Inheritance"
      expand
    />

    <h2>Easy Component Coloring</h2>
    <p>
      This effect is used by various badger-css components. They use the
      generic <code>--color-N</code> properties to define colors and can then
      be rendered using any color range.
    </p>
    <Example
      html={ColorComps}
      caption="Color Components"
    />
    <h2>Creating Your Own Colored Components</h2>
    <p>
      You can employ this in your own components by using the{' '}
      <code>--color-N</code> CSS custom properties to define your component
      colours.
    </p>
    <p>
      This is particularly useful when implementing components for both light
      and dark themes.  You only need to specify which <code>--color-N</code> stops
      you want to use in each case.  You don&apos;t need to write separate CSS
      rules for each of the colors you might want to use.
    </p>
    <Example
      html={ColorCustom}
      caption="Custom Components"
    />
  </>

export default Colors
