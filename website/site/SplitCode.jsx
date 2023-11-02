import React from 'react'
import CodeBlock from './CodeBlock.jsx'

const SplitBlock = ({
  children, code, caption, language, expand,
  className=''
}) =>
  <div className={`grid-2 gap-8 start stack-desktop ${className}`}>
    <div className="wide">
      {children}
    </div>
    <CodeBlock
      code={code}
      caption={caption}
      language={language}
      expand={expand}
      className="mar-b-8"
    />
  </div>

export default SplitBlock