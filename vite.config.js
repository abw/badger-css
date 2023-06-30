import { defineConfig } from 'vite'
import define from  './vite.defs.js'
import copy from 'rollup-plugin-copy'

export default defineConfig({
  define,
  build: {
    minify: true,
    sourcemap: false,
    lib: {
      entry: 'lib/index.js',
      name: '@abw/badger-css',
      fileName: 'badger-css',
    },
    rollupOptions: {
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
            /*
            {
              src: 'bin/*',
              dest: 'dist/bin',
              transform: (contents) =>
                contents.toString().replace('../src/config/', '@abw/badger-css/config/')
            },
            */
          ],
          hook: 'writeBundle'
        })
      ]
    },
  },
})
