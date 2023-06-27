import chroma from 'chroma-js'

export function colorToHSL(color) {
  const c = chroma(color)
  const [hue, sat, lig] = c.hsl()
  const h = isNaN(hue) ? 0 : Math.round(hue)
  const s = Math.round(sat * 100)
  const l = Math.round(lig * 100)
  return { h, s, l }
}

export function hslToChroma(hsl) {
  const { h, s, l } = hsl
  return chroma.hsl(h, s / 100, l / 100)
}

export const hslToHex = hsl =>
  hslToChroma(hsl).hex()

export const hslToLuminance = hsl =>
  hslToChroma(hsl).luminance()

export const hslToGrey = hsl =>
  chroma.hsl(
    0, 0,
    hslToLuminance(hsl)
  ).hex()

export const hslToCSS = hsl =>
  `hsl(${hsl.h} ${hsl.s}% ${hsl.l}%)`

export const dark = hsl =>
  hslToLuminance(hsl) < 0.5
