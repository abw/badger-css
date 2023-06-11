import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import define from  './vite.defs.js'
import svgr from 'vite-plugin-svgr'
import copy from 'rollup-plugin-copy'

export default defineConfig({
  plugins: [
    react(),
    svgr(),
  ],
  define,
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './test/setup.js',
    include: ['test/**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    exclude: ['test/setup.js', 'test/lib'],
    coverage: {
      provider: 'c8',
      reporter: ['html']
    }
  },
  build: {
    minify: true,
    sourcemap: false,
    lib: {
      entry: 'lib/index.jsx',
      name: '@abw/badger-css',
      fileName: 'badger-css',
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'react/jsx-runtime'
      ],
      output: {
        globals: {
          'react': 'react',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'react/jsx-runtime'
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
              src: 'src/config/*',
              dest: 'dist/config',
            },
            {
              src: 'bin/*',
              dest: 'dist/bin',
              transform: (contents) =>
                contents.toString().replace('../src/config/', '@abw/badger-css/config/')
            },
          ],
          hook: 'writeBundle'
        })
      ]
    },
  },
})
