import React from 'react'
import Split from '@/site/Split.jsx'
import { Snippet } from '@abw/badger-website'
import { InstallLink } from '@/site/Links.jsx'

const Palette = () =>
  <div className="prose flow">
    <h1>Custom Palette</h1>
    <Split>
      <div>
        <p>
          The pre-defined color palette is a good starting point for building
          a web site.  There&apos;s a certain amount of flexibility built in to
          the SASS source files: you can adjust the hues of the different color
          ranges, define your own brand color or colors, and specify which of the
          color ranges you want to include (and implicitly, which ones you
          don&apos;t want).
        </p>
        <p>
          When you need a bit more flexibility you can head over to the{' '}
          <a href="https://badgerpower.com/badger-color/">Badger Color</a> web app
          and either customise one of the standard palettes or design your own
          palette from scratch.
        </p>
      </div>
      <div>
        <p>
          You can then download the palette data as a JSON file and use the
          script provided to generate the SCSS configuration files for your
          palette, ready to integrate into Badger CSS.  At any point you can
          upload the palette back into Badger Color, make some adjustments,
          download it again and repeat the process.
        </p>
        <p>
          You&apos;ll need to have <code>@abw/badger-css</code> installed as
          a developer dependency for your project for these next steps to work.
          See the <InstallLink/> page for details (TL;DR:{' '}
          <code>npm add -D @abw/badger-css</code> or the
          equivalent with <code>yarn</code> or <code>pnpm</code>).
        </p>
      </div>
    </Split>

    <h2>Palette Configuration File</h2>
    <Split>
      <div>
        <p>
          For these examples, we&apos;ll assume that you&apos;ve download your
          custom palette file and saved it in a <code>config</code> directory
          under your project root as <code>my-palette.json</code>.  It
          doesn&apos;t have to be in the <code>config</code> directory - you can
          put it anywhere you like in your project.
        </p>
        <p>
          You then need to create a configuration file like the one shown
          here.  It can be a YAML file or JSON file, you can call it anything
          you like (as long as it has a <code>.yaml</code> or <code>.json</code>{' '}
          file extension), and you can put it anywhere you like in your project.
          Here we&apos;ll assume it&apos;s called{' '}
          <code>export-my-palette.yaml</code> and is also located in
          the <code>config</code> directory under the project root.
        </p>
        <p>
          You should define <code>palette</code> to be the path to your
          palette data file (relative to the project root), and{' '}
          <code>output</code> to be a path to the directory where you want
          the SCSS files to be written (also relative to the project root).
        </p>
        <p>
          You can also define your brand color as <code>brandColor</code>.
          There are other configuration options you can specify but we&apos;ll
          keep it simple for now.
        </p>
      </div>
      <Snippet
        file="palette/export-my-palette.yaml"
        caption="config/export-my-palette.yaml"
        expand
      />
    </Split>

    <h2>Adding a <code>package.json</code> Script</h2>
    <Split>
      <div>
        <p>
          Then add a line to the <code>scripts</code> section of your{' '}
          <code>package.json</code> file like this.
        </p>
        <p>
          The <code>-c</code> (or <code>--config</code> if you prefer verbosity)
          option tells it where your config file is located.  The <code>-v</code>{' '}
          (or <code>--verbose</code>) option enables messages to tell you what
          it&apos;s doing.  You can leave this off if you prefer.
        </p>
      </div>
      <Snippet
        file="palette/package.json"
        caption="package.json"
        expand
      />
    </Split>

    <h2>Export the Palette as SCSS</h2>
    <Split>
      <div>
        <p>
          You can then <code>run palette</code> from the command line using{' '}
          <code>npm</code>, <code>yarn</code> or <code>pnpm</code>, depending
          on which package manager you&apos;re using.
        </p>
        <p>
          If you&apos;ve got the verbose mode enabled, you should see a
          message reporting each color range being written to a file in{' '}
          <code>style/color/range/XXX</code>, and the main palette index
          file being written to <code>style/color/palette.scss</code>.
        </p>
      </div>
      <Snippet
        file="palette/run-script"
        caption="Exporting the palette"
        language='bash'
        expand
      />
    </Split>

    <h2>Defining a Custom <code>badger.scss</code> File</h2>
    <Split>
      <div>
        <p>
          Now you need to define your own version of the main{' '}
          <code>badger.scss</code> which loads your palette instead of the
          default one.
        </p>
        <p>
          In this example we&apos;ll assume that it&apos;s saved as
          <code>badger.scss</code> in the <code>styles</code> directory,
          alongside the newly created <code>color</code> directory that
          has been exported from the palette.
        </p>
        <p>
          This is also a good place to set any SASS variables that change
          the defaults for Badger CSS.  They should go at the top of this
          file.
        </p>
      </div>
      <Snippet
        file="palette/badger.scss"
        caption="Custom badger.scss"
        expand
      />
    </Split>

    <h2>Replace the Standard <code>badger.scss</code> File</h2>
    <Split>
      <div>
        <p>
          Now you just need to include the new file <code>badger.scss</code>{' '}
          into your website or main stylesheet.  If you were previously loading
          the default <code>badger.scss</code> then should change the path to
          point to your new local <code>badger.scss</code> file.
        </p>
      </div>
      <Snippet
        file="palette/inc-badger.scss"
        caption="Including your badger.scss"
        expand
      />
    </Split>
  </div>

export default Palette
