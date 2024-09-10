import React from 'react'
import { Source } from '@abw/badger-website'

const SplitBlock = ({
  children, code, caption, language, expand,
  className=''
}) =>
  <div className={`grid-2 gap-8 top stack-desktop ${className}`}>
    <div className="wide">
      {children}
    </div>
    <Source
      code={code}
      caption={caption}
      language={language}
      expand={expand}
      // className="mar-b-8"
    />
  </div>

export default SplitBlock