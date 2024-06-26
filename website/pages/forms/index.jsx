import React        from 'react'
import FormExample  from '@/snippets/form/example.html?raw'
import Surfaces     from '@/snippets/form/surfaces.html?raw'
import NoFocus      from '@/snippets/form/no-focus.html?raw'
import FocusSet     from '@/snippets/form/inset-outset.html?raw'
import SizeExample  from '@/examples/components/FormSize.jsx'
import Example      from '@/site/Example.jsx'
import Split        from '@/site/Split.jsx'
import Note         from '@/site/Note.jsx'
import root         from 'react-shadow'
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
    <Split>
      <div>
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
      </div>
      <div>
        <p>
          Badger CSS includes form styling presets, supporting both light and
          dark themes out of the box. It uses native form components for
          accessibility and mobile friendliness.  Everything is configurable
          if you want to change things, but you don&apos;t have to.
          {/* Simple, beautiful, classic! */}
        </p>
        <p>
          Here&apos;s the same form rendered twice.  Once with the default HTML
          styling and again with the default Badger CSS styles.  In case you&apos;re
          wondering, there&apos;s no Javascript in any of these forms.  It&apos;s
          all just vanilla HTML and CSS.
        </p>
      </div>
    </Split>
    <div className="grid-2 gap-8 mar-t-10 stack-desktop">
      <div className="output">
        <h3 className="mar-v">Default HTML Form Styles</h3>
        <h4 className="mar-t mar-b-8">Would you been seen holding this?</h4>
        <root.div>
          <div dangerouslySetInnerHTML={{__html:FormExample}}></div>
        </root.div>
      </div>
      <div className="output">
        <h3 className="mar-v">Badger CSS Form Styles</h3>
        <h4 className="mar-t mar-b-8">Beautiful plumage!</h4>
        <div dangerouslySetInnerHTML={{__html:FormExample}}></div>
      </div>
    </div>

    <h2 className="mar-t-8">Adaptive Sizes</h2>
    <Split>
      <p>
        All form components are sized using ems and will adapt to whatever
        the current text size is.  If you want a small form, for example, then
        you just need to add a <code>small</code> class to the form or one of
        its parent containers.
      </p>
      <Note title="Try it out" className="mar-t-4">
        Try selecting different sizes from the options below and see how
        the form inputs scale.
      </Note>
    </Split>
    <SizeExample/>

    <h2>Accessibility and Focus</h2>
    <Split>
      <div>
        <p>
          If you&apos;ve played with any of the forms above you may have noticed
          the prominent ring around inputs when focussed.  This is important for
          accessibility to clearly indicate which field is selected.
        </p>
        <p>
          For buttons,
          checkboxes and radio buttons we use the <code>:focus-visible</code> selector
          instead of <code>:focus</code>.  This will add the focus ring when the
          element is navigated to using the keyboard (e.g. by pressing the TAB key)
          but not when the element is directly clicked on.  After all, if you&apos;ve
          just clicked on an element then it&apos;s usually safe to assume you
          know that it has the focus.
        </p>
      </div>
      <div>
        <p>
          By default the focus ring is displayed outside the input or button.
          You can add the <code>data-badger-focus=&quot;inset&quot;</code> attribute
          to a container element to switch the focus ring to be inset for any
          inputs or buttons contained within it.
        </p>
      </div>
    </Split>
    <Example
      html={FocusSet}
      language="html"
      // expand={true}
    />
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

    <h2>Themes and Surfaces</h2>
    <Split>
      <p>
        Styling forms is made that much harder these days by the need to support
        both light and dark themes.  On top of that we might want to have forms
        included on different surfaces with varying levels of background intensity.
        Thanks to the magic of CSS custom properties we can tweak the colors
        used to render forms depending on the background color of the container.
      </p>
      <p>
        In these examples below it may not be immediately obvious that the
        colors are slightly different but they are.  They&apos;re different
        so that they look more-or-less the same, while providing adequate
        contrast.
      </p>
    </Split>
    <div className="grid-3 gap-4 stack-widescreen mar-b-8">
      { ['surface', 'surface-1', 'surface-2', 'surface-3', 'surface-4', 'surface-5'].map(
        n =>
          <div className={`${n} pad-6 border shadow-2`} key={n}>
            <h3 className="font-mono mar-b-3">{n}</h3>
            <div dangerouslySetInnerHTML={{__html:Surfaces}}></div>
          </div>
      )}
    </div>



  </div>

export default Index

