export const GettingStartedSection = {
  title: 'Getting Started',
  revealable: true,
  openPath: '/getting-started',
  menu: [
    { to: '/getting-started/installation', text: 'Installation' },
    { to: '/getting-started/good', text: "What's good about it?" },
    { to: '/getting-started/bad', text: "What's wrong with it?" },
    // { to: '/decoder', text: "Decoder" },
  ]
}

export const ColorsSection = {
  title: 'Colors',
  revealable: true,
  openPath: '/colors',
  menu: [
    // { to: '/colors/',         text: 'Introduction' },
    { to: '/colors/demo',         text: 'Color Demo' },
    { to: '/colors/ranges',       text: 'Color Ranges' },
    { to: '/colors/brand',        text: 'Brand Colors' },
    { to: '/colors/variables',    text: 'Color Variables' },
    { to: '/colors/utilities',    text: 'Color Utilities' },
    { to: '/colors/gradients',    text: 'Color Gradients' },
    { to: '/colors/palette',      text: 'Custom Palette' },
  ]
}

export const UtilitiesSection = {
  title: 'Utilities',
  revealable: true,
  openPath: '/utilities',
  menu: [
    { to: '/utilities/',              text: 'Introduction', exact: true  },
    { to: '/utilities/alignment',     text: 'Alignment' },
    { to: '/utilities/borders',       text: 'Borders' },
    { to: '/utilities/breakpoints',   text: 'Breakpoints' },
    { to: '/utilities/columns',       text: 'Columns' },
    { to: '/utilities/conform',       text: 'Conform' },
    { to: '/utilities/display',       text: 'Display' },
    { to: '/utilities/flex',          text: 'Flex' },
    { to: '/utilities/fonts',         text: 'Fonts' },
    { to: '/utilities/font-styles',   text: 'Font Styles' },
    { to: '/utilities/font-weights',  text: 'Font Weights' },
    { to: '/utilities/grid',          text: 'Grid' },
    { to: '/utilities/position',      text: 'Position' },
    { to: '/utilities/scrolling',     text: 'Scrolling' },
    { to: '/utilities/shadows',       text: 'Shadows' },
    { to: '/utilities/sizes',         text: 'Text Sizes' },
    { to: '/utilities/spacing',       text: 'Spacing' },
    { to: '/utilities/split',         text: 'Splits' },
    { to: '/utilities/stack',         text: 'Stacking' },
    { to: '/utilities/surfaces',      text: 'Surfaces' },
    { to: '/utilities/typography',    text: 'Typography' },
    { to: '/utilities/widths',        text: 'Widths' },
    { to: '/utilities/wrap',          text: 'Wrap' },
  ]
}

export const FormsSection = {
  title: 'Forms',
  revealable: true,
  openPath: '/forms',
  menu: [
    { to: '/forms/',              text: 'Introduction', exact: true },
    { to: '/forms/buttons',       text: 'Buttons' },
    { to: '/forms/checkboxes',    text: 'Checkboxes' },
    { to: '/forms/radio-buttons', text: 'Radio Buttons' },
    { to: '/forms/select',        text: 'Select Inputs' },
    { to: '/forms/text',          text: 'Text Inputs' },
    { to: '/forms/textarea',      text: 'Text Area Inputs' },
    { to: '/forms/input',         text: 'Fake Inputs' },
    { to: '/forms/multi-inputs',  text: 'Multiple Inputs' },
    { to: '/forms/field',         text: 'Form Fields' },
    { to: '/forms/prefix-suffix', text: 'Prefix and Suffix' },
    { to: '/forms/fieldset',      text: 'Form Field Sets' },
    { to: '/forms/styling',       text: 'Form Styling' },
  ]
}

export const ComponentsSection = {
  title: 'Components',
  revealable: true,
  openPath: '/components',
  menu: [
    { to: '/components/alerts',   text: 'Alerts' },
    { to: '/components/badges',   text: 'Badges' },
    { to: '/components/details',  text: 'Details' },
    { to: '/components/dialog',   text: 'Dialog' },
    // { to: '/components/dropdown', text: 'Dropdown' },
    { to: '/components/icons',    text: 'SVG Icons' },
    { to: '/components/menus',    text: 'Menus' },
    { to: '/components/overlay',  text: 'Overlay' },
    { to: '/components/tables',   text: 'Tables' },
    { to: '/components/tabs',     text: 'Tabs' },
    { to: '/components/tooltips', text: 'Tooltips' },
  ]
}

export const CustomisingSection = {
  title: 'Customising',
  revealable: true,
  openPath: '/customising',
  menu: [
    { to: '/customising/sass',    text: 'Custom Stylesheet' },
  ]
}

export const TestSection = {
  title: 'Tests',
  revealable: true,
  openPath: '/test',
  menu: [
    { to: '/test/flex-stack',     text: 'Flex Stack' },
    { to: '/test/nested-details', text: 'Nested Details' },
  ]
}

export const sidebar = {
  sections: [
    GettingStartedSection,
    ColorsSection,
    UtilitiesSection,
    FormsSection,
    ComponentsSection,
    CustomisingSection,
    ...(
      import.meta.env.DEV
        ? [ TestSection ]
        : [ ]
    )
  ]
}

export default sidebar