import palette from '../../config/badger-css-palette.json'

export const colors = Object.keys(palette.ranges)
export const stops = [
  0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100
]
export { palette }

export default colors
