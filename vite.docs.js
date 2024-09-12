import { defineConfig } from 'vite'
import mdx              from '@mdx-js/rollup'
import react            from '@vitejs/plugin-react'
import svgr             from 'vite-plugin-svgr'
import jsconfigPaths    from 'vite-jsconfig-paths'
import rehypeCodeProps  from 'rehype-mdx-code-props'
import define           from  './vite.defs.js'

export default defineConfig({
  plugins: [
    {
      enforce: 'pre',
      ...mdx({
        rehypePlugins: [rehypeCodeProps],
        providerImportSource: '@mdx-js/react'
      })
    },
    react({
      include: /\.(jsx|mdx)$/
    }),
    svgr(),
    // jsconfigPaths()
    jsconfigPaths({ root: '../' })
  ],
  root: 'website',
  base: '/badger-css/',
  define,
  build: {
    emptyOutDir: true,
    outDir: '../docs',
    chunkSizeWarningLimit: 850
  }
})

