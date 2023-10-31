import { defineConfig } from 'vite'
import define from  './vite.defs.js'
import copy from 'rollup-plugin-copy'

const PACKAGE_NAME = 'badger-css'
const PACKAGE_DIST = `@abw/badger-css`

export default defineConfig({
  define,
  build: {
    minify: true,
    sourcemap: false,
    lib: {
      entry: 'lib/index.js',
      name: PACKAGE_DIST,
      fileName: PACKAGE_NAME,
    },
    rollupOptions: {
      external: [
        '@abw/badger',
        '@abw/badger-filesystem',
        '@abw/badger-utils'
      ],
      output: {
        globals: {
          '@abw/badger': '@abw/badger',
          '@abw/badger-filesystem': '@abw/badger-filesystem',
          '@abw/badger-utils': '@abw/badger-utils'
        },
      },
      plugins: [
        copy({
          targets: [
            {
              src: 'styles/*',
              dest: 'dist/styles',
            },
            {
              src: 'config/*',
              dest: 'dist/config',
            },
            {
              src: 'bin/badger-css-palette-scss.js',
              dest: 'dist/bin',
              transform: (contents) =>
                contents
                  .toString()
                  .replace(
                    "'PACKAGE_VERSION'",
                    define.PACKAGE_VERSION
                  )
                  .replace(
                    '../lib/index.js',
                    PACKAGE_DIST
                  )
            },
          ],
          hook: 'writeBundle'
        })
      ]
    },
  },
})
