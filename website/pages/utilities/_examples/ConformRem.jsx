import React from 'react'
import { WidthLink } from '@/site/Links.jsx'

const ConformRem = () =>
  <div className="conform-20rem surface-2 border pad-t-6">
    <h3 className="font-mono">conform-20rem</h3>
    <p>
      You can add any of the <code>-Nrem</code> or `-Npx` suffixes to the
      conform class and the conform will be set to that width. See the
      <WidthLink/> utilities page.
    </p>
    <p>
      It&apos;s a matter of compromise, we made a joke, and it was a long time ago,
      they&apos;re making it like a big deal. That&apos;s true. You know, if we were
      serious and we said &quot;Yes, she should be forced to sniff... smell the
      glove&quot; then you&apos;d have a point you know but it&apos;s all a joke, isn&apos;t it,
      we&apos;re making fun of that sort of thing. It is and it isn&apos;t, she should
      be made to smell it, but... But not, you know, over and over again.
    </p>
    <section
      className="full-width conform-20rem maroon bgc-30 fgc-90 pad-v-6"
      style={{'--link-text': 'var(--color-70)', '--link-hover': 'var(--color-80)'}}
    >
      <div className="mar-v-none large">
        Shout out to{' '}
        <a href="https://www.youtube.com/watch?v=c13gpBrnGEw">Kevin Powell</a> and{' '}
        <a href="https://ryanmulligan.dev/blog/layout-breakouts/">Ryan Mulligan</a>{' '}
        for this technique!
      </div>
    </section>
  </div>

export default ConformRem
