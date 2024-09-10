// These constants are replaced by Vite.  See the vite.defs.js file in the
// root directory where they are defined.  They are included as the define
// options in vite.config.js and vite.docs.js

// eslint-disable-next-line no-undef
export const version = PACKAGE_VERSION
// eslint-disable-next-line no-undef
export const date = BUILD_DATE

export const start = '2018'
export const year  = date.match(/^(\d+)/)[1]
export const copyright = year === start ? year : `${start} - ${year}`

const site = {
  title:      'Badger CSS',
  author:     'Andy Wardley',
  authorLink: 'https://github.com/abw',
  repository: 'https://github.com/abw/badger-css',
  basename:    import.meta.env.BASE_URL,
  badgerpower: true,
  version,
  date,
  copyright,
}

export default site