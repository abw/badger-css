import React       from 'react'
import FormExample from '../../snippets/form/example.html?raw'
import Sizes       from '../../snippets/form/sizes.html?raw'
import Surfaces    from '../../snippets/form/surfaces.html?raw'
import NoFocus     from '../../snippets/form/no-focus.html?raw'
import root        from 'react-shadow'
import Example from '../../site/Example.jsx'
// import Example from '../../site/Example.jsx'

const Index = () =>
  <div className="prose">
    <h1>Forms</h1>
    <blockquote className="intro">
      There is something about styling forms, that&apos;s so not fun.
      It&apos;s like <em>&quot;How much less fun could this be?&quot;</em>{' '}
      and the answer is <em>&quot;None, none... less fun.&quot;</em>
      <div className="attrib">
        Nigel Tufnel&apos;s website designer
      </div>
    </blockquote>

    <h2>None Less Fun</h2>
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
    <p>
      Here&apos;s the same form rendered twice.  Once with the default HTML
      styling and again with the default Badger CSS styles.
    </p>
    <div className="grid-2 gap-8 mar-t-10 stack-desktop">
      <div className="output">
        <h3 className="mar-b-4">Default Form Styles</h3>
        <root.div>
          <div dangerouslySetInnerHTML={{__html:FormExample}}></div>
        </root.div>
      </div>
      <div className="output">
        <h3 className="mar-b-4">Badger CSS Form Styles</h3>
        <div dangerouslySetInnerHTML={{__html:FormExample}}></div>
      </div>
    </div>

    <h2>Themes and Surfaces</h2>
    <p>
      Styling forms is made that much harder these days by the need to support
      both light and dark themes.  On top of that we might want to have forms
      included on different surfaces with varying levels of background intensity.
      Thanks to the magic of CSS custom properties we can tweak the colors
      used to render forms depending on the background color of the container.
    </p>
    <div className="grid-3 gap-4 stack-widescreen mar-b-8">
      { [0, 1, 2, 3, 4, 5].map(
        n =>
          <div className={`surface-${n} pad-6 border shadow-2`} key={n}>
            <h3 className="font-mono mar-b-3">surface-{n}</h3>
            <div dangerouslySetInnerHTML={{__html:Surfaces}}></div>
          </div>
      )}
    </div>

    <h2>Go Large?</h2>
    <p>
      All form components are sized using ems and will adapt to whatever
      the current text size is.  If you want a small form, for example, then
      you just need to add a <code>small</code> class to the form or one of
      its parent containers.
    </p>
    <div className="grid-2 gap-4 stack-widescreen">
      { ['smaller', 'small', 'smallish', 'largish', 'large', 'larger'].map(
        size =>
          <div className={`${size} pad-6 border shadow-2`} key={size}>
            <h3 className="font-mono mar-b-3">{size}</h3>
            <div dangerouslySetInnerHTML={{__html:Sizes}}></div>
          </div>
      )}
    </div>

    <h2>Accessibility and Focus</h2>
    <p>
      If you&apos;ve played with any of the forms above you may have noticed
      the prominent ring around inputs when focussed.  This is important for
      accessibility to clearly indicate which field is selected.
    </p>
    <p>
      If for some reason you really, really need to disabled it because
      you&apos;re indicating the focus some other way then you can add the{' '}
      <code>no-focus</code> class to the inputs.
    </p>
    <Example
      html={NoFocus}
      language="html"
      // expand={true}
    />


  </div>

export default Index

/*
        <Shadow>
          Hello world!
        </Shadow>
*/
