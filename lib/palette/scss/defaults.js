export const defaultBrandColor = 'blue'
export const defaultSemanticColors = {
  info:     'blue',
  success:  'green',
  warning:  'orange',
  error:    'red',
  // These are no longer global semantic colors.  They were used in forms
  // but it made things complicated.  So we now define explicit selected
  // in the form config.
  // focus:    'blue',
  // valid:    'green',
  // invalid:  'red',
}
export const checkboxRadioSelectors = '.checkbox, .radio, :has(input[type=checkbox]), :has(input[type=radio])'
export const defaultSelectors = {
  info:     '.info',
  success:  '.success',
  warning:  '.warning',
  error:    '.error',
  focus: [
    '.field:has(:focus)',
    '.focus:not(button):not(.button)',
    ':focus:not(button):not(.button)',
    `label:is(${checkboxRadioSelectors}):is(:has(:focus))`,
  ],
  valid: [
    '.field.valid',
    '.field.valid :focus:not(button):not(.button)',
    '.field.valid:has(:focus)',
    `.field.valid:has(:focus) label:is(${checkboxRadioSelectors}):is(:has(:focus))`,
  ],
  invalid: [
    '.field.invalid',
    '.field.invalid :focus:not(button):not(.button)',
    '.field.invalid:has(:focus)',
    `.field.invalid:has(:focus) label:is(${checkboxRadioSelectors}):is(:has(:focus))`,
  ]
}
