# Dotkom react-components

This is a collection of reusable react components.

## How to use

Install the package `npm install @dotkomonline/react-components`.

Import a component directly

`import { Button } from 'package/Buttons'`

or import the whole package and use what you want

`import { Button } from 'package'`

## Example build config

As any React project, using these components requires transpiling them. Look up babel and webpack for a simple start: https://babeljs.io/docs/plugins/transform-react-jsx/

For some examples check out the ones in use for storybook:

* [example babel config](https://github.com/dotkom/react-components/blob/master/.storybook/.babelrc)
* [example webpack config](https://github.com/dotkom/react-components/blob/master/.storybook/webpack.config.js)

Sometimes `node_modules` will be ignored from webpack transpiling, and if that's the case this package has to be excepted from that exclude.

If using an exclude-clause, add this matching rule to exclude `@dotkomonline/react-components` from being excluded (double negatives are fun, right?)

`exclude: /node_modules(?!\/@dotkomonline\/react-components)`

### CSS

Components use [CSS modules](https://github.com/css-modules/css-modules) for styling. This requires the webpack-config to use [css-loader](https://github.com/webpack-contrib/css-loader) (for development use it's smart to use style-loader for hot-reloading).

### Images

Some components uses images. These images are imported by the javascript code using ES6 import statements and they can be used in an HTML element like so: `<img src={imageSource} />`. Depending on the transpiler, these resources can be imported inline as base64 strings or URIs.

Some suggestions for webpack loaders to use:

* [url-loader](https://github.com/webpack-contrib/url-loader) for b64 strings
* [file-loader](https://github.com/webpack-contrib/file-loader) for URIs

## Release new version

Read [npm version](https://docs.npmjs.com/cli/version) and [npm publish](https://docs.npmjs.com/cli/publish) for how to release. Log in to [dotkomuser](https://www.npmjs.com/~dotkomuser).

We follow [semantic versioning](https://semver.org/), so make sure you bump the correct version when bumping.
