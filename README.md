# Badger CSS

## Modern, minimal CSS presets.

You've probably heard of CSS reset stylesheets that provide sensible
defaults for HTML elements to smooth out some of the inconsistencies
between browsers. And no doubt you're aware of the plethora of fully-featured
CSS toolkits that implement all manner of styles for UI components.

Badger CSS sits somewhere between the two. It provides some sensible presets
for HTML elements that you can use out of the box and expect to get
reasonable results. It's highly configurable and is really designed to
be a starting point for building your own CSS stylesheets, design systems
and UI toolkits.

## Documentation Website

See the website for documentation and demonstrations.

https://badgerpower.com/badger-css/

## Getting Started

Add the `@abw/badger-css` module to your project using your favourite
package manager.

```bash
## using npm
$ npm add @abw/badger-css

## using yarn
$ yarn add @abw/badger-css

## using pnpm
$ pnpm add @abw/badger-css
```

You can then import the CSS file into your site or application.

For example, to import it into a React app running under Vite, Next.js,
etc., you can import the stylesheet directly into your application.

```js
import '@abw/badger-css/styles/badger.css';
```

If you're using SASS / SCSS then you can import the main SCSS source file
into your stylesheet.

```scss
@import '@abw/badger-css/styles/badger.scss';
```

## Configuration Options

There are lots.  This documentation is TODO.

## Notes for Maintainers

Check out the repository.

```bash
$ git clone https://github.com/abw/badger-css.git
$ cd badger-css
```

Install the dependencies.

```bash
$ pnpm install
```

To run the development server.

```bash
$ pnpm dev
```

To build for production.

```bash
$ pnpm build
```

To build the documentation.

```bash
$ pnpm build:docs
```

To preview the documentation.

```bash
$ pnpm preview
```

Check source code for formatting errors.

```bash
$ pnpm lint
```

# Author

Andy Wardley