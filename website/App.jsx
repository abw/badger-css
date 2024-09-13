import React    from 'react'
import site     from '@/config/site.js'
import sidebar  from '@/config/sidebar.js'
import { MDXProvider } from '@mdx-js/react'
import { SiteProvider, mdxComponents } from '@abw/badger-website'
import './styles/website.scss'

const pages = import.meta.glob(
  './pages/**/[a-z_]*.{jsx,mdx}',
  { eager: true }
)

const snippets = import.meta.glob(
  './snippets/**/*',
  {
    query: '?raw',
    import: 'default',
  }
)

// Hmmm... this MDXProvider shouldn't be required as it should be included
// in SiteProvider, but it doesn't work.

const App = () =>
  <MDXProvider components={mdxComponents}>
    <SiteProvider
      site={site}
      pages={pages}
      sidebar={sidebar}
      snippets={snippets}
    />
  </MDXProvider>

export default App