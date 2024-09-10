import React   from 'react'
import Badge   from '@/snippets/badge/badge.html?raw'
import Colors  from '@/snippets/badge/colors.html?raw'
import Sizes   from '@/snippets/badge/sizes.html?raw'
import Border  from '@/snippets/badge/border.html?raw'
import Tags    from '@/snippets/badge/tags.html?raw'
import { Example } from '@abw/badger-website'
import { BorderLink, ColorLink, SizeLink } from '@/site/Links.jsx'

const BadgesExamples = () =>
  <div className="prose flow">
    <h1>Badges</h1>
    <p>
      Add the <code>badge</code> class to an element to make it a badge.
    </p>
    <Example
      html={Badge}
      language="html"
      caption="Badge"
      expand
    />
    <h2>Badge Colors</h2>
    <p>
      Add any of the <ColorLink/> range classes to set the badge color.
    </p>
    <Example
      html={Colors}
      language="html"
      caption="Badge Colors"
      expand
    />

    <h2>Badge Sizes</h2>
    <p>
      Add any of the <SizeLink/> utility classesto
      set the badge size.
    </p>
    <Example
      html={Sizes}
      language="html"
      caption="Badge Sizes"
      expand
    />

    <h2>Badge Borders</h2>
    <p>
      Use any of the <BorderLink/> utility classes to modify the border width,
      radius or color stop.
    </p>
    <Example
      html={Border}
      language="html"
      caption="Badge Borders"
      expand
    />

    <h2>Badge Tags</h2>
    <p>
      Add the <code>tag</code> class to make the badge look like tag.
    </p>
    <Example
      html={Tags}
      language="html"
      caption="Badge Tags"
      expand
    />
  </div>

export default BadgesExamples