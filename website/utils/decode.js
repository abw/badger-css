import { splitList } from '@abw/badger-utils'

const SPACE_UNITS = (name='rem', unit=0.25) => [0, 1, 2, 3, 4, 6, 8, 10, 12, 16, 20, 24, 28, 32].reduce(
  (hash, n) => {
    return {
      ...hash,
      [n]: {
        vars: { unit: `${n} unit${n == 1 ? '' : 's'} (${n * unit}${name})` }
      }
    }
  },
  { }
)
const SPACE_SIDES = name => ({
  t: {
    vars: {
      sides: 'the top'
    },
    more: SPACE_UNITS(name),
  },
  r: {
    vars: {
      sides: 'the right'
    },
    more: SPACE_UNITS(name),
  },
  b: {
    vars: {
      sides: 'the right'
    },
    more: SPACE_UNITS(name),
  },
  l: {
    vars: {
      sides: 'the left'
    },
    more: SPACE_UNITS(name),
  },
  v: {
    vars: {
      sides: 'the top and bottom (v = vertical)'
    },
    more: SPACE_UNITS(name),
  },
  h: {
    vars: {
      sides: 'the left and right (h = horizontal)'
    },
    more: SPACE_UNITS(name),
  },
  ...SPACE_UNITS(name),
})

const REM_UNITS = format => [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 30, 40, 50, 60, 70, 90, 100].reduce(
  (hash, n) => {
    return {
      ...hash,
      [`${n}rem`]: {
        description: () => format(n)
      }
    }
  },
  { }
)
const PX_UNITS = format => [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 30, 40, 50, 60, 70, 90, 100].reduce(
  (hash, n) => {
    return {
      ...hash,
      [`${n * 16}px`]: {
        description: () => format(n * 16)
      }
    }
  },
  { }
)

export const CSS_CLASSES = {
  'mar': {
    vars: {
      unit: '1 unit (0.25rem)',
      sides: 'all sides'
    },
    description: vars => `Add ${vars.unit} margin to ${vars.sides}`,
    more: SPACE_SIDES('rem')
  },
  'pad': {
    vars: {
      unit: '1 unit (0.25em)',
      sides: 'all sides'
    },
    description: vars => `Add ${vars.unit} margin to ${vars.sides}`,
    more: SPACE_SIDES('em')
  },
  'width': {
    more: {
      ...REM_UNITS(n => `Set width to ${n}rem (${n * 16}px)`),
      ...PX_UNITS(n => `Set width to ${n}px`),
    }
  },
  'max': {
    more: {
      width: {
        more: {
          ...REM_UNITS(n => `Set max-width to ${n}rem (${n * 16}px)`),
          ...PX_UNITS(n => `Set max-width to ${n}px`),
        }
      }
    }
  },
  'text': {
    more: {
      left: { description: () => 'Align text to the left' },
      right: { description: () => 'Align text to the right' },
      center: { description: () => 'Align text to the center' },
    }
  },
  'block': {
    more: {
      left: { description: () => 'Align block to the left' },
      right: { description: () => 'Align block to the right' },
      center: { description: () => 'Align block to the center' },
    }
  },
  'display': {
    more: {
      inline: { description: () => 'Display element inline' },
      block: { description: () => 'Display element as a block' },
      'inline-block': { description: () => 'Display element as an inline block' },
    }
  },
  'font': {
    more: {
      sans: { description: () => 'Use a sans-serif font' },
      serif: { description: () => 'Use a serif font' },
      system: { description: () => 'Use the system font' },
      mono: { description: () => 'Use a monospaced font' },
    }
  }
}

export const decodeClass = input => {
  const parts = input.split('-')
  let good = [ ]
  let rest = [ ]
  let next = [ ]
  let vars = { }
  let root = CSS_CLASSES
  let desc = undefined

  while (parts.length) {
    const part = parts.shift()
    const match = root[part]
    if (match) {
      console.log(`matched ${part}`)
      desc = match.description || desc
      if (match.vars) {
        vars = { ...vars, ...match.vars }
      }
      good.push(part)
      root = match.more || { }
      next = Object.keys(root)
    }
    else {
      rest.push(part)
      break
    }
  }
  return {
    good, rest, vars, next,
    description: desc ? desc(vars) : null
  }
}

export const decodeClasses = input =>
  splitList(input)
    .filter( i => ! i.match(/^\s*$/) )
    .map(decodeClass)


export default decodeClasses