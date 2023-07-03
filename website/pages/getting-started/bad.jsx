import React from 'react'

const Bad = () =>
  <div className="mobile block-center prose">
    <h1>Why Shouldn&apos;t I Use It?</h1>
    <p className="intro">
      There are many, many CSS toolkits and UI frameworks already out there
      to choose from.
      If you&apos;re looking for something that&apos;s stable, reliable,
      comprehensive and well-supported then this probably isn&apos;t for you.
    </p>
    <h2>Work in Progress</h2>
    <p>
      This is a work in progress.  It started out life as an ad-hoc collection
      of CSS classes that I copy and pasted between projects.  Then it became
      part of Bader UI, a collection of React components implementing some
      basic UI widgets.  Now it&apos;s being moved out into its own module
      which concentrates on just the CSS without any dependency on React.
    </p>
    <p>
      One of the reasons that I&apos;m moving it into a new module is because
      it gives me the opportunity to break backwards compatibility.  There
      are some things that, given the chance to do again, I would do differently.
      This gives me that chance and hopefully I won&apos;t make too many
      bad decisions that I later come to regret.  But until I&apos;ve had a
      chance to eat my own dog food and build a few sites with it, I can&apos;t
      predict what&apos;s going to work well and what isn&apos;t.
    </p>
    <p>
      I&apos;m also migrating everything to use modern CSS techniques which
      are now well supported by browsers.  That means that a lot of things
      that were previously hard become much easier.  But different.
    </p>
    <p>
      As a result, this module is still in a state of flux.  If you build
      anything with it now then there&apos;s a good chance that something
      will break in the near future.
    </p>

    <h2>Opinionated and Selfish Software</h2>
    <p>
      This is based on my personal collection of CSS styles and utility
      classes that I use on a daily basis in my job building web sites for
      clients. It&apos;s Open Source and you&apos;re welcome to use it but
      be aware that it&apos;s something that I built for <em>me</em> to help{' '}
      <em>me</em> get my job done.
    </p>
    <p>
      I didn&apos;t build it for you (unless you&apos;re one of my clients)
      and I don&apos;t really have the time or inclination to promote it,
      increase the user base or provide unpaid support for it.  It&apos;s
      not my intention for this to be the next great CSS toolkit - there are
      plenty of those already. My goal isn&apos;t to change the World, only
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

export default Bad