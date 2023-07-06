import React, { useState } from 'react'
import Controls from './Controls.jsx'
import Div from './Div.jsx'
import Link from '../ui/Link.jsx'

const Demo = () => {
  const [options, setOptions] = useState({
    range: 'brand',
    bgc: 90,
    fgc: 30,
    hdc: 20,
    bdc: 60,
    bdr: 3,
    bdw: 2,
    pad: 4,
    mar: 6,
    shadow: 2,
    border: true
  })
  const toggleOption = name => () => setOptions(
    options => ({
      ...options,
      [name]: ! options[name]
    })
  )
  const setOption = name => value => setOptions(
    options => ({
      ...options,
      [name]: value
    })
  )

  return (
    <div className="Xprose">
      <h1>Demo</h1>
      <div className="grid-2 gap-h-4 stack-desktop">
        <div>
          <p>
            One of the novel approaches that Badger CSS employs is to provide CSS
            classes for each of the colors in the palette.  There are then further
            CSS classes that can be used to select the particular shade (or color{' '}
            &quot;stop&quot;) from that range to use for the background, foreground,
            heading and border colors.
          </p>
          <p>
            One benefit of this approach is that it allows you to design color
            agnostic components that work with both light and dark themes, and can
            then be used with any color range.  For
            some examples, see the{' '}
            <Link to="/components/alerts" text="Alerts"/> and {' '}
            <Link to="/components/tables" text="Tables"/> pages
          </p>
          <p>
            Another more practical benefit is that it avoid the combinatorial
            explosion of CSS classes required to cover every combination of color
            range and stop for foreground, background, heading and border colors.
          </p>
        </div>
        <div>
          <p>
            Further utility classes are provided for selecting font size, border
            width and radius, margins, padding, shadows and various layout options.
            They&apos;re similar to what you&apos;ll find in other CSS toolkits.
          </p>
          <p>
            The choice about what is included and what isn&apos;t is entirely
            arbitrary but I lean towards minimalism and have only included the
            kind of utility classes that I use in most, if not all web sites.
            It&apos;s really easy for you to add in your own utility classes,
            or change the settings for the provided utilities, if you want to.
          </p>
          <p>
            So without further ado, click on the buttons below to select different
            colors and layout options.  Each one selects a CSS class which affects
            the way the output is displayed.
          </p>
        </div>
      </div>
      <div className="grid gap-8">
        <Div options={options}/>
        <Controls
          options={options}
          setOption={setOption}
          toggleOption={toggleOption}
        />
      </div>
    </div>
  )
}

export default Demo