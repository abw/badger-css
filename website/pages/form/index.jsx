import React    from 'react'
import Example    from '../../snippets/form/example.html?raw'
import root from 'react-shadow'

const Index = () =>
  <div className="prose">
    <h1>Forms</h1>
    <blockquote className="intro">
      There is something about styling forms, that&apos;s so not fun,
      it&apos;s like <em>&quot;How much less fun could this be?&quot;</em>{' '}
      and the answer is: <em>&quot;None, none... less fun.&quot;</em>
      <div className="attrib">
        Nigel Tufnel&apos;s website designer
      </div>
    </blockquote>
    <p>
      Anyone reading this who is old enough to have served in the browser
      wars will no doubt be rolling their eyes at this point, thinking
      that kids these days don&apos;t know how lucky they are.
    </p>
    <p>
      It&apos;s certainly true that things are <i>much</i> better
      than they used.  But despite all the advances in CSS support and
      cross-browser compatibility, the default styling for HTML forms still
      looks like 1995 called and asked for its website back.
    </p>
    <p>
      Badger CSS includes form styling presets, supporting both light and
      dark themes out of the box. It uses native form components for
      accessibility and mobile friendliness.  Everything is configurable
      if you want to change things, but you don&apos;t have to.
      {/* Simple, beautiful, classic! */}
    </p>
    <div className="grid-2 gap-8 mar-t-10 stack-desktop">
      <div className="output">
        <h3 className="mar-b-4">Default Form Styles</h3>
        <root.div>
          <div dangerouslySetInnerHTML={{__html:Example}}></div>
        </root.div>
      </div>
      <div className="output">
        <h3 className="mar-b-4">Badger CSS Form Styles</h3>
        <div dangerouslySetInnerHTML={{__html:Example}}></div>
      </div>
    </div>
  </div>

export default Index

/*
        <Shadow>
          Hello world!
        </Shadow>
*/