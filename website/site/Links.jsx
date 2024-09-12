import React from 'react'
import { Link } from '@abw/badger-website'

export const CodeLink = ({ to, text, ...props }) =>
  <Link to={to} className="code" {...props}>{text}</Link>

// eslint-disable-next-line react/display-name
const PageLinker = (to, text) => (props={}) =>
  <Link to={to} text={text} {...props}/>

// eslint-disable-next-line react/display-name
const ExtLinker = (href, text=href) => (props={}) =>
  <Link href={href} text={text} targetBlank {...props}/>

export const InstallLink   = PageLinker('/getting-started/installation', 'installation')
export const ColorLink     = PageLinker('/colors/utilities', 'color')
export const RangesLink    = PageLinker('/colors/ranges', 'color ranges')
export const BrandLink     = PageLinker('/colors/brand', 'brand colors')
export const PaletteLink   = PageLinker('/colors/palette', 'custom palette')
export const ColVarsLink   = PageLinker('/colors/variables', 'CSS custom properties')
export const UtilitiesLink = PageLinker('/utilities', 'utility classes')
export const BorderLink    = PageLinker('/utilities/borders', 'border')
export const FlexLink      = PageLinker('/utilities/flex', 'flex')
export const GridLink      = PageLinker('/utilities/grid', 'grid')
export const SizeLink      = PageLinker('/utilities/size', 'size')
export const ShadowLink    = PageLinker('/utilities/shadows', 'shadow')
export const SpacingLink   = PageLinker('/utilities/spacing', 'spacing')
export const SplitLink     = PageLinker('/utilities/split', 'split')
export const StackLink     = PageLinker('/utilities/stack', 'stacking')
export const WidthLink     = PageLinker('/utilities/widths', 'width')
export const AlertsLink    = PageLinker('/components/alerts', 'alerts')
export const IconsLink     = PageLinker('/components/icons', 'icons')
export const MenusLink     = PageLinker('/components/menus', 'menus')
export const TablesLink    = PageLinker('/components/tables', 'tables')
export const FormsLink     = PageLinker('/forms', 'forms')
export const TextLink      = PageLinker('/forms/text', 'text')
export const CheckboxLink  = PageLinker('/forms/checkboxes', 'checkbox')

export const TailwindLink  = ExtLinker('https://tailwindcss.com/', 'tailwind.css')
export const SassLink      = ExtLinker('https://sass-lang.com/', 'SASS')
