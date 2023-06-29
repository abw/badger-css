import React from 'react'
import { ReactComponent as Badger } from '../svg/badger-css.svg'

const Index = () =>
  <div>
    <div className="mobile block-center pad-t-8">
      <Badger className="badger-css"/>
      <h1 className="intro mar-t-8">
        Modern, minimal CSS presets
      </h1>
      <p>
        You&apos;ve probably heard of CSS <b>reset</b> stylesheets that
        provide sensible defaults for HTML elements to smooth out some of
        the inconsistencies between browser.  And no doubt you&apos;re
        aware of the plethora of fully-featured CSS <b>toolkits</b> that
        implement all manner of styles for UI components.
      </p>
      <p>
        Badger CSS sits somewhere between the two.  It provides some sensible{' '}
        <b>presets</b> for HTML elements that you can use out of the box and
        expect to get reasonable results.  It&apos;s highly configurable and
        is really designed to be a starting point for building your own CSS
        stylesheets, design systems and UI toolkits.
      </p>
      <p>
        But first, some words of warning...
      </p>
      <h2>Opinionated and Selfish Software</h2>
      <p>
        This is based on my personal collection of CSS styles and utility
        classes that I use on a daily basis in my job building web sites for
        clients. It&apos;s Open Source and you&apos;re welcome to use it but
        be aware that it&apos;s something that I built for <b>me</b> to help{' '}
        <b>me</b> get my job done.
      </p>
      <p>
        I didn&apos;t build it for you (unless you&apos;re one of my clients)
        and I don&apos;t really have the time or inclination to promote it,
        increase the user base or provide unpaid support for it.  It&apos;s
        not my intention for this to be the next great CSS toolkit - there are
        plenty of those already. The goal isn&apos;t to change the World, only
        to make it a slightly better place.
      </p>
      <p>
        So be warned that it does things the way I like to do them.  You
        may not agree with all my decisions, but that&apos;s fine.  They&apos;re
        my decisions to make, not yours.  It&apos;s free software (in both
        senses: free speech and free beer) and if you don&apos;t like it then
        you&apos;re entitled to a full refund of the price you paid.
      </p>
      <p>
        On the plus-side, the Badger-UI toolkit contains a lot of tried and
        tested techniques for managing web site styles that have been honed
        over nearly 30 years of experience.  It contains the features that I
        can&apos;t live without when I&apos;m building a web site.  Of course,
        you may have different ideas about the best way to do it, but this
        is what works for me.  It&apos;s supposed to be a reasonable starting
        point not the final destination.
      </p>
      <h2>Some Assembly Required</h2>
      <p>
        If you have a good working knowledge of modern CSS and SASS then you
        should be able to easily adapt it to your needs.  Nearly everything
        is customisable, either through SASS variables, CSS custom properties,
        or by using the provided scripts to build your own toolkit.
      </p>
      <p>
        You don&apos;t need to buy in to the whole package.  As well as being
        customisable it&apos;s also modular.  With a small amount of effort
        you can configure it to include the bits your want and ignore the rest.
        Or you can browse the source code and borrow the <i>ideas</i> that you
        think are useful.
      </p>
      <p>
        Just remember that this is aimed more at people who already know how
        to build web sites and are familiar with CSS. If you&apos;re looking
        for a fully-featured, widely used and well supported UI toolkit that
        does everything for you then there are plenty of
        others to choose from.
      </p>
      <p>
        If you don&apos;t like the sound of that then these probably
        aren&apos;t the badgers you&apos;re looking for.  You can go about
        your business. Move along.
      </p>
    </div>
  </div>

export default Index
