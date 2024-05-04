import React from 'react'
import { WidthLink } from '@/site/Links.jsx'

const ConformExamples = () =>
  <div className="flow">
    <h1>Conform</h1>
    <p className="mar-b-none">
      The <code>conform</code> class creates a fluid container that
      stretches to the full width of the parent element with some padding
      on each side.
    </p>
    <p>
      By itself it&apos;s not particularly interesting.  There&apos;s really
      not much difference between this and defining an element with horizontal
      padding, e.g. using <code>pad-h-8</code>...
    </p>

    <div className="conform surface-2 border flow pad-v-6">
      <h3 className="font-mono">conform</h3>
      <p className="mar-b-none">
        We&apos;re very lucky in the sense that we&apos;ve got two visionaries
        in the band.  David and Nigel are both like, uh, like poets, you know,
        like Shelley or Byron, or people like that. The two totally distinct
        types of visionaries.  It&apos;s like fire and ice, basically, you see,
        and I feel my role in the band, is to be kind of in the middle of that,
        kind of like lukewarm water, in a sense.
      </p>
    </div>

    <h2>Breakpoint Widths</h2>

    <div className="conform-mobile surface-2 border pad-v-6">
      <h3 className="font-mono">conform-mobile</h3>
      <p className="mar-v-4">
        ...but it gets more interesting when you add a breakpoint suffix to
        set the conform width, e.g. <code>conform-mobile</code>.  Now the
        conform will be centered and contained to the breakpoint size.
      </p>
      <p>
        Now you may be wondering how this is any different to using the{' '}
        <code>mobile</code> class to set the width and{' '}
        <code>block-center</code> to center it?  Well it all comes down to
        being able to break out of the box.
      </p>
      <section className="popout blue bgc-30 fgc-90 pad-v-6">
        <h3 className="fgc-100 font-mono">popout</h3>
        <p className="mar-t-4 mar-b-none">
          This is a popout section.  It&apos;s pushed out a bit wider than the
          normal conform.
        </p>
      </section>
      <p className="mar-v-4">
        He did a twist on it. A twist and it... He did, he did. He turned it
        around. We shoulda thought of that. We were so close. I mean if we
        had all you guys tied up, that probably woulda been fine.
      </p>
      <section className="feature indigo bgc-30 fgc-90 pad-v-6">
        <h3 className="fgc-100 font-mono">feature</h3>
        <p className="mar-t-4 mar-b-none">
          This is a feature section.  It&apos;s pushed out even further than the
          normal conform.  How much more wider could this be? And the answer
          is...
        </p>
      </section>

      <p className="mar-v-4">
        But it&apos;s, it&apos;s still a stupid cover. It&apos;s such a fine
        line between stupid and... and clever. Yeah, and clever. Just that
        little turnabout...
      </p>

      <section className="full-width violet bgc-30 fgc-90 pad-h-8 pad-v-6">
        <h3 className="fgc-100 font-mono">full-width</h3>
        <p className="mar-t-4 mar-b-none">
          ...a lot wider!  This is a full-width section.  You see, most... most blokes,
          you know, will be playing at ten. You&apos;re on ten here...
          all the way up... all the way up... all the way up.
          You&apos;re on ten on your guitar...where can you go from there?
          Where? Nowhere. Exactly. What we do is if we need that extra...
          push over the cliff... you know what we do? Put it up to eleven.
          Eleven. Exactly. One louder.
        </p>
      </section>

      <p className="mar-v-4">
        I do not, for one, think that the problem was that the band was down.
        I think that the problem may have been...that there was a Stonehenge
        monument on the stage that was in danger of being crushed by a dwarf.
        Alright? That tended to understate the hugeness of the object.
      </p>

      <section className="full-width conform-mobile purple bgc-30 fgc-90 pad-v-6">
        <h3 className="fgc-100 font-mono">conform-mobile</h3>
        <p className="mar-t-4 mar-b-none">
          You can add a conform class to a full-width section and it will
          contain the conform.  So you get a full width background, but
          contained conform.
        </p>
      </section>
      <p className="mar-t-4 mar-b-none">
        And I don&apos;t think that a sexy cover is the answer for why an
        album sells or doesn&apos;t sell because you tell me, the
        &quot;White Album&quot;, what was that? There was nothing on that
        goddamn cover.
      </p>
    </div>

    <h2>Rem / px Widths</h2>
    <div className="conform-20rem surface-2 border pad-t-6">
      <h3 className="font-mono">conform-20rem</h3>
      <p className="mar-t-4">
        You can add any of the <code>-Nrem</code> or <code>-Npx</code> suffixes
        to the conform class and the conform will be set to that width.
        See the <WidthLink/> utilities page.
      </p>
      <p className="mar-v-4">
        It&apos;s a matter of compromise, we made a joke, and it was a long
        time ago, they&apos;re making it like a big deal. That&apos;s true.
        You know, if we were serious and we said &quot;yes she should be
        forced to sniff... smell the glove&quot; then you&apos;d have a
        point you know but it&apos;s all a joke, isn&apos;t it, we&apos;re
        making fun of that sort of thing. It is and it isn&apos;t, she
        should be made to smell it, but... But not you know over and over
        again.
      </p>
      <section
        className="full-width conform-20rem maroon bgc-30 fgc-90 pad-v-6"
        style={{'--link-text': 'var(--color-70)', '--link-hover': 'var(--color-80)'}}
      >
        <p className="mar-v-none large">
          Shout out to{' '}
          <a href="https://www.youtube.com/watch?v=c13gpBrnGEw">Kevin Powell</a> and{' '}
          <a href="https://ryanmulligan.dev/blog/layout-breakouts/">Ryan Mulligan</a>{' '}
          for this technique!
        </p>
      </section>
    </div>
  </div>

export default ConformExamples
