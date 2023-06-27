import React from 'react'
import { ReactComponent as Badger } from '../svg/badger-css.svg'

const Index = () =>
  <div>
    <div className="mobile block-center">
      <Badger/>
      <p className="intro mar-t-8">
        Badger CSS provides modern, minimal CSS presets.
      </p>
      <p>
        You&apos;ve probably heard of CSS <i>reset</i> stylesheets that
        provide sensible defaults for HTML elements.  And no doubt you&apos;re
        aware of the plethora of fully-featured CSS toolkits that implement
        all manner of styles for UI components.
      </p>
      <p>
        Badger CSS sits somewhere between the two.  It provides some sensible{' '}
        <i>presets</i> for HTML elements that you can use out of the box and
        expect to get reasonable results.  It&apos;s highly configurable and
        is really designed to be a starting point for building your own CSS
        stylesheets.
      </p>
      <p>
        It&apos;s my personal collection of CSS styles and utility classes
        that I use on a daily basis in my job building web sites for clients.
        It&apos;s Open Source and you&apos;re welcome to use it, but be warned
        that it&apos;s something that I built for <i>me</i> to help <i>me</i>{' '}
        get my job done.  I didn&apos;t build it for you, or anyone else, and
        I don&apos;t really have the time or inclination to promote it, increase
        the user base or provide support for it.  It&apos;s not my intention
        for this to be the next great CSS toolkit - there are plenty of those
        already.
      </p>
      <p>
        If you have a good working knowledge of modern CSS and SASS then you
        should be able to easily adapt it to your needs.  Nearly everything
        is customisable, either through SASS variables, CSS custom properties,
        or by using the provided scripts to build your own toolkit.
      </p>
      <p>
        You don&apos;t need to
        buy in to the whole package. Feel free to browse the source code and
        borrow the bits that you think are useful.  But be warned that
        you&apos;re on your own.  If you&apos;re looking for a fully-featured,
        widely used and well supported UI toolkit then there are plenty of
        others to choose from.  These aren&apos;t the badgers you&apos;re
        looking for.  You can go about your business.  Move along.
      </p>
      <p>
        On the plus-side, the Badger-UI toolkit contains a lot of tried and
        tested techniques for managing web site styles that have been honed
        over nearly 30 years of experience.  It contains the features that I
        can&apos;t live without when I&apos;m building a web site.  Of course,
        you may have different ideas about the best way to do it, but this
        is what works for me.
      </p>
      <p>
      </p>
    </div>
  </div>

export default Index
