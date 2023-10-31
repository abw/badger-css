#!/usr/bin/env node
import { commandLine, exportSCSSPalette, BadgerCSSVersion } from '../lib/index.js'

const script      = 'bin/badger-css-palette-scss.js'
const version     = BadgerCSSVersion
const description = 'Generates SCSS configuration files from a palette.'

async function main() {
  await commandLine({
    script,
    version,
    description,
    generator: exportSCSSPalette
  })
}
main()

