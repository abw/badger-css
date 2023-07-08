import React from 'react'
import Link from '../../ui/Link.jsx'

const Good = () =>
  <div className="mobile">
    <h1>What&apos;s Good About It?</h1>
    <p className="intro">
      If you&apos;re wondering what makes Badger CSS better than all the
      other CSS frameworks and UI toolkits out there then the short and
      simple answer is that it isn&apos;t.  It&apos;s just another one to
      add to the pile.
    </p>

    <h2>A Solid Foundation</h2>
    <p>
      Badger CSS is a collection of tools and techniques that I&apos;ve built
      up over many years (nearly 30) of building web sites.  It&apos;s what
      works for me and maybe it will work for you too.  But I&apos;m not making
      any promises.
    </p>
    <p>
      It&apos;s supposed to be a starting point, not a destination.  If
      you&apos;re building a web site and you want a reasonable foundation
      to build your styles on then it might be better for you than a more
      fully-featured toolkit that has everything including the kitchen sink.
    </p>

    <h2>Small(ish) and Simple</h2>
    <p>
      The default Badger CSS stylesheet is around 15kb minimised and
      compressed (around 100kb uncompressed).  That includes all 16 color
      ranges which you probably aren&apos;t ever going to need in practice.
      If you define your own palette with a limited set of colors then you
      can reduce the size a fair bit.
    </p>

    <h2>Modern CSS</h2>
    <p>
      It is based on modern CSS techniques and works in all modern browsers.
      In particular it makes heavy use of CSS custom properties that you can
      easily change as required. Behind the scenes it is built using SASS
      (specifically SCSS) which gives you more opportunities for configuring
      and extending it.
    </p>

    <h2>Color Management</h2>
    <p>
      Badger CSS uses a novel approach to defining and selecting{' '}
      <Link to="/colors/ranges" text="color ranges"/>.  The color palette
      was created using <a href="https://abw.github.io/badger-color">Badger
      Color</a> (which itself was created for this specific task) and you can
      use it to create your own custom palettes if necessary.
      The palette data that it generates can be automatically expanded out
      to SASS component files, ready to be used in Badger CSS.
    </p>
    <p>
      You can easily change the hues of the standard palette to match
      your <Link to="/colors/brand" text="brand colors"/>.  It will automatically
      create greyscale color ranges based on your primary brand color.
    </p>
    <p>
      The use of <Link to="/colors/variables" text="CSS custom properties"/>{' '}
      to define color ranges, and CSS class scopes to select them, makes it easy
      to create UI components that work automatically with any color range.
      It also makes it easy to define different color schemes for light and
      dark themes.
    </p>

    <h2>Utility Classes</h2>
    <p>
      Badger CSS comes with a core set of{' '}
      <Link to="/utilities" text="utility classes"/> for ad-hoc styling.
      They are intentionally limited to the kind of things that I find myself
      using all the time.  If you prefer the approach of{' '}
      <a href="https://tailwindcss.com/">Tailwind</a> that
      provides CSS classes for absolutely everything then you know where to
      find it.
    </p>
    <p>
      I&apos;m not knocking Tailwind, by the way.  CSS utility classes are
      an <em>extremely</em> useful set of tools to have in your toolkit.
      I just think they should be limited in their scope and not a
      replacement for writing &quot;proper&quot; CSS when it&apos;s more
      appropriate to do so.
    </p>

    <h2>Form Styling</h2>
    <p>
      Styling <Link to="/forms" text="forms"/> is not much fun.
      I have wasted many hours, days, even weeks of my life trying to
      get form styling just right and I never want to have to do it again.
    </p>
    <p>
      If you&apos;ve got better things to do than trying to figure out why
      your <code>select</code> component is 1 pixel shorter than your
      text <code>input</code> component then take a look at what Badger CSS
      has to offer.  It provides basic styles for all the standard form
      components and has smoothed over a lot of the problems so you don&apos;t
      have to worry too much about them.  Spend the time you save playing with
      your kids or flying a kite.
    </p>

    <h2>UI Components</h2>
    <p>
      Badger CSS has styling for a limited set of UI components (at the time
      of writing it&apos;s <em>very</em> limited, but more may be coming soon).
      It&apos;s not really supposed to be a complete UI toolkit (because
      the World already has enough of them), but rather to be a foundation
      on which UI toolkits can be built.
    </p>
    <p>
      Experience has taught me that off-the-shelf UI components (even ones
      that I&apos;ve written myself) often need a fair bit of tweaking to
      match the styling for a particular site.  Sometimes it&apos;s easier
      just to write them from scratch as they&apos;re needed.  CSS has come
      a long way since the days when we relied on toolkits like{' '}
      <a href="https://getbootstrap.com/">Bootstrap</a> to provide a consistent
      cross-browser experience.  Hopefully I will never again have to go
      searching through the Bootstrap source to figure out how they worked
      around a particular problem with IE.
    </p>
    <p>
      At the very least, I won&apos;t be adding many more UI components
      until a) I&apos;ve made it easy to select only the components that you
      want for a particular site and b) when I&apos;ve convinced myself
      that something can be added that&apos;s sufficiently generic to warrant
      inclusion.  Watch this space.
    </p>

  </div>

export default Good