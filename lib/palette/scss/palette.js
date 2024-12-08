import { exportSCSSRange } from './range.js'
import { brightGreen } from '@abw/badger'
import { chunkNames, expandColorScopes, longestName, warning } from '../utils.js'
import { fail } from '@abw/badger-utils'
import { defaultBrandColor, defaultSemanticColors, defaultSelectors } from './defaults.js'

export async function exportSCSSPalette({
  script,
  palette,
  output,
  verbose,
  rangeDir='range',
  paletteFile='palette.scss',
  brandColor=defaultBrandColor,
  brandColors={ brand: brandColor },
  extraSemanticColors={},
  semanticColors={ ...defaultSemanticColors, ...extraSemanticColors },
  extraSelectors={},
  selectors={ ...defaultSelectors, ...extraSelectors },
  colorScopes=expandColorScopes(semanticColors, selectors),
}) {
  const ranges = Object.entries(palette.ranges)
  let uris = [ ]

  // output sub-directory for colors
  const cdir = rangeDir
    ? output.dir(rangeDir)
    : output

  await cdir.mustExist({ create: true })

  // output each range into its own file
  for (let entry of ranges) {
    const [uri, range] = entry
    uris.push(uri)
    range.uri ||= uri
    const file = await exportSCSSRange({
      script,
      palette,
      uri,
      range,
      output: cdir
    })
    if (verbose) {
      console.log(brightGreen(`  ✔︎ Exported ${uri} range to ${file}`))
    }
  }

  // output an index file which imports them all
  if (paletteFile) {
    const cfile = output.file(paletteFile)
    const text  = SCSSPaletteIndex({
      script,
      palette,
      rangeDir,
      colorScopes,
      brandColor,
      brandColors
    })
    await cfile.write(text)
    if (verbose) {
      console.log(brightGreen(`  ✔︎ Exported palette index file to ${cfile}`))
    }
  }
}


export function SCSSPaletteIndex({
  script,
  palette,
  rangeDir,
  colorScopes,
  brandColor,
  brandColors={ brand: brandColor }
}) {
  const uris = Object.keys(palette.ranges)
  const range = palette.ranges[uris[0]]   // just to get stops
  const brandRange = palette.ranges[brandColor]
    || fail(`Brand color $${brandColor} not defined in palette ranges`)
  const brandHue = brandRange.hue

  // Map of brand colors, e.g.
  // $brand-colors: (
  //   'primary': 'blue',
  //   'secondary': 'purple',
  // )
  const brands = Object.entries(brandColors)
    .map(
      ([name, color]) => `  ${name}: ${name === 'brand' ? '$brand-color' : `'${color}'`}`
    )
    .join(',\n')

  const predefs = `
$default-color: 'grey' !default;
$brand-color:   '${brandColor}' !default;
$brand-hue:     ${brandHue} !default;
$grey-hue:      $brand-hue !default;
$grey20-hue:    $brand-hue !default;
$grey40-hue:    $brand-hue !default;
$black:         #000 !default;
$white:         #fff !default;
$brand-colors: (\n${brands}\n) !default;
`

  // List of import statements for each color, e.g.
  // @import "color/red.scss";
  // @import "color/orange.scss";
  // ...etc...
  const imports = uris.map(
    uri => `@import "${rangeDir}/${uri}.scss";`
  ).join('\n')

  // List of color names, e.g.
  // $color-names: 'red', 'orange', ...etc..., 'grey' !default;
  const names  = uris.map( uri => `'${uri}'`)
  const cnames = `$color-names:\n  ${chunkNames(names)} !default;`

  // List of color stops, e.g.
  // $color-stops: '0', '5', ...etc..., '95', '100' !default;
  const stops  = Object.keys(range.stops).map( stop => `'${stop}'`)
  const cstops = `$color-stops:\n  ${chunkNames(stops)} !default;`

  // Map of color hues, e.g.
  // $hues: (
  //   'red':     $red-hue,
  //   'orange':  $orange-hue,
  //   ...etc...
  // ) !default;
  const maxLength = longestName(uris)
  const padded = uris.reduce(
    (padded, uri) => {
      padded[uri] = `'${uri}':`.padEnd(maxLength + 3)
      return padded
    },
    { }
  )
  const hues = uris.map(
    uri => `  ${padded[uri]} $${uri}-hue,`
  ).join('\n')
  const chues = `$color-hues: (\n${hues}\n) !default;`

  // Map of color ranges, e.g.
  // $color-ranges: (
  //    'red':    $red-stops,
  //    'orange': $orange-stops,
  //    ...etc...
  // ) !default;
  const ranges = uris.map(
    uri => `  ${padded[uri]} $${uri}-range,`
  ).join('\n')
  const cranges = `$color-ranges: (\n${ranges}\n) !default;`


  // Map of color scopes, e.g.
  // $color-scopes: (
  //   blue: '.info, .focus',
  //   red:  '.error, .invalid
  // )
  const scopes = Object.entries(colorScopes).map(
    ([color, scope]) => `  ${padded[color]} '${scope}',`
  ).join('\n')
  const cscopes = `$color-scopes: (\n${scopes}\n) !default;`


  // Code to iterate over color names and color stops
  const expanders = `// expand all color names and stops
:where(html) {
  @each $name in $color-names {
    $range: map.get($color-ranges, $name);
    @each $stop in $color-stops {
  --#{$name}-#{$stop}: #{map.get($range, $stop)};
    }
  }
  @each $brand, $name in $brand-colors {
    @each $stop in $color-stops {
  --#{$brand}-#{$stop}: var(--#{$name}-#{$stop});
    }
  }

  @each $stop in $color-stops {
  --color-#{$stop}: var(--#{$default-color}-#{$stop});
  }
}

// expand all .color scopes
@each $name in $color-names {
  $range: map.get($color-ranges, $name);
.#{$name} {
  @each $stop in $color-stops {
  --color-#{$stop}: var(--#{$name}-#{$stop});
  }
}
}

// expand all .brand scopes
@each $brand, $name in $brand-colors {
.#{$brand} {
  @each $stop in $color-stops {
  --color-#{$stop}: var(--#{$name}-#{$stop});
  }
}
}

// expand all custom scopes
@each $name, $scopes in $color-scopes {
  $range: map.get($color-ranges, $name);
#{$scopes} {
  @each $stop in $color-stops {
  --color-#{$stop}: var(--#{$name}-#{$stop});
  }
}
}
`

  return [
    warning(script),
    '@use "sass:map";',
    predefs,
    imports,
    '',
    cnames,
    '',
    cstops,
    '',
    chues,
    '',
    cranges,
    '',
    cscopes,
    '',
    expanders
  ].join('\n')
}
